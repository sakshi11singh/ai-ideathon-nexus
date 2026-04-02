import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const DEADLINE = new Date("2026-04-30T23:59:59").getTime();

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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
          <a
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity glow-blue"
          >
            Register Now <ArrowRight size={20} />
          </a>
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
  );
};

export default HeroSection;
