import { Mail, Phone, Instagram, Linkedin, Twitter } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const ref = useScrollReveal();
  return (
  <section id="contact" className="section-padding bg-muted/30 scroll-reveal" ref={ref}>
    <div className="container mx-auto text-center">
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
        Get In <span className="gradient-text">Touch</span>
      </h2>
      <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
        Have questions? Reach out to us and we'll be happy to help.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
        <a href="mailto:aiideathon2026@gmail.com" className="glass-card px-8 py-5 flex items-center gap-3 hover-glow">
          <Mail className="text-primary" size={22} />
          <span className="text-foreground">aiideathon2026@gmail.com</span>
        </a>
        <a href="tel:+919876543210" className="glass-card px-8 py-5 flex items-center gap-3 hover-glow">
          <Phone className="text-primary" size={22} />
          <span className="text-foreground">+91 98765 43210</span>
        </a>
      </div>

      <div className="flex justify-center gap-4">
        {[
          { icon: Instagram, href: "#" },
          { icon: Linkedin, href: "#" },
          { icon: Twitter, href: "#" },
        ].map(({ icon: Icon, href }, i) => (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover-glow">
            <Icon className="text-muted-foreground hover:text-primary transition-colors" size={20} />
          </a>
        ))}
      </div>
    </div>
  </section>
  );
};

export default ContactSection;
