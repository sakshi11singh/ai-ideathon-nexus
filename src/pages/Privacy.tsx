import { SEOMeta } from "@/components/SEO/SEOMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Privacy = () => {
  const ref = useScrollReveal();

  return (
    <>
      <SEOMeta
        title="Privacy Policy | AI Ideathon 2026"
        description="Privacy policy for AI Ideathon 2026. Learn how we collect, use, and protect your personal information."
        canonical="/privacy"
      />

      <section className="section-padding bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-4xl">
          <div ref={ref} className="scroll-reveal">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-8">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">Last updated: April 2026</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl space-y-8">
          <div ref={useScrollReveal()} className="glass-card p-8 scroll-reveal">
            <h2 className="font-display text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              CodeByt ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you participate in AI Ideathon 2026.
            </p>
          </div>

          <div ref={useScrollReveal()} className="glass-card p-8 scroll-reveal">
            <h2 className="font-display text-2xl font-bold mb-4">2. Information We Collect</h2>
            <h3 className="font-semibold text-foreground mb-3">Personal Information:</h3>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li>• Name, email address, phone number</li>
              <li>• Educational institution and enrollment details</li>
              <li>• Age and date of birth</li>
              <li>• Team information and project details</li>
            </ul>
            
            <h3 className="font-semibold text-foreground mb-3">Usage Data:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Website interaction data</li>
              <li>• Device and browser information</li>
              <li>• IP address and location data</li>
            </ul>
          </div>

          <div ref={useScrollReveal()} className="glass-card p-8 scroll-reveal">
            <h2 className="font-display text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• To process your registration and manage participation</li>
              <li>• To communicate event updates and important information</li>
              <li>• To improve our website and services</li>
              <li>• To issue certificates and coordinate prizes</li>
              <li>• To share with sponsors/partners (with your consent)</li>
              <li>• For marketing and promotional purposes (opt-in only)</li>
            </ul>
          </div>

          <div ref={useScrollReveal()} className="glass-card p-8 scroll-reveal">
            <h2 className="font-display text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Event partners and sponsors (only with explicit consent)</li>
              <li>• Service providers who assist in event operations</li>
              <li>• Legal authorities when required by law</li>
              <li>• Judges and mentors for evaluation purposes</li>
            </ul>
          </div>

          <div ref={useScrollReveal()} className="glass-card p-8 scroll-reveal">
            <h2 className="font-display text-2xl font-bold mb-4">5. Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div ref={useScrollReveal()} className="glass-card p-8 scroll-reveal">
            <h2 className="font-display text-2xl font-bold mb-4">6. Cookies</h2>
            <p className="text-muted-foreground">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.
            </p>
          </div>

          <div ref={useScrollReveal()} className="glass-card p-8 scroll-reveal">
            <h2 className="font-display text-2xl font-bold mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Access your personal information</li>
              <li>• Request correction of inaccurate data</li>
              <li>• Request deletion of your data</li>
              <li>• Opt-out of marketing communications</li>
              <li>• Withdraw consent at any time</li>
            </ul>
          </div>

          <div ref={useScrollReveal()} className="glass-card p-8 scroll-reveal">
            <h2 className="font-display text-2xl font-bold mb-4">8. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy, please contact us at:{' '}
              <a href="mailto:mukesh.mmp1234@gmail.com" className="text-primary hover:underline">
                mukesh.mmp1234@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
