import { Lightbulb, Users, Globe } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  { icon: Lightbulb, title: "Innovation", desc: "Push the boundaries of AI to solve real-world challenges across diverse domains." },
  { icon: Users, title: "Collaboration", desc: "Team up with like-minded innovators and build solutions that matter." },
  { icon: Globe, title: "Real-World Impact", desc: "Create AI solutions addressing humanity's most pressing challenges." },
];

const AboutSection = () => {
  const ref = useScrollReveal();
  return (
  <section id="about" className="section-padding scroll-reveal" ref={ref}>
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          About <span className="gradient-text">AI Ideathon</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
          AI Ideathon 2026 is a national-level 48-hour hackathon that brings together the brightest young minds to ideate, innovate, and build AI-powered solutions. Whether you're a beginner or an experienced developer, this is your platform to showcase creativity and technical prowess.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((h) => (
          <div key={h.title} className="glass-card p-8 text-center hover-glow">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <h.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{h.title}</h3>
            <p className="text-muted-foreground">{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default AboutSection;
