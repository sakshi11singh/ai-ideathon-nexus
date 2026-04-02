import { Users, UserCheck, Github, ShieldCheck, Ban } from "lucide-react";

const rules = [
  { icon: Users, text: "Team size: 1–3 members" },
  { icon: UserCheck, text: "Participants must be aged 15–24" },
  { icon: Github, text: "GitHub repository is mandatory" },
  { icon: ShieldCheck, text: "Project ownership transfers after Round 2" },
  { icon: Ban, text: "Plagiarism leads to immediate disqualification" },
];

const RulesSection = () => (
  <section id="rules" className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Rules & <span className="gradient-text">Guidelines</span>
        </h2>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {rules.map((r) => (
          <div key={r.text} className="glass-card p-5 flex items-center gap-4 hover-glow">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <r.icon className="text-primary" size={20} />
            </div>
            <p className="text-foreground font-medium">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RulesSection;
