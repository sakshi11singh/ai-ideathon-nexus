import { Mic, Users, Award } from "lucide-react";
import { SEOMeta } from "@/components/SEO/SEOMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import RoleRegistrationForm from "@/components/RoleRegistrationForm";

const Speaker = () => {
  const ref = useScrollReveal();

  return (
    <>
      <SEOMeta
        title="Become a Speaker | AI Ideathon 2026"
        description="Share your AI expertise as a speaker at AI Ideathon 2026. Inspire participants with keynote talks, workshops, and panel discussions."
        canonical="/speaker"
      />

      <section className="section-padding bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <div ref={ref} className="max-w-4xl mx-auto scroll-reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Mic size={18} />
              <span className="text-sm font-semibold">Speaker Program</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Become a <span className="gradient-text">Speaker</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Inspire the next generation of innovators with your insights on AI trends, 
              industry applications, and future technologies. Share your story and shape minds.
            </p>
          </div>
        </div>
      </section>

      {/* Speaking Opportunities */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            Speaking Opportunities
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Mic,
                title: "Keynote Sessions",
                desc: "Deliver inspiring keynote addresses on AI trends, innovations, and the future of technology.",
                color: "from-blue-500/20 to-blue-500/5"
              },
              {
                icon: Users,
                title: "Panel Discussions",
                desc: "Participate in expert panels discussing AI ethics, applications, and industry challenges.",
                color: "from-purple-500/20 to-purple-500/5"
              },
              {
                icon: Award,
                title: "Workshops",
                desc: "Conduct hands-on workshops on specific AI tools, frameworks, or implementation strategies.",
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

      {/* Topics We're Looking For */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Topics We're Looking For
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "AI in Healthcare & Biotechnology",
              "Machine Learning in Production",
              "Natural Language Processing Applications",
              "Computer Vision & Image Recognition",
              "AI Ethics & Responsible AI Development",
              "Generative AI & Large Language Models",
              "AI for Sustainability & Climate Change",
              "Robotics & Autonomous Systems",
              "AI in Finance & Fintech",
              "Future of Work with AI",
              "AI Startups & Entrepreneurship",
              "Research to Product Translation",
            ].map((topic, i) => (
              <div key={i} className="flex items-start gap-3 glass-card p-4">
                <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-foreground">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Benefits */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Speaker Benefits
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Thought Leadership", desc: "Establish yourself as an industry thought leader" },
              { title: "Brand Visibility", desc: "Gain exposure to 500+ talented students and professionals" },
              { title: "Networking", desc: "Connect with fellow speakers, mentors, and innovators" },
              { title: "Media Coverage", desc: "Featured promotion across our media channels" },
              { title: "Honorarium", desc: "Competitive speaking fee for selected sessions" },
              { title: "VIP Treatment", desc: "Exclusive access to VIP lounge and networking events" },
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
            Register as a Speaker
          </h2>
          <RoleRegistrationForm
            roleTitle="Speaker"
            roleType="speaker"
            successMessage="Thank you for registering as a speaker! Our program committee will review your proposal and contact you within 5-7 business days."
          />
        </div>
      </section>
    </>
  );
};

export default Speaker;
