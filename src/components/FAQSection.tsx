import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  { q: "Who can participate?", a: "Any student aged 15–24 from anywhere in India can participate. No specific academic background is required." },
  { q: "Is prior AI experience required?", a: "No! Whether you're a beginner or experienced, this hackathon is for everyone. We encourage learning and experimentation." },
  { q: "Is there a registration fee?", a: "Registration details will be available on the Unstop platform. Stay tuned for announcements." },
  { q: "Do we need to build a working prototype?", a: "Not in the initial rounds. Round 1 requires a PPT and Round 2 is a presentation. Only finalists in Round 3 need a prototype." },
  { q: "Can I participate solo?", a: "Yes, you can participate individually or in a team of up to 3 members." },
];

const FAQSection = () => {
  const ref = useScrollReveal();
  return (
  <section id="faq" className="section-padding scroll-reveal" ref={ref}>
    <div className="container mx-auto max-w-3xl">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
      </div>

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
  );
};

export default FAQSection;
