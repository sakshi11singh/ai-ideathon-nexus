import { Mail, Phone, Instagram, Linkedin, Twitter, MapPin, Clock } from "lucide-react";
import { SEOMeta } from "@/components/SEO/SEOMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const Contact = () => {
  const ref = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <>
      <SEOMeta
        title="Contact Us | AI Ideathon 2026"
        description="Get in touch with the AI Ideathon 2026 team. Reach out for queries about registration, event details, sponsorships, or any other questions."
        canonical="/contact"
      />

      <section className="section-padding bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <div ref={ref} className="max-w-4xl mx-auto scroll-reveal">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Have questions? We're here to help and would love to hear from you
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div ref={useScrollReveal()} className="scroll-reveal">
              <div className="glass-card p-8">
                <h2 className="font-display text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">Category</label>
                    <select
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="general">General Query</option>
                      <option value="technical">Technical Support</option>
                      <option value="sponsorship">Sponsorship</option>
                      <option value="media">Media & Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="What is this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message *</label>
                    <textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div ref={useScrollReveal()} className="scroll-reveal space-y-6">
              <div className="glass-card p-8">
                <h2 className="font-display text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <a href="mailto:aiideathon2026@gmail.com" className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors">
                    <Mail className="text-primary shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Email Us</p>
                      <p className="text-muted-foreground">aiideathon2026@gmail.com</p>
                    </div>
                  </a>
                  
                  <a href="tel:+919876543210" className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors">
                    <Phone className="text-primary shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Call Us</p>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </a>
                  
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors">
                    <Clock className="text-primary shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Response Time</p>
                      <p className="text-muted-foreground">We typically respond within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <h2 className="font-display text-2xl font-bold mb-6">Office Hours</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="text-primary" size={18} />
                    <span className="text-foreground">Monday - Friday: 10:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-primary" size={18} />
                    <span className="text-foreground">Saturday: 10:00 AM - 2:00 PM IST</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-primary" size={18} />
                    <span className="text-foreground">Sunday: Closed</span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <h2 className="font-display text-2xl font-bold mb-6">Follow Us</h2>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, href: "#", label: "Instagram" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover-glow"
                      aria-label={label}
                    >
                      <Icon className="text-muted-foreground hover:text-primary transition-colors" size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Emergency <span className="gradient-text">Contact</span>
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            During the event days, our emergency support line will be available 24/7 for all participants
          </p>
          <a href="tel:+919876543210" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            <Phone size={20} /> +91 98765 43210
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
