import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { CheckCircle2, Loader2, AlertCircle, Shield } from "lucide-react";
import { 
  sanitizeEmail, 
  sanitizePhone, 
  sanitizeText, 
  validateHoneypot,
  rateLimiter,
  createFormTimer,
  storeCSRFToken,
  getCSRFToken
} from "@/lib/security";

// Form validation schema with Zod
const registrationSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  age: z.number().min(15).max(24),
  college: z.string().min(2, "College/School name is required"),
  course: z.string().min(2, "Course/Stream is required"),
  yearOfStudy: z.enum(["1", "2", "3", "4", "Other"]),
  teamSize: z.enum(["1", "2", "3"]),
  teamMembers: z.string().optional(),
  themePreference: z.enum([
    "Healthcare",
    "Sustainability",
    "Human-AI Collaboration",
    "Smart Infrastructure",
    "Open Innovation"
  ]),
  aiExperience: z.enum(["Beginner", "Intermediate", "Advanced"]),
  howDidYouHear: z.enum([
    "Social Media",
    "College Friend",
    "Professor",
    "Email",
    "Website",
    "Other"
  ]),
  requirements: z.string().optional(),
  // Honeypot field (hidden from users)
  website: z.literal("", { errorMap: () => ({ message: "Bot detected" }) }).optional(),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

