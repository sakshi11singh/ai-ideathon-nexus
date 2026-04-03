import { BookOpen, Code2, Download, Video, Brain, ArrowRight } from "lucide-react";
import { SEOMeta } from "@/components/SEO/SEOMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const resources = [
  {
    category: "Learning Hub",
    icon: BookOpen,
    items: [
      { title: "AI Fundamentals", desc: "Introduction to AI and Machine Learning concepts", link: "#" },
      { title: "Python for AI", desc: "Essential Python programming for AI development", link: "#" },
      { title: "Deep Learning Specialization", desc: "Advanced neural networks and deep learning", link: "#" },
    ]
  },
  {
    category: "Tools & APIs",
    icon: Code2,
    items: [
      { title: "Free Cloud APIs", desc: "List of free APIs for your projects", link: "#" },
      { title: "Google Colab", desc: "Free GPU for model training", link: "https://colab.research.google.com" },
      { title: "Hugging Face", desc: "Pre-trained models and datasets", link: "https://huggingface.co" },
    ]
  },
  {
    category: "Video Tutorials",
    icon: Video,
    items: [
      { title: "3Blue1Brown - Neural Networks", desc: "Visual introduction to neural networks", link: "#" },
      { title: "StatQuest - ML Algorithms", desc: "Clear explanations of ML algorithms", link: "#" },
      { title: "freeCodeCamp - AI Course", desc: "Complete AI course for beginners", link: "#" },
    ]
  },
  {
    category: "Downloads",
    icon: Download,
    items: [
      { title: "Event Brochure", desc: "Complete event details and schedule", link: "#" },
      { title: "PPT Template", desc: "Official presentation template", link: "#" },
      { title: "Rulebook PDF", desc: "Detailed rules and guidelines", link: "#" },
    ]
  },
];

const Resources = () => {
  const ref = useScrollReveal();

  return (
    <>
      <SEOMeta
        title="Resources | AI Ideathon 2026"
        description="Access learning materials, tools, APIs, tutorials, and downloads to prepare for AI Ideathon 2026. Everything you need to succeed."
        canonical="/resources"
      />

      <section className="section-padding bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <div ref={ref} className="max-w-4xl mx-auto scroll-reveal">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Tools for <span className="gradient-text">Success</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Curated resources to help you prepare and excel at AI Ideathon 2026
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {resources.map((cat, i) => (
              <div key={i} ref={useScrollReveal()} className="glass-card p-8 hover-glow scroll-reveal">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <cat.icon className="text-primary" size={28} />
                  </div>
                  <h2 className="font-display text-2xl font-bold">{cat.category}</h2>
                </div>
                <div className="space-y-4">
                  {cat.items.map((item, j) => (
                    <a
                      key={j}
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block p-4 rounded-lg bg-muted/50 hover:bg-primary/5 transition-colors group"
                    >
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Mentorship <span className="gradient-text">Program</span>
          </h2>
          
          <div className="glass-card p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-2xl font-bold mb-4">Get Guided by Experts</h3>
                <p className="text-muted-foreground mb-6">
                  Our mentorship program connects you with industry professionals and AI experts who can guide your project development.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• One-on-one mentoring sessions</li>
                  <li>• Domain-specific guidance</li>
                  <li>• Project feedback and reviews</li>
                  <li>• Career advice and networking</li>
                </ul>
              </div>
              <div className="text-center">
                <Brain className="w-32 h-32 mx-auto text-primary opacity-20 mb-6" />
                <a
                  href="/judges"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  Meet Our Mentors <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Need More <span className="gradient-text">Help?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is here to support you throughout your journey. Reach out if you have questions or need assistance.
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

export default Resources;
