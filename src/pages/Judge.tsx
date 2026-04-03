import { Gavel, Star, Award } from "lucide-react";
import { SEOMeta } from "@/components/SEO/SEOMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import RoleRegistrationForm from "@/components/RoleRegistrationForm";

const Judge = () => {
  const ref = useScrollReveal();

  return (
    <>
      <SEOMeta
        title="Become a Judge | AI Ideathon 2026"
        description="Join AI Ideathon 2026 as a judge and evaluate groundbreaking AI innovations. Help select the best projects and provide expert feedback."
        canonical="/judge"
      />

      <section className="section-padding bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <div ref={ref} className="max-w-4xl mx-auto scroll-reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Gavel size={18} />
              <span className="text-sm font-semibold">Judging Panel</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Become a <span className="gradient-text">Judge</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Evaluate innovative AI solutions, provide expert feedback, and help identify 
              the most promising projects. Your expertise will shape the future of AI innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Judging Responsibilities */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            Judging Responsibilities
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Gavel,
                title: "Evaluate Projects",
                desc: "Assess team presentations based on innovation, technical implementation, and impact potential.",
                color: "from-blue-500/20 to-blue-500/5"
              },
              {
                icon: Star,
                title: "Provide Feedback",
                desc: "Offer constructive feedback to help teams improve their solutions and pitch delivery.",
                color: "from-purple-500/20 to-purple-500/5"
              },
              {
                icon: Award,
                title: "Select Winners",
                desc: "Participate in final judging rounds to determine competition winners across categories.",
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

      {/* Evaluation Criteria */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Evaluation Criteria
          </h2>
          
          <div className="space-y-4">
            {[
              { title: "Innovation & Creativity", desc: "Novelty of the idea and creative approach to problem-solving" },
              { title: "Technical Implementation", desc: "Quality of code, architecture, and technical execution" },
              { title: "AI/ML Integration", desc: "Effective use of artificial intelligence and machine learning technologies" },
              { title: "Impact & Scalability", desc: "Potential real-world impact and ability to scale the solution" },
              { title: "Presentation & Demo", desc: "Clarity of presentation and quality of working demonstration" },
              { title: "Business Viability", desc: "Market potential and feasibility of implementation" },
            ].map((criteria, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="font-display text-lg font-bold mb-2">{criteria.title}</h3>
                <p className="text-muted-foreground">{criteria.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Judge Benefits */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Judge Benefits
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Industry Recognition", desc: "Position yourself as a respected authority in AI innovation" },
              { title: "Exclusive Access", desc: "First look at cutting-edge student innovations and startups" },
              { title: "Networking", desc: "Connect with fellow judges, industry leaders, and top talent" },
              { title: "Brand Visibility", desc: "Featured promotion as an official event judge" },
              { title: "Certificate", desc: "Official judge certificate and LinkedIn endorsement" },
              { title: "VIP Experience", desc: "Access to VIP lounge, meals, and exclusive events" },
            ].map((benefit, i) => (
              <div key={i} className="glass-card p-6 hover-glow">
                <h3 className="font-display text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Register as a Judge
          </h2>
          <RoleRegistrationForm
            roleTitle="Judge"
            roleType="judge"
            successMessage="Thank you for registering as a judge! Our selection committee will review your profile and contact you within 5-7 business days."
          />
        </div>
      </section>
    </>
  );
};

export default Judge;
