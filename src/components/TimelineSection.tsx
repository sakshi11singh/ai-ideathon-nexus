import { CalendarDays, FileText, Video, Trophy } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { icon: CalendarDays, title: "Registration", date: "02 Apr – 30 Apr 2026", desc: "Sign up on Unstop and form your team." },
  { icon: FileText, title: "Round 1: PPT Submission", date: "May 2026", desc: "Submit your idea as a presentation on Unstop." },
  { icon: Video, title: "Round 2: Google Meet", date: "May 2026", desc: "Present your idea to the jury via Google Meet." },
  { icon: Trophy, title: "Round 3: Final Round", date: "June 2026", desc: "Build and demo your prototype in the grand finale." },
];

const TimelineSection = () => {
  const ref = useScrollReveal();
  return (
  <section id="timeline" className="section-padding scroll-reveal" ref={ref}>
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Event <span className="gradient-text">Timeline</span>
        </h2>
        <p className="text-muted-foreground text-lg">From registration to the grand finale — here's your journey.</p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

        {steps.map((s, i) => (
          <div key={s.title} className={`relative flex items-start mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
            <div className="hidden md:block md:w-1/2" />
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center z-10">
              <s.icon className="text-primary" size={20} />
            </div>
            <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
              <div className="glass-card p-6 hover-glow">
                <span className="text-xs text-primary font-semibold">{s.date}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-1">{s.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TimelineSection;
