import { HeartPulse, Leaf, BrainCircuit, Building2, Sparkles, ArrowRight } from "lucide-react";
import { SEOMeta } from "@/components/SEO/SEOMeta";
import Breadcrumb from "@/components/Navigation/Breadcrumb";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const themes = [
  { icon: HeartPulse, title: "AI for Healthcare", desc: "Revolutionize diagnostics, treatment, and patient care with intelligent systems.", examples: ["AI-powered disease detection", "Mental health chatbots", "Drug discovery acceleration"] },
  { icon: Leaf, title: "AI for Sustainability", desc: "Tackle climate change, energy efficiency, and environmental monitoring.", examples: ["Smart energy management", "Waste optimization", "Climate prediction models"] },
  { icon: BrainCircuit, title: "Human-AI Collaboration", desc: "Design systems where humans and AI work together seamlessly.", examples: ["Assistive technologies", "Creative AI tools", "Productivity enhancers"] },
  { icon: Building2, title: "Smart Infrastructure", desc: "Build intelligent cities, transport, and urban planning solutions.", examples: ["Traffic optimization", "Smart buildings", "Public safety systems"] },
  { icon: Sparkles, title: "Open Innovation", desc: "Bring your own groundbreaking AI idea to life — no limits!", examples: ["Your unique concept", "Cross-domain solutions", "Disruptive innovations"] },
];

const ThemesPage = () => {
  const ref = useScrollReveal();

  return (
    <>
      <SEOMeta
        title="Hackathon Themes | AI Ideathon 2026"
        description="Explore five exciting challenge tracks at AI Ideathon 2026. Choose a theme that aligns with your passion and build impactful AI solutions."
        canonical="/event/themes"
      />

      <section className="section-padding bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <Breadcrumb />
          <div ref={ref} className="max-w-4xl mx-auto text-center scroll-reveal">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Challenge <span className="gradient-text">Themes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Choose a theme that resonates with your vision and build something extraordinary
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid gap-8 max-w-5xl mx-auto">
            {themes.map((t, i) => (
              <div key={i} ref={useScrollReveal()} className="glass-card p-8 hover-glow scroll-reveal group">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0`}>
                    <t.icon className="text-foreground" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{t.desc}</p>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Example Problem Statements:</p>
                      <ul className="space-y-1">
                        {t.examples.map((ex, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
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
            Not Sure Which Theme to <span className="gradient-text">Choose?</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            All themes are equally challenging and offer opportunities for innovation. Pick the one that excites you the most!
          </p>
          <a
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Register Now <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </>
  );
};

export default ThemesPage;
