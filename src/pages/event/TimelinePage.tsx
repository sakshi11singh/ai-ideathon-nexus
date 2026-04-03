import { CalendarDays, FileText, Video, Trophy, Download } from "lucide-react";
import { SEOMeta } from "@/components/SEO/SEOMeta";
import Breadcrumb from "@/components/Navigation/Breadcrumb";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { 
    icon: CalendarDays, 
    title: "Registration", 
    date: "02 Apr – 30 Apr 2026", 
    desc: "Sign up on Unstop and form your team.",
    details: ["Create account on Unstop", "Complete registration form", "Form or join a team (max 3 members)", "Pay registration fee (if applicable)"]
  },
  { 
    icon: FileText, 
    title: "Round 1: PPT Submission", 
    date: "May 2026", 
    desc: "Submit your idea as a presentation on Unstop.",
    details: ["Prepare 5-7 slide presentation", "Include problem statement, solution, approach", "Highlight innovation and impact", "Submit PDF on Unstop platform"]
  },
  { 
    icon: Video, 
    title: "Round 2: Google Meet", 
    date: "May 2026", 
    desc: "Present your idea to the jury via Google Meet.",
    details: ["10-minute presentation + 5 min Q&A", "All team members must participate", "Demonstrate feasibility", "Judges evaluate innovation & clarity"]
  },
  { 
    icon: Trophy, 
    title: "Round 3: Final Round", 
    date: "June 2026", 
    desc: "Build and demo your prototype in the grand finale.",
    details: ["48-hour intensive build phase", "Develop working prototype/MVP", "Final presentation to judges", "Awards ceremony and recognition"]
  },
];

const TimelinePage = () => {
  const ref = useScrollReveal();

  return (
    <>
      <SEOMeta
        title="Event Timeline | AI Ideathon 2026"
        description="Track important dates and milestones for AI Ideathon 2026. From registration to finals, stay updated with all deadlines and events."
        canonical="/event/timeline"
      />

      <section className="section-padding bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <Breadcrumb />
          <div ref={ref} className="max-w-4xl mx-auto text-center scroll-reveal">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Event <span className="gradient-text">Timeline</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Your journey from registration to the grand finale
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

            {steps.map((s, i) => (
              <div key={s.title} ref={useScrollReveal()} className={`relative flex items-start mb-12 last:mb-0 scroll-reveal ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center z-10">
                  <s.icon className="text-primary" size={20} />
                </div>
                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card p-6 hover-glow">
                    <span className="text-xs text-primary font-semibold">{s.date}</span>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-3">{s.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                    <ul className="space-y-2">
                      {s.details.map((d, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Add to Your <span className="gradient-text">Calendar</span>
          </h2>
          <p className="text-muted-foreground mb-8">Never miss an important deadline</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg glass-card text-foreground font-medium hover-glow">
              <Download size={18} /> Download .ics File
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg glass-card text-foreground font-medium hover-glow">
              <CalendarDays size={18} /> Add to Google Calendar
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TimelinePage;
