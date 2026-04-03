import { Lightbulb, Target, Rocket, Award, Users, Globe } from "lucide-react";
import { SEOMeta } from "@/components/SEO/SEOMeta";
import StatsCard from "@/components/ui/stats-card";
import TeamCard from "@/components/ui/team-card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const ref = useScrollReveal();

  const programs = [
    {
      icon: Lightbulb,
      title: "Hackathons",
      desc: "48-hour innovation sprints solving real-world challenges with AI and emerging technologies."
    },
    {
      icon: Target,
      title: "Workshops",
      desc: "Hands-on learning sessions led by industry experts on cutting-edge technologies."
    },
    {
      icon: Rocket,
      title: "Incubation",
      desc: "Supporting promising startups with mentorship, resources, and networking opportunities."
    },
    {
      icon: Award,
      title: "Competitions",
      desc: "Platform for students to showcase skills and compete at national level."
    },
  ];

  const team = [
    {
      name: "Rahul Sharma",
      title: "Founder & CEO",
      company: "CodeByt",
      bio: "Passionate about democratizing tech education and fostering innovation.",
      expertise: ["Leadership", "Strategy", "EdTech"],
    },
    {
      name: "Priya Patel",
      title: "Head of Events",
      company: "CodeByt",
      bio: "Orchestrating seamless large-scale tech events across India.",
      expertise: ["Event Management", "Operations", "Community"],
    },
    {
      name: "Arjun Verma",
      title: "Technical Lead",
      company: "CodeByt",
      bio: "Building scalable platforms and mentoring aspiring developers.",
      expertise: ["Full-Stack Dev", "AI/ML", "Architecture"],
    },
  ];

  return (
    <>
      <SEOMeta
        title="About CodeByt | Organizing AI Ideathon 2026"
        description="CodeByt is an innovative ed-tech company dedicated to empowering students through hackathons, workshops, and tech competitions. Learn about our mission and team."
        canonical="/about"
      />

      {/* Hero Banner */}
      <section className="section-padding bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <div ref={ref} className="max-w-4xl mx-auto scroll-reveal">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Innovating <span className="gradient-text">Education</span> Through Technology
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              CodeByt is on a mission to bridge the gap between academic learning and industry skills through hands-on experiences and real-world problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* About CodeByt */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div ref={useScrollReveal()} className="scroll-reveal">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Empowering the Next Generation of <span className="gradient-text">Innovators</span>
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 2024, CodeByt has quickly emerged as a leader in student-focused technology initiatives. We believe that the best way to learn is by doing, and our events provide the perfect platform for students to apply their knowledge, develop new skills, and network with industry professionals.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our flagship event, AI Ideathon, brings together hundreds of participants from across India to solve pressing challenges using artificial intelligence. We're committed to making quality tech education accessible to all.
              </p>
              
              <div className="space-y-3">
                {[
                  "Pan-India presence with 50+ college partnerships",
                  "Industry expert mentors and judges",
                  "Focus on practical, real-world problem solving",
                  "Commitment to diversity and inclusion"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div ref={useScrollReveal()} className="scroll-reveal">
              <div className="grid grid-cols-2 gap-4">
                <StatsCard icon={Users} value="1000+" label="Students Impacted" />
                <StatsCard icon={Award} value="20+" label="Events Organized" />
                <StatsCard icon={Globe} value="100+" label="College Partners" />
                <StatsCard icon={Rocket} value="50+" label="Startups Mentored" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              What We <span className="gradient-text">Do</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive programs designed to nurture innovation and build industry-ready skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((p, i) => (
              <div key={i} ref={useScrollReveal()} className="glass-card p-8 hover-glow scroll-reveal">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <p.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { emoji: "🎯", title: "Excellence", desc: "We strive for excellence in everything we do" },
              { emoji: "🤝", title: "Collaboration", desc: "Together we achieve more than alone" },
              { emoji: "💡", title: "Innovation", desc: "Encouraging creative thinking and bold ideas" },
            ].map((v, i) => (
              <div key={i} className="glass-card p-8 text-center hover-glow">
                <div className="text-5xl mb-4">{v.emoji}</div>
                <h3 className="font-display text-xl font-semibold mb-2">{v.title}</h3>
                <p className="text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The passionate individuals behind CodeByt's success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <TeamCard key={i} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="glass-card p-12 text-center glow-blue">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="gradient-text">Community</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of a thriving ecosystem of innovators, creators, and change-makers
            </p>
            <a
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
