import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

// Base validation schema (will be extended per role)
const baseSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  linkedin: z.string().url("Invalid LinkedIn URL").optional().or(z.literal("")),
  bio: z.string().min(50, "Bio must be at least 50 characters"),
  organization: z.string().min(2, "Organization is required"),
  designation: z.string().min(2, "Designation is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  additionalInfo: z.string().optional(),
});

type BaseFormData = z.infer<typeof baseSchema>;

interface RoleFormProps {
  roleTitle: string;
  roleType: string;
  additionalFields?: React.ReactNode;
  customValidation?: any;
  successMessage?: string;
}

const RoleRegistrationForm = ({ 
  roleTitle, 
  roleType, 
  additionalFields,
  customValidation,
  successMessage 
}: RoleFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    message: string;
    submissionId?: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BaseFormData>({
    resolver: zodResolver(baseSchema.merge(customValidation || z.object({}))),
  });

  const onSubmit: SubmitHandler<BaseFormData> = async (data) => {
    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const submissionId = `${roleType.toUpperCase()}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      const sheetData = {
        ...data,
        role: roleType,
        timestamp: new Date().toISOString(),
        submissionId,
      };

      await submitToGoogleSheets(sheetData);

      const defaultMessage = `Thank you for registering as a ${roleTitle}! We will review your submission and get back to you soon.`;
      
      setSubmissionResult({
        success: true,
        message: successMessage || defaultMessage,
        submissionId,
      });

      reset();
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionResult({
        success: false,
        message: error instanceof Error ? error.message : "Submission failed. Please try again.",
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

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet2:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS&key=${apiKey}`;

    const rowData = [
      data.timestamp,
      data.submissionId,
      data.role,
      data.fullName,
      data.email,
      data.phone,
      data.organization,
      data.designation,
      data.linkedin || "N/A",
      data.bio,
      data.city,
      data.state,
      data.additionalInfo || "N/A",
    ];

    const response = await axios.post(url, {
      values: [rowData],
    });

    if (response.status !== 200) {
      throw new Error("Failed to submit to Google Sheets");
    }

    return response.data;
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
              {submissionResult.success ? "Submission Successful!" : "Submission Failed"}
            </p>
            <p className="text-muted-foreground">{submissionResult.message}</p>
            {submissionResult.submissionId && (
              <p className="text-sm text-primary mt-2 font-mono">
                Submission ID: {submissionResult.submissionId}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Registration Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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
                placeholder="Dr. John Doe"
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
                placeholder="+91 98765 43210"
              />
              {errors.phone && (
                <p className="text-error text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                LinkedIn Profile URL
              </label>
              <input
                {...register("linkedin")}
                type="url"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="https://linkedin.com/in/johndoe"
              />
              {errors.linkedin && (
                <p className="text-error text-sm mt-1">{errors.linkedin.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Professional Information */}
        <div className="glass-card p-8">
          <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
            Professional Details
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Organization/Company *
              </label>
              <input
                {...register("organization")}
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="Google, Microsoft, IIT Delhi, etc."
              />
              {errors.organization && (
                <p className="text-error text-sm mt-1">{errors.organization.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Designation/Title *
              </label>
              <input
                {...register("designation")}
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="CEO, Professor, Senior Engineer, etc."
              />
              {errors.designation && (
                <p className="text-error text-sm mt-1">{errors.designation.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                City *
              </label>
              <input
                {...register("city")}
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="New Delhi"
              />
              {errors.city && (
                <p className="text-error text-sm mt-1">{errors.city.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                State *
              </label>
              <input
                {...register("state")}
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="Delhi"
              />
              {errors.state && (
                <p className="text-error text-sm mt-1">{errors.state.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="glass-card p-8">
          <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
            Professional Bio
          </h3>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Bio/Introduction * (Minimum 50 characters)
            </label>
            <textarea
              {...register("bio")}
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              placeholder="Tell us about your professional background, achievements, and expertise..."
            />
            <p className="text-xs text-muted-foreground mt-1">
              Include your experience, areas of expertise, notable achievements, and why you'd be valuable as a {roleTitle.toLowerCase()}
            </p>
            {errors.bio && (
              <p className="text-error text-sm mt-1">{errors.bio.message}</p>
            )}
          </div>
        </div>

        {/* Additional Fields (if any) */}
        {additionalFields && (
          <div className="glass-card p-8">
            <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
              Additional Information
            </h3>
            {additionalFields}
          </div>
        )}

        {/* Additional Notes */}
        <div className="glass-card p-8">
          <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
            Additional Notes
          </h3>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Any Specific Requirements or Questions?
            </label>
            <textarea
              {...register("additionalInfo")}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              placeholder="Let us know if you have any questions or special requirements..."
            />
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
              `Submit as ${roleTitle}`
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

export default RoleRegistrationForm;
