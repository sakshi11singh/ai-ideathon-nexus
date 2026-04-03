import { SEOMeta } from "@/components/SEO/SEOMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Terms = () => {
  const ref = useScrollReveal();

  return (
    <>
      <SEOMeta
        title="Terms & Conditions | AI Ideathon 2026"
        description="Terms and conditions for participating in AI Ideathon 2026. Read about eligibility, intellectual property, liability, and participation rules."
        canonical="/terms"
      />

      <section className="section-padding bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-4xl">
          <div ref={ref} className="scroll-reveal">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-8">
              Terms & <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">Last updated: April 2026</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl space-y-8">
          <div ref={useScrollReveal()} className="glass-card p-8 scroll-reveal">
            <h2 className="font-display text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By registering for and participating in AI Ideathon 2026, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not participate in the event.
            </p>
          </div>

          <div ref={useScrollReveal()} className="glass-card p-8 scroll-reveal">
            <h2 className="font-display text-2xl font-bold mb-4">2. Eligibility</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Participants must be between 15-24 years of age</li>
              <li>• Must be currently enrolled in an educational institution</li>
              <li>• Team size cannot exceed 3 members</li>
              <li>• Participants must comply with all event rules and guidelines</li>
            </ul>
          </div>

          <div ref={useScrollReveal()} className="glass-card p-8 scroll-reveal">
            <h2 className="font-display text-2xl font-bold mb-4">3. Intellectual Property Rights</h2>
            <h3 className="font-semibold text-foreground mb-3 mt-4">Participant Ownership:</h3>
            <p className="text-muted-foreground mb-3">
              Participants retain ownership of their original work and intellectual property created during the hackathon.
            </p>
            
            <h3 className="font-semibold text-foreground mb-3">License to Organizers:</h3>
            <p className="text-muted-foreground mb-3">
              By participating, you grant CodeByt a non-exclusive, royalty-free license to use, display, and promote your project for:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Marketing and promotional purposes</li>
              <li>• Portfolio and showcase displays</li>
              <li>• Media coverage and press releases</li>
              <li>• Future event promotions</li>
            </ul>
          </div>

          <div ref={useScrollReveal()} className="glass-card p-8 scroll-reveal">
            <h2 className="font-display text-2xl font-bold mb-4">4. Project Ownership Transfer</h2>
            <p className="text-muted-foreground">
              For projects that win prizes or are selected for incubation, additional ownership transfer agreements may apply. Winners will be informed of any such requirements before final prize distribution.
            </p>
          </div>

          <div ref={useScrollReveal()} className="glass-card p-8 scroll-reveal">
            <h2 className="font-display text-2xl font-bold mb-4">5. Code of Conduct</h2>
            <p className="text-muted-foreground mb-4">Participants must:</p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li>• Treat all participants, mentors, and organizers with respect</li>
              <li>• Refrain from harassment or discrimination of any kind</li>
              <li>• Submit only original work or properly attribute third-party components</li>
              <li>• Comply with all applicable laws and regulations</li>
            </ul>
            <p className="text-muted-foreground">
              Violation of these standards may result in disqualification without refund.
            </p>
          </div>

          <div ref={useScrollReveal()} className="glass-card p-8 scroll-reveal">
            <h2 className="font-display text-2xl font-bold mb-4">6. Plagiarism and Originality</h2>
            <p className="text-muted-foreground mb-4">
              All submissions must be original work. Use of open-source libraries and frameworks is permitted with proper attribution. Plagiarism will result in immediate disqualification and potential legal action.
            </p>
          </div>

          <div ref={useScrollReveal()} className="glass-card p-8 scroll-reveal">
            <h2 className="font-display text-2xl font-bold mb-4">7. Liability Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              CodeByt and its partners are not liable for:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Any indirect, incidental, or consequential damages</li>
              <li>• Loss of data or equipment failure</li>
              <li>• Personal injury or property damage during the event</li>
              <li>• Disputes between team members or participants</li>
            </ul>
          </div>

          <div ref={useScrollReveal()} className="glass-card p-8 scroll-reveal">
            <h2 className="font-display text-2xl font-bold mb-4">8. Event Modifications</h2>
            <p className="text-muted-foreground">
              CodeByt reserves the right to modify, cancel, or reschedule the event or any part of it due to unforeseen circumstances. Participants will be notified of any significant changes.
            </p>
          </div>

          <div ref={useScrollReveal()} className="glass-card p-8 scroll-reveal">
            <h2 className="font-display text-2xl font-bold mb-4">9. Privacy</h2>
            <p className="text-muted-foreground">
              Your personal information will be handled according to our Privacy Policy. By participating, you consent to the collection and use of your information as described in the Privacy Policy.
            </p>
          </div>

          <div ref={useScrollReveal()} className="glass-card p-8 scroll-reveal">
            <h2 className="font-display text-2xl font-bold mb-4">10. Governing Law</h2>
            <p className="text-muted-foreground">
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in the organizer's location.
            </p>
          </div>

          <div ref={useScrollReveal()} className="glass-card p-8 scroll-reveal">
            <h2 className="font-display text-2xl font-bold mb-4">11. Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms and Conditions, please contact us at:{' '}
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

export default Terms;
