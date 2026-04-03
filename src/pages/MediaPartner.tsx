import { Mic, Newspaper, Radio } from "lucide-react";
import { SEOMeta } from "@/components/SEO/SEOMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import RoleRegistrationForm from "@/components/RoleRegistrationForm";

const MediaPartner = () => {
  const ref = useScrollReveal();

  return (
    <>
      <SEOMeta
        title="Become a Media Partner | AI Ideathon 2026"
        description="Partner with AI Ideathon 2026 as a media partner. Amplify the event's reach and engage with tech-savvy audiences through your platform."
        canonical="/media-partner"
      />

      <section className="section-padding bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <div ref={ref} className="max-w-4xl mx-auto scroll-reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Newspaper size={18} />
              <span className="text-sm font-semibold">Media Partnership</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Become a <span className="gradient-text">Media Partner</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Help us amplify the message of innovation and reach thousands of potential 
              participants, sponsors, and stakeholders through your media platform.
            </p>
          </div>
        </div>
      </section>

      {/* Media Partnership Types */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            Partnership Opportunities
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Newspaper,
                title: "Digital Media",
                desc: "Online publications, tech blogs, news websites, and digital magazines.",
                color: "from-blue-500/20 to-blue-500/5"
              },
              {
                icon: Radio,
                title: "Broadcast Media",
                desc: "TV channels, radio stations, podcasts, and streaming platforms.",
                color: "from-purple-500/20 to-purple-500/5"
              },
              {
                icon: Mic,
                title: "Social Media",
                desc: "Influencers, content creators, and social media platforms.",
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

      {/* What We Expect */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Partnership Deliverables
          </h2>
          
          <div className="space-y-4">
            {[
              "Event promotion across your platforms (website, social media, newsletters)",
              "Press coverage before, during, and after the event",
              "Feature articles or interviews with organizers and key speakers",
              "Social media posts and stories throughout the event",
              "Logo placement on your event partners page",
              "Dedicated email blast to your subscriber base (optional)",
              "Live coverage or streaming of key moments (optional)",
              "Post-event coverage with winners and highlights",
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

      {/* Benefits for Media Partners */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Benefits for Media Partners
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Exclusive Content", desc: "Access to unique stories, interviews, and event highlights for your audience" },
              { title: "Brand Association", desc: "Align your brand with innovation, education, and technology" },
              { title: "Networking Access", desc: "Connect with industry leaders, startups, and innovators" },
              { title: "Cross-Promotion", desc: "Featured on our website, social media, and event materials as official media partner" },
              { title: "VIP Access", desc: "Complimentary access to all event sessions, VIP lounge, and networking events" },
              { title: "Recognition", desc: "Acknowledged during opening/closing ceremonies and in press releases" },
            ].map((benefit, i) => (
              <div key={i} className="glass-card p-6 hover-glow">
                <h3 className="font-display text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reach & Impact */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Event Reach & Impact
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Participants" },
              { value: "50+", label: "Colleges" },
              { value: "10K+", label: "Social Reach" },
              { value: "500K+", label: "Online Impressions" },
            ].map((stat, i) => (
              <div key={i} className="glass-card p-6 text-center hover-glow">
                <p className="font-display text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Register as a Media Partner
          </h2>
          <RoleRegistrationForm
            roleTitle="Media Partner"
            roleType="media"
            successMessage="Thank you for registering as a media partner! Our communications team will contact you within 3-5 business days to discuss collaboration details."
          />
        </div>
      </section>
    </>
  );
};

export default MediaPartner;
