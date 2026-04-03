import { useEffect, useState } from "react";
import { ArrowRight, Download, Users, Building2, Trophy, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import StatsCard from "@/components/ui/stats-card";
import { SEOMeta } from "@/components/SEO/SEOMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const DEADLINE = new Date("2026-04-30T23:59:59").getTime();

const statsData = [
  { icon: Users, value: "500+", label: "Expected Participants", suffix: "+" },
  { icon: Building2, value: "50+", label: "Colleges Represented" },
  { icon: Trophy, value: "₹50,000", label: "Total Prize Pool" },
  { icon: CalendarDays, value: "48", label: "Hours of Innovation", suffix: "h" },
];

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const themesRef = useScrollReveal();

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, DEADLINE - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <>
      <SEOMeta
        title="AI Ideathon 2026 | National 48-Hour AI Hackathon by CodeByt"
        description="Join India's premier AI hackathon. ₹50,000+ prizes, mentorship opportunities, and a platform to showcase your innovation. Register now for AI Ideathon 2026!"
        canonical="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative z-10 container mx-auto text-center py-32 px-4">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium animate-slide-up">
            🚀 National Level 48-Hour AI Hackathon
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up-delay-1">
            <span className="gradient-text">AI Ideathon</span>{" "}
            <span className="text-foreground">2026</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up-delay-2">
            AI for the Next Decade: Innovations Shaping the Future of Humanity
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up-delay-3">
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity glow-blue"
            >
              Register Now <ArrowRight size={20} />
            </Link>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-card text-foreground font-semibold text-lg hover-glow"
            >
              <Download size={20} /> Download Brochure
            </a>
          </div>

          <div className="flex justify-center gap-4 md:gap-6">
            {timeUnits.map((u) => (
              <div key={u.label} className="glass-card p-4 md:p-6 min-w-[80px] md:min-w-[100px] glow-blue">
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text">
                  {String(u.value).padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{u.label}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">Registration deadline: 30 April 2026</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {statsData.map((stat, i) => (
              <StatsCard key={i} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Themes Preview */}
      <section ref={themesRef} className="section-padding scroll-reveal">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Explore <span className="gradient-text">Themes</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose from diverse challenge areas and build solutions that matter
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { emoji: "🏥", title: "Healthcare", desc: "Revolutionize diagnostics and patient care" },
              { emoji: "🌱", title: "Sustainability", desc: "Tackle climate change and environmental challenges" },
              { emoji: "🤖", title: "Human-AI Collaboration", desc: "Design seamless human-AI systems" },
            ].map((theme, i) => (
              <a
                key={i}
                href="/event/themes"
                className="glass-card p-6 hover-glow group transition-all"
              >
                <div className="text-4xl mb-4">{theme.emoji}</div>
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {theme.title}
                </h3>
                <p className="text-muted-foreground">{theme.desc}</p>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a
              href="/event/themes"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              View All Themes <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Why Participate */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Why <span className="gradient-text">Participate?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "💡",
                title: "Innovate & Create",
                desc: "Push boundaries with cutting-edge AI solutions to real-world problems"
              },
              {
                emoji: "🏆",
                title: "Win Big",
                desc: "Compete for ₹50,000+ in prizes, certificates, and internship opportunities"
              },
              {
                emoji: "👥",
                title: "Network & Learn",
                desc: "Connect with industry experts, mentors, and like-minded innovators"
              },
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 text-center hover-glow">
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="glass-card p-12 text-center relative overflow-hidden glow-blue">
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Ready to Shape the <span className="gradient-text">Future?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of innovators in India's premier AI hackathon. Your ideas can change the world!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
                >
                  Register Now
                </Link>
                <a
                  href="/event"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-card text-foreground font-semibold text-lg hover-glow"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
