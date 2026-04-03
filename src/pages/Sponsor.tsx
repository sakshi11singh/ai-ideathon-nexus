import { Building2, Handshake, TrendingUp } from "lucide-react";
import { SEOMeta } from "@/components/SEO/SEOMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import RoleRegistrationForm from "@/components/RoleRegistrationForm";

const Sponsor = () => {
  const ref = useScrollReveal();

  return (
    <>
      <SEOMeta
        title="Become a Sponsor | AI Ideathon 2026"
        description="Partner with AI Ideathon 2026 as a sponsor. Gain brand visibility, connect with top talent, and support innovation in artificial intelligence."
        canonical="/sponsor"
      />

      <section className="section-padding bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <div ref={ref} className="max-w-4xl mx-auto scroll-reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Handshake size={18} />
              <span className="text-sm font-semibold">Partnership Opportunities</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Become a <span className="gradient-text">Sponsor</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Partner with India's premier AI hackathon and gain access to 500+ talented 
              students, industry leaders, and innovators while building your brand presence.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            Sponsorship Opportunities
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Building2,
                title: "Title Sponsor",
                desc: "Premier partnership with maximum visibility and engagement opportunities.",
                benefits: ["₹5,00,000+", "Keynote speaking slot", "Booth space", "Logo on all materials"],
                color: "from-blue-500/20 to-blue-500/5"
              },
              {
                icon: TrendingUp,
                title: "Gold Sponsor",
                desc: "Significant brand exposure with excellent networking and recruitment access.",
                benefits: ["₹2,00,000+", "Panel participation", "Resume database access", "Workshop session"],
                color: "from-amber-500/20 to-amber-500/5"
              },
              {
                icon: Handshake,
                title: "Silver Sponsor",
                desc: "Great way to connect with talent and showcase your organization.",
                benefits: ["₹1,00,000+", "Booth space", "Social media mentions", "Certificates branding"],
                color: "from-slate-500/20 to-slate-500/5"
              },
            ].map((tier, i) => (
              <div key={i} className="glass-card p-8 hover-glow relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${tier.color}`} />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <tier.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{tier.title}</h3>
                  <p className="text-muted-foreground mb-4">{tier.desc}</p>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, j) => (
                      <li key={j} className="text-sm text-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-success mt-1.5 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sponsors Get */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Sponsor Benefits
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Brand Visibility", desc: "Logo and branding across all event materials, website, and social media reaching 10,000+" },
              { title: "Talent Access", desc: "Connect with 500+ skilled students for internships, hiring, and future collaborations" },
              { title: "Thought Leadership", desc: "Speaking opportunities to showcase your company's vision and expertise" },
              { title: "Recruitment Pipeline", desc: "Access to participant resumes and direct interaction with top performers" },
              { title: "Product Showcase", desc: "Demonstrate your products/services to potential customers and users" },
              { title: "Media Coverage", desc: "Featured in press releases, media partnerships, and post-event coverage" },
              { title: "Networking", desc: "Connect with fellow sponsors, judges, speakers, and industry leaders" },
              { title: "CSR Impact", desc: "Support education and skill development in emerging technologies" },
            ].map((benefit, i) => (
              <div key={i} className="glass-card p-6 hover-glow">
                <h3 className="font-display text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Includes */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            What Your Sponsorship Supports
          </h2>
          
          <div className="space-y-4">
            {[
              "Prize pool of ₹50,000+ for winning teams",
              "Venue arrangements and infrastructure for 500+ participants",
              "Food and accommodation for participants during 48-hour hackathon",
              "Marketing and promotional activities",
              "Mentorship and judging panel coordination",
              "Technical infrastructure and WiFi connectivity",
              "Swag kits and merchandise for participants",
              "Documentation and media coverage",
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

      {/* Form Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Register as a Sponsor
          </h2>
          <RoleRegistrationForm
            roleTitle="Sponsor"
            roleType="sponsor"
            successMessage="Thank you for your interest in sponsoring AI Ideathon 2026! Our partnerships team will contact you within 2-3 business days to discuss customization options."
          />
        </div>
      </section>
    </>
  );
};

export default Sponsor;
