import { FileText, Presentation, Code, Download, CheckCircle2 } from "lucide-react";
import { SEOMeta } from "@/components/SEO/SEOMeta";
import Breadcrumb from "@/components/Navigation/Breadcrumb";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const rounds = [
  {
    step: "01",
    icon: FileText,
    title: "PPT Submission",
    duration: "May 5, 2026",
    desc: "Submit a compelling presentation outlining your AI solution idea, problem statement, approach, and expected impact via Unstop.",
    guidelines: [
      "5-7 slides maximum",
      "PDF format only (max 10MB)",
      "Include team details and theme",
      "Clearly define problem statement",
      "Propose innovative AI solution",
      "Highlight expected impact"
    ],
    evaluation: ["Innovation & Creativity", "Problem Relevance", "Technical Feasibility", "Impact Potential"]
  },
  {
    step: "02",
    icon: Presentation,
    title: "Google Meet Presentation",
    duration: "May 15, 2026",
    desc: "Shortlisted teams present their ideas live to a panel of judges. Demonstrate feasibility, innovation, and clarity of thought.",
    guidelines: [
      "10-minute presentation",
      "5-minute Q&A session",
      "All team members must speak",
      "Use screen sharing for PPT",
      "Professional attire recommended",
      "Test tech setup beforehand"
    ],
    evaluation: ["Presentation Clarity", "Technical Depth", "Q&A Responses", "Team Coordination"]
  },
  {
    step: "03",
    icon: Code,
    title: "Final Build Round",
    duration: "June 1-2, 2026",
    desc: "Top teams build a working prototype in 48 hours. Demo your solution and compete for prizes, mentorship, and recognition.",
    guidelines: [
      "48-hour continuous build phase",
      "Working prototype/MVP required",
      "GitHub repository mandatory",
      "Final demo presentation (5 min)",
      "Judging panel evaluation",
      "Awards ceremony follows"
    ],
    evaluation: ["Functioning Prototype", "Code Quality", "Innovation Implementation", "Demo Quality"]
  },
];

const RoundsPage = () => {
  const ref = useScrollReveal();

  return (
    <>
      <SEOMeta
        title="Competition Rounds | AI Ideathon 2026"
        description="Understand the three-round structure of AI Ideathon 2026. From PPT submission to final prototype build - complete guide with evaluation criteria."
        canonical="/event/rounds"
      />

      <section className="section-padding bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <Breadcrumb />
          <div ref={ref} className="max-w-4xl mx-auto text-center scroll-reveal">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Competition <span className="gradient-text">Rounds</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Three progressive rounds to take your idea from concept to reality
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="space-y-12">
            {rounds.map((r, i) => (
              <div key={r.step} ref={useScrollReveal()} className="scroll-reveal">
                <div className="glass-card p-8 hover-glow relative overflow-hidden">
                  <div className="absolute top-4 right-4 font-display text-6xl font-bold text-primary/5">{r.step}</div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <r.icon className="text-primary" size={32} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-primary font-semibold">{r.duration}</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Round {r.step}</span>
                        </div>
                        <h3 className="font-display text-3xl font-bold text-foreground">{r.title}</h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 text-lg">{r.desc}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <CheckCircle2 className="text-success" size={18} />
                          Guidelines
                        </h4>
                        <ul className="space-y-2">
                          {r.guidelines.map((g, j) => (
                            <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                              {g}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Presentation className="text-primary" size={18} />
                          Evaluation Criteria
                        </h4>
                        <ul className="space-y-2">
                          {r.evaluation.map((e, j) => (
                            <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                              {e}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {i === 0 && (
                      <div className="mt-6 pt-6 border-t border-border">
                        <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                          <Download size={18} /> Download PPT Template
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Tips for <span className="gradient-text">Success</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Start Early", desc: "Give yourself ample time for each round" },
              { title: "Practice Presentation", desc: "Rehearse multiple times before D-day" },
              { title: "Focus on Impact", desc: "Highlight real-world problem solving" },
            ].map((t, i) => (
              <div key={i} className="glass-card p-6 hover-glow">
                <h3 className="font-semibold text-foreground mb-2">{t.title}</h3>
                <p className="text-muted-foreground text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RoundsPage;
