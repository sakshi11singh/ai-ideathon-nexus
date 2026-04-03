import { SEOMeta } from "@/components/SEO/SEOMeta";
import TeamCard from "@/components/ui/team-card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const judges = [
  {
    name: "Dr. Anjali Mehta",
    title: "AI Research Lead",
    company: "Google Research India",
    bio: "PhD in Machine Learning from Stanford. Leading AI research initiatives.",
    expertise: ["Deep Learning", "NLP", "Computer Vision"],
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Rohan Deshmukh",
    title: "VP of Engineering",
    company: "Microsoft AI",
    bio: "20+ years building AI products. Passionate about responsible AI development.",
    expertise: ["AI Ethics", "Product Strategy", "Scalable Systems"],
    social: { linkedin: "#" }
  },
  {
    name: "Kavita Krishnamurthy",
    title: "Founder & CEO",
    company: "AI Startup Accelerator",
    bio: "Serial entrepreneur. Invested in 50+ AI startups across India.",
    expertise: ["Entrepreneurship", "Venture Capital", "Innovation"],
    social: { linkedin: "#", twitter: "#" }
  },
];

const mentors = [
  {
    name: "Arjun Kapoor",
    title: "Senior ML Engineer",
    company: "Amazon Alexa AI",
    bio: "Expert in conversational AI and voice technologies.",
    expertise: ["Voice AI", "ML Ops", "Cloud Architecture"],
    social: { linkedin: "#", github: "#" }
  },
  {
    name: "Sneha Reddy",
    title: "Data Science Lead",
    company: "Flipkart",
    bio: "Building recommendation systems at scale for millions of users.",
    expertise: ["Recommendation Systems", "Big Data", "Analytics"],
    social: { linkedin: "#" }
  },
  {
    name: "Vikram Singh",
    title: "AI Product Manager",
    company: "Adobe",
    bio: "Bridging the gap between AI research and product innovation.",
    expertise: ["Product Management", "Creative AI", "UX"],
    social: { linkedin: "#", twitter: "#" }
  },
];

const Judges = () => {
  const ref = useScrollReveal();

  return (
    <>
      <SEOMeta
        title="Judges & Mentors | AI Ideathon 2026"
        description="Meet the industry experts, researchers, and entrepreneurs who will judge and mentor at AI Ideathon 2026."
        canonical="/judges"
      />

      <section className="section-padding bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <div ref={ref} className="max-w-4xl mx-auto scroll-reveal">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Learn from the <span className="gradient-text">Best</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Industry leaders and AI experts guiding your innovation journey
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Our Esteemed <span className="gradient-text">Judges</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {judges.map((judge, i) => (
              <TeamCard key={i} {...judge} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Expert <span className="gradient-text">Mentors</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mentors.map((mentor, i) => (
              <TeamCard key={i} {...mentor} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto text-center">
          <div className="glass-card p-12 glow-blue">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Want to Be a <span className="gradient-text">Mentor?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our community of mentors and help shape the next generation of AI innovators
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Judges;
