import { Trophy, Medal, Award, Gift } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const prizes = [
  { icon: Trophy, place: "1st Place", reward: "₹25,000 Cash Prize", extras: "Certificate + Internship Opportunity", glow: "glow-blue" },
  { icon: Medal, place: "2nd Place", reward: "₹15,000 Cash Prize", extras: "Certificate + Mentorship Program", glow: "" },
  { icon: Award, place: "3rd Place", reward: "₹10,000 Cash Prize", extras: "Certificate + Swag Kit", glow: "" },
  { icon: Gift, place: "Special Mentions", reward: "Exclusive Goodies", extras: "Certificates for All Finalists", glow: "" },
];

const PrizesSection = () => {
  const ref = useScrollReveal();
  return (
  <section id="prizes" className="section-padding bg-muted/30 scroll-reveal" ref={ref}>
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Prizes & <span className="gradient-text">Rewards</span>
        </h2>
        <p className="text-muted-foreground text-lg">Compete for exciting rewards and recognition.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {prizes.map((p) => (
          <div key={p.place} className={`glass-card p-8 text-center hover-glow ${p.glow}`}>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <p.icon className="text-primary" size={32} />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{p.place}</h3>
            <p className="text-primary font-semibold text-lg mb-2">{p.reward}</p>
            <p className="text-muted-foreground text-sm">{p.extras}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PrizesSection;
