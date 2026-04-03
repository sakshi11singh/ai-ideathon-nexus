import { Trophy, Medal, Award, Gift, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOMeta } from "@/components/SEO/SEOMeta";
import StatsCard from "@/components/ui/stats-card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const prizes = [
  { icon: Trophy, place: "1st Place", reward: "₹25,000", extras: ["Certificate of Excellence", "Internship Opportunity", "Mentorship Session"], glow: "glow-blue" },
  { icon: Medal, place: "2nd Place", reward: "₹15,000", extras: ["Certificate of Achievement", "Mentorship Program Access", "Swag Kit"], glow: "" },
  { icon: Award, place: "3rd Place", reward: "₹10,000", extras: ["Certificate of Participation", "Exclusive Goodies", "Network Access"], glow: "" },
  { icon: Gift, place: "Special Mentions", reward: "Exclusive Goodies", extras: ["Certificates for All Finalists", "LinkedIn Recommendations", "Alumni Network Access"], glow: "" },
];

const Prizes = () => {
  const ref = useScrollReveal();

  return (
    <>
      <SEOMeta
        title="Prizes & Rewards | AI Ideathon 2026"
        description="Compete for ₹50,000+ in prizes including cash rewards, certificates, internship opportunities, mentorship programs, and exclusive swag kits."
        canonical="/prizes"
      />

      <section className="section-padding bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <div ref={ref} className="max-w-4xl mx-auto scroll-reveal">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Prizes & <span className="gradient-text">Rewards</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Compete for exciting rewards and recognition at AI Ideathon 2026
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <StatsCard icon={IndianRupee} value="₹50,000+" label="Total Prize Pool" />
            <StatsCard icon={Trophy} value="3" label="Winning Positions" />
            <StatsCard icon={Award} value="100+" label="Certificates" />
            <StatsCard icon={Gift} value="500+" label="Swag Items" />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {prizes.map((p, i) => (
              <div key={p.place} className={`glass-card p-8 text-center hover-glow ${p.glow}`}>
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <p.icon className="text-primary" size={40} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{p.place}</h3>
                <p className="text-primary font-semibold text-2xl mb-4">{p.reward}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {p.extras.map((e, j) => (
                    <li key={j} className="flex items-center justify-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            More Than Just <span className="gradient-text">Cash Prizes</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: "🎓", title: "Learning Opportunities", desc: "Access to exclusive workshops and mentorship sessions with industry experts" },
              { emoji: "🤝", title: "Networking", desc: "Connect with like-minded innovators, mentors, and potential employers" },
              { emoji: "🚀", title: "Career Boost", desc: "Internship offers, job referrals, and LinkedIn recommendations for winners" },
            ].map((b, i) => (
              <div key={i} className="glass-card p-6 hover-glow">
                <div className="text-4xl mb-4">{b.emoji}</div>
                <h3 className="font-display text-xl font-semibold mb-2">{b.title}</h3>
                <p className="text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto text-center">
          <div className="glass-card p-12 glow-blue">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Compete?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Register now and take your first step towards winning exciting prizes and opportunities
            </p>
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prizes;
