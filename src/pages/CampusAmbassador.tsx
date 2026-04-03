import { Users, Rocket, TrendingUp } from "lucide-react";
import { SEOMeta } from "@/components/SEO/SEOMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import RoleRegistrationForm from "@/components/RoleRegistrationForm";

const CampusAmbassador = () => {
  const ref = useScrollReveal();

  return (
    <>
      <SEOMeta
        title="Become a Campus Ambassador | AI Ideathon 2026"
        description="Join AI Ideathon 2026 as a Campus Ambassador. Lead your college's participation, build leadership skills, and win exciting rewards."
        canonical="/campus-ambassador"
      />

      <section className="section-padding bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <div ref={ref} className="max-w-4xl mx-auto scroll-reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Rocket size={18} />
              <span className="text-sm font-semibold">Campus Ambassador Program</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Become a <span className="gradient-text">Campus Ambassador</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Represent your college at AI Ideathon 2026, mobilize participants, and gain 
              invaluable leadership experience while earning certificates, swag, and more!
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Do */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            Your Responsibilities
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "Promote Event",
                desc: "Spread awareness about AI Ideathon in your college through posters, social media, and word-of-mouth.",
                color: "from-blue-500/20 to-blue-500/5"
              },
              {
                icon: TrendingUp,
                title: "Mobilize Teams",
                desc: "Encourage students to form teams and register. Target: Minimum 10 teams from your college.",
                color: "from-purple-500/20 to-purple-500/5"
              },
              {
                icon: Rocket,
                title: "Coordinate Activities",
                desc: "Organize info sessions, workshops, or meetups to build excitement and prepare participants.",
                color: "from-amber-500/20 to-amber-500/5"
              },
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 hover-glow relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Benefits & Perks
          </h2>
          
          <div className="space-y-4">
            {[
              { title: "Official Certificate", desc: "Receive an official Campus Ambassador certificate recognizing your contribution" },
              { title: "Exclusive Swag Kit", desc: "Get AI Ideathon merchandise including t-shirts, stickers, and goodies" },
              { title: "Networking Opportunities", desc: "Connect with industry professionals, speakers, and fellow ambassadors" },
              { title: "Leadership Experience", desc: "Develop valuable leadership, communication, and management skills" },
              { title: "Priority Access", desc: "Fast-track registration for future CodeByt events and programs" },
              { title: "LinkedIn Recommendation", desc: "Endorsement from organizers highlighting your achievements" },
              { title: "Performance Rewards", desc: "Special prizes for top-performing ambassadors based on team registrations" },
              { title: "VIP Event Access", desc: "Complimentary access to all event sessions and networking areas" },
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 glass-card p-4">
                <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Incentives */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Performance Incentives
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tier: "Bronze", target: "10+ teams", reward: "Certificate + Swag Kit" },
              { tier: "Silver", target: "20+ teams", reward: "Certificate + Swag + ₹2,000" },
              { tier: "Gold", target: "30+ teams", reward: "Certificate + Swag + ₹5,000 + VIP Dinner" },
            ].map((level, i) => (
              <div key={i} className="glass-card p-8 text-center hover-glow relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-bold mb-2">{level.tier}</h3>
                  <p className="text-primary font-semibold mb-4">{level.target}</p>
                  <p className="text-muted-foreground">{level.reward}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Who Can Apply?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Currently enrolled in a college/university program",
              "Passionate about technology and innovation",
              "Strong communication and interpersonal skills",
              "Active in college clubs or student organizations",
              "Ability to mobilize and motivate peers",
              "Social media savvy and tech-savvy",
            ].map((requirement, i) => (
              <div key={i} className="flex items-start gap-3 glass-card p-4">
                <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-foreground">{requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Program Timeline
          </h2>
          
          <div className="space-y-4">
            {[
              { phase: "Application Phase", date: "April 2-15, 2026", desc: "Submit your application online" },
              { phase: "Selection & Onboarding", date: "April 16-20, 2026", desc: "Announcement of selected ambassadors" },
              { phase: "Promotion Period", date: "April 21 - May 15, 2026", desc: "Mobilize teams and promote event" },
              { phase: "Recognition", date: "Event Day (June 1-2)", desc: "Certificates and awards distribution" },
            ].map((phase, i) => (
              <div key={i} className="glass-card p-6 hover-glow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-lg font-bold">{phase.phase}</h3>
                  <span className="text-sm text-primary font-semibold">{phase.date}</span>
                </div>
                <p className="text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Register as a Campus Ambassador
          </h2>
          <RoleRegistrationForm
            roleTitle="Campus Ambassador"
            roleType="ambassador"
            successMessage="Thank you for applying to be a Campus Ambassador! Our team will review your application and contact you within 3-5 business days with next steps."
          />
        </div>
      </section>
    </>
  );
};

export default CampusAmbassador;
