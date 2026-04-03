import { CheckCircle2, Users, HelpCircle, ArrowRight } from "lucide-react";
import { SEOMeta } from "@/components/SEO/SEOMeta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  { q: "Is there a registration fee?", a: "Registration details will be announced soon on Unstop platform. Stay tuned for updates!" },
  { q: "Can I participate solo?", a: "Yes! You can participate individually or form a team of up to 3 members." },
  { q: "Do all team members need to be from the same college?", a: "No, team members can be from different colleges or institutions." },
  { q: "What if I don't have AI experience?", a: "That's perfectly fine! AI Ideathon welcomes participants from all backgrounds. We encourage learning and experimentation." },
  { q: "When will I receive my Unstop certificate?", a: "Certificates are typically issued within 2-3 weeks after the event completion." },
];

const Register = () => {
  const ref = useScrollReveal();

  return (
    <>
      <SEOMeta
        title="Register Now | AI Ideathon 2026"
        description="Complete step-by-step guide to register for AI Ideathon 2026. Learn about team formation, registration process, and what to expect next."
        canonical="/register"
      />

      <section className="section-padding bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <div ref={ref} className="max-w-4xl mx-auto scroll-reveal">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Ready to <span className="gradient-text">Begin?</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Follow these simple steps to register for AI Ideathon 2026
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Create Your Unstop Account",
                desc: "Visit Unstop.com and create a free account using your email address or social media accounts.",
                tips: ["Use a valid email you check regularly", "Complete your profile for better experience"]
              },
              {
                step: "02",
                title: "Find AI Ideathon 2026",
                desc: "Search for 'AI Ideathon 2026' on Unstop or use the direct registration link provided on our website.",
                tips: ["Bookmark the event page for updates", "Read all event details carefully"]
              },
              {
                step: "03",
                title: "Form or Join a Team",
                desc: "Decide whether you want to participate solo or with a team. If forming a team, invite members through Unstop.",
                tips: ["Maximum 3 members per team", "Choose teammates with complementary skills", "Assign a team lead for coordination"]
              },
              {
                step: "04",
                title: "Complete Registration",
                desc: "Fill in all required details, pay the registration fee (if applicable), and submit your registration.",
                tips: ["Double-check all information before submitting", "Save payment confirmation", "Check email for confirmation"]
              },
              {
                step: "05",
                title: "Start Preparing",
                desc: "Once registered, you'll receive access to resources, updates, and can start preparing for the hackathon.",
                tips: ["Explore the themes section", "Join our Discord/WhatsApp community", "Attend pre-event workshops"]
              },
            ].map((s, i) => (
              <div key={i} ref={useScrollReveal()} className="glass-card p-8 hover-glow scroll-reveal relative overflow-hidden">
                <div className="absolute top-4 right-4 font-display text-6xl font-bold text-primary/5">{s.step}</div>
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground mb-2">{s.title}</h3>
                      <p className="text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                  {s.tips && (
                    <div className="ml-16 mt-4 p-4 bg-primary/5 rounded-lg">
                      <p className="text-sm font-semibold text-primary mb-2">💡 Pro Tips:</p>
                      <ul className="space-y-1">
                        {s.tips.map((t, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://unstop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Register on Unstop <ArrowRight size={20} />
            </a>
          </div>
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