interface SubmissionResult {
  success: boolean;
  message: string;
  registrationId?: string;
}

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null);
  const [showTeamMembers, setShowTeamMembers] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  // Initialize form timer and CSRF token
  const [formTimer] = useState(() => createFormTimer());
  
  useEffect(() => {
    formTimer.startTime();
    storeCSRFToken();
  }, [formTimer]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    getValues,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    mode: 'onChange', // Real-time validation
    reValidateMode: 'onChange',
  });

  const teamSize = watch("teamSize");

  // Show team members field if team size > 1
  useState(() => {
    if (teamSize && teamSize !== "1") {
      setShowTeamMembers(true);
    } else {
      setShowTeamMembers(false);
    }
  });

  const onSubmit: SubmitHandler<RegistrationFormData> = async (data) => {
    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      // Security Check 1: Honeypot validation
      if (!validateHoneypot(data.website || '')) {
        throw new Error('Bot activity detected. Submission rejected.');
      }

      // Security Check 2: Form timing (must spend at least 3 seconds)
      const timeSpent = formTimer.getTimeSpent();
      if (timeSpent < 3000) {
        throw new Error('Submission too fast. Please fill the form manually.');
      }

      // Security Check 3: Rate limiting
      const clientIdentifier = data.email.toLowerCase().trim();
      if (!rateLimiter.isAllowed(clientIdentifier)) {
        const remainingTime = Math.ceil(rateLimiter.getRemainingTime(clientIdentifier) / 1000);
        throw new Error(`Too many attempts. Please wait ${remainingTime} seconds.`);
      }

      // Security Check 4: Input sanitization
      const sanitizedData = {
        ...data,
        fullName: sanitizeText(data.fullName),
        email: sanitizeEmail(data.email),
        phone: sanitizePhone(data.phone),
        college: sanitizeText(data.college),
        course: sanitizeText(data.course),
        teamMembers: data.teamMembers ? sanitizeText(data.teamMembers) : undefined,
        requirements: data.requirements ? sanitizeText(data.requirements) : undefined,
      };

      // Generate unique registration ID
      const registrationId = `AII2026-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      // Prepare data for Google Sheets
      const sheetData = {
        ...sanitizedData,
        timestamp: new Date().toISOString(),
        registrationId,
        csrfToken: getCSRFToken(),
        timeSpentOnForm: timeSpent,
      };

      // Send to Google Sheets API directly
      await submitToGoogleSheets(sheetData);

      // Send confirmation email (if EmailJS configured)
      await sendConfirmationEmail(sanitizedData);

      setSubmissionResult({
        success: true,
        message: "Registration successful! Check your email for confirmation.",
        registrationId,
      });

      reset();
      formTimer.startTime(); // Reset timer
    } catch (error) {
      console.error("Registration error:", error);
      setSubmissionResult({
        success: false,
        message: error instanceof Error ? error.message : "Registration failed. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitToGoogleSheets = async (data: any) => {
    const sheetId = import.meta.env.VITE_GOOGLE_SHEET_ID;
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

    if (!sheetId || !apiKey) {
      throw new Error("Google Sheets configuration missing. Please check .env file.");
    }

    // Google Sheets API v4 endpoint
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS&key=${apiKey}`;

    // Format data as row array
    const rowData = [
      data.timestamp,
      data.registrationId,
      data.fullName,
      data.email,
      data.phone,
      data.college,
      data.course,
      data.yearOfStudy,
      data.teamSize,
      data.teamMembers || "N/A",
      data.themePreference,
      data.aiExperience,
      data.howDidYouHear,
      data.requirements || "N/A",
      data.csrfToken || "N/A",
      data.timeSpentOnForm || 0,
    ];

    const response = await axios.post(url, {
      values: [rowData],
    });

    if (response.status !== 200) {
      throw new Error("Failed to submit to Google Sheets");
    }

    return response.data;
  };

  const sendConfirmationEmail = async (data: RegistrationFormData) => {
    const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Skip if EmailJS not configured
    if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey) {
      console.log("EmailJS not configured - skipping confirmation email");
      return;
    }

    const emailjs = await import("emailjs-com");
    
    const templateParams = {
      to_name: data.fullName,
      to_email: data.email,
      event_name: "AI Ideathon 2026",
      event_date: "June 1-2, 2026",
      registration_id: `AII2026-${Date.now()}`,
      message: "Thank you for registering! We're excited to have you on board.",
    };

    await emailjs.send(
      emailjsServiceId,
      emailjsTemplateId,
      templateParams,
      emailjsPublicKey
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Success/Error Message */}
      {submissionResult && (
        <div
          className={`mb-8 p-6 rounded-lg flex items-start gap-3 ${
            submissionResult.success
              ? "bg-success/10 border border-success/20"
              : "bg-error/10 border border-error/20"
          }`}
        >
          {submissionResult.success ? (
            <CheckCircle2 className="text-success shrink-0 mt-1" size={24} />
          ) : (
            <AlertCircle className="text-error shrink-0 mt-1" size={24} />
          )}
          <div className="flex-1">
            <p
              className={`font-semibold mb-1 ${
                submissionResult.success ? "text-success" : "text-error"
              }`}
            >
              {submissionResult.success ? "Registration Successful!" : "Registration Failed"}
            </p>
            <p className="text-muted-foreground">{submissionResult.message}</p>
            {submissionResult.registrationId && (
              <p className="text-sm text-primary mt-2 font-mono">
                Registration ID: {submissionResult.registrationId}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Registration Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Honeypot Field - Hidden from users, catches bots */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
          style={{ display: 'none' }}
          aria-hidden="true"
        />
        
        {/* Personal Information */}
        <div className="glass-card p-8">
          <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
            Personal Information
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name *
              </label>
              <input
                {...register("fullName")}
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="John Doe"
              />
              {errors.fullName && (
                <p className="text-error text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <input
                {...register("email")}
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-error text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number *
              </label>
              <input
                {...register("phone")}
                type="tel"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="+91 84169 82676"
              />
              {errors.phone && (
                <p className="text-error text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Age * (15-24)
              </label>
              <input
                {...register("age", { valueAsNumber: true })}
                type="number"
                min="15"
                max="24"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="20"
              />
              {errors.age && (
                <p className="text-error text-sm mt-1">{errors.age.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div className="glass-card p-8">
          <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
            Academic Details
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                College/School Name *
              </label>
              <input
                {...register("college")}
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="Indian Institute of Technology"
              />
              {errors.college && (
                <p className="text-error text-sm mt-1">{errors.college.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Course/Stream *
              </label>
              <input
                {...register("course")}
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="Computer Science Engineering"
              />
              {errors.course && (
                <p className="text-error text-sm mt-1">{errors.course.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Year of Study *
              </label>
              <select
                {...register("yearOfStudy")}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
              >
                <option value="">Select Year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
                <option value="Other">Other</option>
              </select>
              {errors.yearOfStudy && (
                <p className="text-error text-sm mt-1">{errors.yearOfStudy.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Team & Theme Preferences */}
        <div className="glass-card p-8">
          <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
            Team & Theme Preferences
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Team Size *
              </label>
              <select
                {...register("teamSize")}
                onChange={(e) => setShowTeamMembers(e.target.value !== "1")}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
              >
                <option value="">Select Team Size</option>
                <option value="1">Solo (1 member)</option>
                <option value="2">Duo (2 members)</option>
                <option value="3">Team (3 members)</option>
              </select>
              {errors.teamSize && (
                <p className="text-error text-sm mt-1">{errors.teamSize.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Theme Preference *
              </label>
              <select
                {...register("themePreference")}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
              >
                <option value="">Select Theme</option>
                <option value="Healthcare">AI for Healthcare</option>
                <option value="Sustainability">AI for Sustainability</option>
                <option value="Human-AI Collaboration">Human-AI Collaboration</option>
                <option value="Smart Infrastructure">Smart Infrastructure</option>
                <option value="Open Innovation">Open Innovation</option>
              </select>
              {errors.themePreference && (
                <p className="text-error text-sm mt-1">{errors.themePreference.message}</p>
              )}
            </div>

            {showTeamMembers && (
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Team Members Names & Emails
                </label>
                <textarea
                  {...register("teamMembers")}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Member 1: John Doe (john@example.com)&#10;Member 2: Jane Smith (jane@example.com)"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Include names and email addresses of all team members
                </p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                AI Experience Level *
              </label>
              <select
                {...register("aiExperience")}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
              >
                <option value="">Select Experience</option>
                <option value="Beginner">Beginner (Just starting)</option>
                <option value="Intermediate">Intermediate (Some projects)</option>
                <option value="Advanced">Advanced (Experienced)</option>
              </select>
              {errors.aiExperience && (
                <p className="text-error text-sm mt-1">{errors.aiExperience.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="glass-card p-8">
          <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
            Additional Information
          </h3>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                How did you hear about AI Ideathon? *
              </label>
              <select
                {...register("howDidYouHear")}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
              >
                <option value="">Select Option</option>
                <option value="Social Media">Social Media (Instagram, LinkedIn, Twitter)</option>
                <option value="College Friend">College Friend/Peer</option>
                <option value="Professor">Professor/Teacher</option>
                <option value="Email">Email Newsletter</option>
                <option value="Website">Official Website</option>
                <option value="Other">Other</option>
              </select>
              {errors.howDidYouHear && (
                <p className="text-error text-sm mt-1">{errors.howDidYouHear.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Any Specific Requirements or Questions?
              </label>
              <textarea
                {...register("requirements")}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                placeholder="Let us know if you have any accessibility requirements, dietary restrictions, or questions..."
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Submitting...
              </>
            ) : (
              "Complete Registration"
            )}
          </button>
        </div>

        {/* Terms Notice */}
        <p className="text-xs text-muted-foreground text-center">
          By submitting this form, you agree to our{" "}
          <a href="/terms" className="text-primary hover:underline">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
