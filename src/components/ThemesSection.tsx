import { HeartPulse, Leaf, BrainCircuit, Building2, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const themes = [
  { icon: HeartPulse, title: "AI for Healthcare", desc: "Revolutionize diagnostics, treatment, and patient care with intelligent systems.", color: "from-rose-500/20 to-rose-500/5" },
  { icon: Leaf, title: "AI for Sustainability", desc: "Tackle climate change, energy efficiency, and environmental monitoring.", color: "from-emerald-500/20 to-emerald-500/5" },
  { icon: BrainCircuit, title: "Human-AI Collaboration", desc: "Design systems where humans and AI work together seamlessly.", color: "from-blue-500/20 to-blue-500/5" },
  { icon: Building2, title: "Smart Infrastructure", desc: "Build intelligent cities, transport, and urban planning solutions.", color: "from-amber-500/20 to-amber-500/5" },
  { icon: Sparkles, title: "Open Innovation", desc: "Bring your own groundbreaking AI idea to life — no limits!", color: "from-violet-500/20 to-violet-500/5" },
];

const ThemesSection = () => {
  const ref = useScrollReveal();
  return (
  <section id="themes" className="section-padding bg-muted/30 scroll-reveal" ref={ref}>
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Hackathon <span className="gradient-text">Themes</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Choose a theme that resonates with your vision and build something extraordinary.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {themes.map((t) => (
          <div key={t.title} className="glass-card p-8 hover-glow group">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center mb-5`}>
              <t.icon className="text-foreground" size={28} />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{t.title}</h3>
            <p className="text-muted-foreground">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ThemesSection;
