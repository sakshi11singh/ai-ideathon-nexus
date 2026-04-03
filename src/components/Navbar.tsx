import { useState, useEffect } from "react";
import { Menu, X, Brain, ChevronDown, Trophy, BookOpen, Calendar, FileText, ShieldCheck, Users, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

const eventDropdown = [
  { label: "Overview", href: "/event", icon: BookOpen },
  { label: "Themes", href: "/event/themes", icon: Users },
  { label: "Timeline", href: "/event/timeline", icon: Calendar },
  { label: "Rounds", href: "/event/rounds", icon: FileText },
  { label: "Rules", href: "/event/rules", icon: ShieldCheck },
];

const moreLinks = [
  { label: "Prizes", href: "/prizes", icon: Trophy },
  { label: "Resources", href: "/resources" },
  { label: "Judges", href: "/judges" },
  { label: "Contact", href: "/contact", icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [eventDropdownOpen, setEventDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""}`}>
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-2">
          <Brain className="h-8 w-8 text-primary" />
          <span className="font-display text-xl font-bold gradient-text">AI Ideathon</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          
          {/* Event Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setEventDropdownOpen(true)}
            onMouseLeave={() => setEventDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Event <ChevronDown size={16} className={`transition-transform ${eventDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            
            {eventDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 glass-card rounded-lg shadow-xl border border-border overflow-hidden animate-slide-up">
                {eventDropdown.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition-colors"
                  >
                    <item.icon size={18} className="text-primary" />
                    <span className="text-sm text-foreground">{item.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* More Dropdown */}
          <div className="flex items-center gap-4">
            {moreLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-slide-up">
          <div className="container mx-auto py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="py-2 text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
            
            {/* Event Section Mobile */}
            <div className="py-2">
              <p className="text-xs text-muted-foreground mb-2">EVENT</p>
              {eventDropdown.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <item.icon size={16} className="text-primary" />
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>

            {/* More Section Mobile */}
            <div className="py-2">
              <p className="text-xs text-muted-foreground mb-2">MORE</p>
              {moreLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.icon && <l.icon size={16} />}
                  <span className="text-sm">{l.label}</span>
                </a>
              ))}
            </div>

            <a href="https://unstop.com" target="_blank" rel="noopener noreferrer" className="mt-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground text-center font-semibold">
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
