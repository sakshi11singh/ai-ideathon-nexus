import { BookOpen, Calendar, FileText, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { SEOMeta } from "@/components/SEO/SEOMeta";
import Breadcrumb from "@/components/Navigation/Breadcrumb";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const EventOverview = () => {
  const ref = useScrollReveal();

  const quickLinks = [
    {
      icon: Users,
      title: "Themes",
      desc: "Explore challenge areas from healthcare to sustainability",
      href: "/event/themes",
      color: "from-blue-500/20 to-blue-500/5"
    },
    {
      icon: Calendar,
      title: "Timeline",
      desc: "Track important dates and milestones",
      href: "/event/timeline",
      color: "from-emerald-500/20 to-emerald-500/5"
    },
    {
      icon: FileText,
      title: "Rounds",
      desc: "Understand the competition structure",
      href: "/event/rounds",
      color: "from-amber-500/20 to-amber-500/5"
    },
    {
      icon: ShieldCheck,
      title: "Rules",
      desc: "Guidelines for fair participation",
      href: "/event/rules",
      color: "from-rose-500/20 to-rose-500/5"
    },
  ];

  return (
    <>
      <SEOMeta
        title="Event Details | AI Ideathon 2026"
        description="Complete guide to AI Ideathon 2026 - themes, timeline, rounds, rules, and everything you need to know to participate successfully."
        canonical="/event"
      />

      <section className="section-padding bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <Breadcrumb />
          
          <div ref={ref} className="max-w-4xl mx-auto text-center scroll-reveal">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Your Journey Starts <span className="gradient-text">Here</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Everything you need to know about AI Ideathon 2026 - from registration to the grand finale
            </p>
          </div>
        </div>
      </section>

      {/* Event Format */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div ref={useScrollReveal()} className="scroll-reveal">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                A 48-Hour Sprint of <span className="gradient-text">Innovation</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                AI Ideathon 2026 is structured in three progressive rounds designed to test your creativity, technical skills, and problem-solving abilities. From initial concept submission to final prototype demonstration, each round builds upon the previous one.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Participants will work on real-world challenges across diverse domains including healthcare, sustainability, education, and smart infrastructure. The competition emphasizes practical solutions with measurable impact.
              </p>
              
              <div className="space-y-4">
                {[
                  "Individual or team participation (up to 3 members)",
                  "Mentorship from industry experts",
                  "Access to free tools and resources",
                  "Certificates for all participants"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-success mt-0.5 shrink-0" size={20} />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div ref={useScrollReveal()} className="scroll-reveal">
              <div className="glass-card p-8 glow-blue">
                <h3 className="font-display text-2xl font-bold mb-6 text-center">Quick Stats</h3>
                <div className="space-y-4">
                  {[
                    { label: "Registration Period", value: "Apr 2 - Apr 30, 2026" },
                    { label: "Total Prize Pool", value: "₹50,000+" },
                    { label: "Participants Expected", value: "500+ students" },
                    { label: "Colleges Represented", value: "50+ institutions" },
                    { label: "Final Round Duration", value: "48 hours" },
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                      <span className="text-muted-foreground">{stat.label}</span>
                      <span className="font-semibold text-foreground">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Explore Event <span className="gradient-text">Details</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {quickLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className={`glass-card p-8 hover-glow group relative overflow-hidden bg-gradient-to-br ${link.color}`}
              >
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <link.icon className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{link.desc}</p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium">
                      Learn More <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Important <span className="gradient-text">Dates</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { date: "April 2, 2026", event: "Registration Opens", status: "open" },
              { date: "April 30, 2026", event: "Registration Deadline", status: "upcoming" },
              { date: "May 5, 2026", event: "Round 1: PPT Submission", status: "upcoming" },
              { date: "May 15, 2026", event: "Round 2: Google Meet Presentations", status: "upcoming" },
              { date: "June 1, 2026", event: "Round 3: Final 48-Hour Build", status: "upcoming" },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card p-6 flex items-center gap-4 hover-glow"
              >
                <div className={`w-3 h-3 rounded-full shrink-0 ${
                  item.status === 'open' ? 'bg-success' : 
                  item.status === 'upcoming' ? 'bg-primary' : 'bg-muted-foreground'
                }`} />
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{item.event}</p>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
                {item.status === 'open' && (
                  <span className="px-3 py-1 rounded-full bg-success/10 text-success text-xs font-medium">
                    Open
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Eligibility <span className="gradient-text">Criteria</span>
            </h2>
          </div>

          <div className="glass-card p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-success" size={20} />
                  Who Can Participate?
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Students aged 15-24 years</li>
                  <li>• Currently enrolled in school/college</li>
                  <li>• From anywhere in India</li>
                  <li>• Any academic background welcome</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-success" size={20} />
                  Team Requirements
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Individual or team of up to 3</li>
                  <li>• Members can be from different colleges</li>
                  <li>• One person can be part of only one team</li>
                  <li>• Team lead must be registered on Unstop</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="glass-card p-12 text-center glow-blue">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Journey?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of innovators and make your mark at AI Ideathon 2026
            </p>
            <a
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Begin Registration
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventOverview;
