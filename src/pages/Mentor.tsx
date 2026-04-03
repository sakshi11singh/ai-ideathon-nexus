import { Brain, Users, Award } from "lucide-react";
import { SEOMeta } from "@/components/SEO/SEOMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import RoleRegistrationForm from "@/components/RoleRegistrationForm";

const Mentor = () => {
  const ref = useScrollReveal();

  return (
    <>
      <SEOMeta
        title="Become a Mentor | AI Ideathon 2026"
        description="Join AI Ideathon 2026 as a mentor and guide the next generation of innovators. Share your expertise and help shape groundbreaking AI solutions."
        canonical="/mentor"
      />

      <section className="section-padding bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <div ref={ref} className="max-w-4xl mx-auto scroll-reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Brain size={18} />
              <span className="text-sm font-semibold">Mentorship Program</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Become a <span className="gradient-text">Mentor</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Guide talented students in building innovative AI solutions. Share your industry expertise 
              and help shape the future of technology while expanding your professional network.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Do */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            What You'll Do as a Mentor
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Brain,
                title: "Guide Teams",
                desc: "Provide technical guidance and feedback to participant teams on their AI projects and implementations.",
                color: "from-blue-500/20 to-blue-500/5"
              },
              {
                icon: Users,
                title: "Share Expertise",
                desc: "Leverage your industry experience to help teams refine their ideas and build practical solutions.",
                color: "from-purple-500/20 to-purple-500/5"
              },
              {
                icon: Award,
                title: "Evaluate Progress",
                desc: "Review team progress, provide constructive feedback, and help them prepare for final presentations.",
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

      {/* Who Should Apply */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Who Should Apply?
          </h2>
          
          <div className="space-y-4">
            {[
              "Industry professionals with 3+ years of experience in AI/ML or related fields",
              "Entrepreneurs and startup founders working on AI-driven solutions",
              "Researchers and academics with expertise in artificial intelligence",
              "Senior developers and engineers passionate about mentoring",
              "Product managers and tech leaders interested in innovation",
              "Previous hackathon winners or experienced participants",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 glass-card p-4">
                <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Benefits of Mentoring
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Network Expansion", desc: "Connect with talented students, fellow mentors, and industry leaders" },
              { title: "Give Back", desc: "Contribute to the growth of the next generation of technologists" },
              { title: "Stay Updated", desc: "Discover fresh perspectives and cutting-edge student innovations" },
              { title: "Recognition", desc: "Get featured on our website and social media as an official mentor" },
              { title: "Certificate", desc: "Receive an official mentor certificate and LinkedIn recommendation" },
              { title: "Exclusive Access", desc: "Access to all event activities, workshops, and networking sessions" },
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
            Register as a Mentor
          </h2>
          <RoleRegistrationForm
            roleTitle="Mentor"
            roleType="mentor"
            successMessage="Thank you for registering as a mentor! Our team will review your profile and contact you within 3-5 business days with next steps."
          />
        </div>
      </section>
    </>
  );
};

export default Mentor;
