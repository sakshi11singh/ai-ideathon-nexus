import { useEffect, useState } from "react";
import { Brain } from "lucide-react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFading(true);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Glow orbs */}
      <div className="absolute w-64 h-64 rounded-full bg-primary/20 blur-[100px] animate-pulse-glow" />
      <div className="absolute w-48 h-48 rounded-full bg-accent/15 blur-[80px] translate-x-20 translate-y-10 animate-pulse-glow" />

      {/* Logo */}
      <div className="relative mb-8 animate-float">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center glow-blue">
          <Brain className="text-primary" size={40} />
        </div>
      </div>

      {/* Title */}
      <h1 className="font-display text-2xl md:text-3xl font-bold mb-2 gradient-text">
        AI Ideathon 2026
      </h1>
      <p className="text-muted-foreground text-sm mb-8">Loading experience…</p>

      {/* Progress bar */}
      <div className="w-48 h-1 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-150 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
