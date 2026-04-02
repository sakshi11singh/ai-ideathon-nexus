import { FileText, Presentation, Code } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const rounds = [
  {
    step: "01",
    icon: FileText,
    title: "PPT Submission",
    desc: "Submit a compelling presentation outlining your AI solution idea, problem statement, approach, and expected impact via Unstop.",
  },
  {
    step: "02",
    icon: Presentation,
    title: "Google Meet Presentation",
    desc: "Shortlisted teams present their ideas live to a panel of judges. Demonstrate feasibility, innovation, and clarity of thought.",
  },
  {
    step: "03",
    icon: Code,
    title: "Final Build Round",
    desc: "Top teams build a working prototype in 48 hours. Demo your solution and compete for prizes, mentorship, and recognition.",
  },
];

const RoundsSection = () => {
  const ref = useScrollReveal();
  return (
  <section id="rounds" className="section-padding bg-muted/30 scroll-reveal" ref={ref}>
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          How It <span className="gradient-text">Works</span>
        </h2>
        <p className="text-muted-foreground text-lg">Three rounds to take your idea from concept to reality.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {rounds.map((r) => (
          <div key={r.step} className="glass-card p-8 hover-glow relative overflow-hidden">
            <div className="absolute top-4 right-4 font-display text-6xl font-bold text-primary/10">{r.step}</div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <r.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{r.title}</h3>
              <p className="text-muted-foreground">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default RoundsSection;
