import { Users, UserCheck, Github, ShieldCheck, Ban, CheckCircle2, AlertTriangle } from "lucide-react";
import { SEOMeta } from "@/components/SEO/SEOMeta";
import Breadcrumb from "@/components/Navigation/Breadcrumb";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const rules = [
  { icon: Users, text: "Team size: 1–3 members (maximum)", category: "eligibility" },
  { icon: UserCheck, text: "Participants must be aged 15–24 years", category: "eligibility" },
  { icon: UserCheck, text: "Must be currently enrolled in school/college/university", category: "eligibility" },
  { icon: UserCheck, text: "Participants from any academic background are welcome", category: "eligibility" },
  { icon: Github, text: "GitHub repository is mandatory for final round", category: "submission" },
  { icon: Github, text: "All code must be uploaded before deadline", category: "submission" },
  { icon: Github, text: "Repository must include README with setup instructions", category: "submission" },
  { icon: ShieldCheck, text: "Project ownership transfers to organizers after Round 2", category: "legal" },
  { icon: ShieldCheck, text: "By participating, you agree to terms and conditions", category: "legal" },
  { icon: Ban, text: "Plagiarism leads to immediate disqualification", category: "conduct" },
  { icon: Ban, text: "Use of pre-existing code must be properly attributed", category: "conduct" },
  { icon: Ban, text: "Respect fellow participants and maintain professionalism", category: "conduct" },
];

const RulesPage = () => {
  const ref = useScrollReveal();
  const [agreed, setAgreed] = useState(false);

  const categories = ["eligibility", "submission", "legal", "conduct"];

  return (
    <>
      <SEOMeta
        title="Rules & Guidelines | AI Ideathon 2026"
        description="Complete rulebook for AI Ideathon 2026. Understand eligibility criteria, submission guidelines, code of conduct, and legal requirements."
        canonical="/event/rules"
      />

      <section className="section-padding bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <Breadcrumb />
          <div ref={ref} className="max-w-4xl mx-auto text-center scroll-reveal">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Rules & <span className="gradient-text">Guidelines</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Essential guidelines for fair and successful participation
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-8 mb-8">
            <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-3">
              <AlertTriangle className="text-warning" size={28} />
              Important Notice
            </h2>
            <p className="text-muted-foreground mb-4">
              All participants must read and agree to follow these rules throughout the competition. 
              Violation of any rule may result in disqualification without refund.
            </p>
            <div className="flex items-center gap-3 mt-6 p-4 bg-primary/10 rounded-lg">
              <input
                type="checkbox"
                id="agree"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-5 h-5 rounded border-primary text-primary focus:ring-primary"
              />
              <label htmlFor="agree" className="text-foreground cursor-pointer select-none">
                I have read and agree to abide by all rules and guidelines
              </label>
            </div>
          </div>

          {categories.map((category) => (
            <div key={category} className="mb-8" ref={useScrollReveal()}>
              <h2 className="font-display text-2xl font-bold mb-4 capitalize scroll-reveal">
                {category} Requirements
              </h2>
              <div className="space-y-3">
                {rules
                  .filter((r) => r.category === category)
                  .map((r, i) => (
                    <div key={i} className="glass-card p-5 flex items-start gap-4 hover-glow scroll-reveal">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <r.icon className="text-primary" size={20} />
                      </div>
                      <p className="text-foreground font-medium pt-2">{r.text}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-center">
            Code of <span className="gradient-text">Conduct</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { emoji: "🤝", title: "Be Respectful", desc: "Treat all participants with respect and kindness" },
              { emoji: "💬", title: "Communicate Openly", desc: "Share ideas and collaborate effectively" },
              { emoji: "🎯", title: "Stay Professional", desc: "Maintain professionalism in all interactions" },
              { emoji: "🚫", title: "No Harassment", desc: "Harassment of any kind will not be tolerated" },
              { emoji: "✅", title: "Follow Rules", desc: "Adhere to all competition guidelines" },
              { emoji: "🔒", title: "Respect Privacy", desc: "Don't share others' information without consent" },
            ].map((c, i) => (
              <div key={i} className="glass-card p-6 hover-glow">
                <div className="text-3xl mb-3">{c.emoji}</div>
                <h3 className="font-semibold text-foreground mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Have Questions About <span className="gradient-text">Rules?</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            If you have any questions or need clarification about the rules, feel free to reach out to us.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

export default RulesPage;
