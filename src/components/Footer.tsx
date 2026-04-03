import { Brain, Mail, Phone, Instagram, Linkedin, Twitter } from "lucide-react";

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="border-t border-border py-12 px-4 bg-muted/30">
    <div className="container mx-auto">
      {/* Main Footer Content */}
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        {/* Brand Section */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="AI Ideathon Logo" className="h-8 w-8 object-contain rounded-md" />
            <span className="font-display font-bold gradient-text text-lg">AI Ideathon 2026</span>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            Organized by <strong className="text-foreground">CodeByt</strong> - Innovating Education Through Technology
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-primary/10 transition-colors">
              <Instagram size={18} className="text-muted-foreground hover:text-primary" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-primary/10 transition-colors">
              <Linkedin size={18} className="text-muted-foreground hover:text-primary" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-primary/10 transition-colors">
              <Twitter size={18} className="text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
            <li><a href="/event" className="text-muted-foreground hover:text-foreground transition-colors">Event Details</a></li>
            <li><a href="/prizes" className="text-muted-foreground hover:text-foreground transition-colors">Prizes</a></li>
            <li><a href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">Resources</a></li>
          </ul>
        </div>

        {/* Event Links */}
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Event</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/event/themes" className="text-muted-foreground hover:text-foreground transition-colors">Themes</a></li>
            <li><a href="/event/timeline" className="text-muted-foreground hover:text-foreground transition-colors">Timeline</a></li>
            <li><a href="/event/rounds" className="text-muted-foreground hover:text-foreground transition-colors">Rounds</a></li>
            <li><a href="/event/rules" className="text-muted-foreground hover:text-foreground transition-colors">Rules</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Mail size={16} className="text-primary mt-0.5 shrink-0" />
              <a href="mailto:mukesh.mmp1234@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                mukesh.mmp1234@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={16} className="text-primary mt-0.5 shrink-0" />
              <a href="tel:+918416982676" className="text-muted-foreground hover:text-foreground transition-colors">
                +91 84169 82676
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border pt-8 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} AI Ideathon. All rights reserved. Organized with ❤️ by CodeByt
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
