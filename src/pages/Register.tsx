import { CheckCircle2, Users, HelpCircle } from "lucide-react";
import { SEOMeta } from "@/components/SEO/SEOMeta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import RegistrationForm from "@/components/RegistrationForm";

const faqs = [
  { q: "Is there a registration fee?", a: "Registration details will be announced soon. Stay tuned for updates!" },
  { q: "Can I participate solo?", a: "Yes! You can participate individually or form a team of up to 3 members." },
  { q: "Do all team members need to be from the same college?", a: "No, team members can be from different colleges or institutions." },
  { q: "What if I don't have AI experience?", a: "That's perfectly fine! AI Ideathon welcomes participants from all backgrounds. We encourage learning and experimentation." },
  { q: "When will I receive my certificate?", a: "Certificates are typically issued within 2-3 weeks after the event completion." },
];

const Register = () => {
  const ref = useScrollReveal();

  return (
    <>
      <SEOMeta
        title="Register Now | AI Ideathon 2026"
        description="Complete your registration for AI Ideathon 2026. Join India's premier AI hackathon with ₹50,000+ prizes. Register directly on our website."
        canonical="/register"
      />

      <section className="section-padding bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <div ref={ref} className="max-w-4xl mx-auto scroll-reveal">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Ready to <span className="gradient-text">Begin?</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Fill out the registration form below to secure your spot at AI Ideathon 2026
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <RegistrationForm />
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Users className="text-primary" size={32} />
            Team Formation Guide
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 hover-glow">
              <h3 className="font-display text-xl font-bold mb-4">Looking for Teammates?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Join our Discord server to connect with other participants</li>
                <li>• Attend pre-event networking sessions</li>
                <li>• Post in our community forums</li>
                <li>• Reach out to college clubs and societies</li>
              </ul>
            </div>
            
            <div className="glass-card p-6 hover-glow">
              <h3 className="font-display text-xl font-bold mb-4">Ideal Team Composition</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Mix of technical and non-technical skills</li>
                <li>• Diverse academic backgrounds</li>
                <li>• Clear communication channels</li>
                <li>• Defined roles and responsibilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <HelpCircle className="text-primary" size={32} />
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-none">
                <AccordionTrigger className="text-foreground font-medium hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Register;
