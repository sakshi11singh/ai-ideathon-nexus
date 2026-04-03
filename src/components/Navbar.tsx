import { useState, useEffect } from "react";
import { Menu, X, Brain, ChevronDown, Trophy, BookOpen, Calendar, FileText, ShieldCheck, Users, Mail, Mic, Gavel, Building2, Newspaper, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

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
  { label: "Judges & Mentors", href: "/judges" },
  { label: "Contact", href: "/contact", icon: Mail },
];

const getInvolvedDropdown = [
  { label: "Participant", href: "/register", icon: Users },
  { label: "Mentor", href: "/mentor", icon: Brain },
  { label: "Speaker", href: "/speaker", icon: Mic },
  { label: "Judge", href: "/judge", icon: Gavel },
  { label: "Sponsor", href: "/sponsor", icon: Building2 },
  { label: "Media Partner", href: "/media-partner", icon: Newspaper },
  { label: "Campus Ambassador", href: "/campus-ambassador", icon: Rocket },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [eventDropdownOpen, setEventDropdownOpen] = useState(false);
  const [getInvolvedDropdownOpen, setGetInvolvedDropdownOpen] = useState(false);
  const [mobileEventExpanded, setMobileEventExpanded] = useState(false);
  const [mobileGetInvolvedExpanded, setMobileGetInvolvedExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""}`}>
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="AI Ideathon Logo" className="h-10 w-10 object-contain rounded-lg" />
          <span className="font-display text-xl font-bold gradient-text">AI Ideathon</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          
          {/* Event Dropdown - Desktop */}
          <div 
            className="relative"
            onMouseEnter={() => setEventDropdownOpen(true)}
            onMouseLeave={() => setEventDropdownOpen(false)}
          >
            <button 
              onClick={() => setEventDropdownOpen(!eventDropdownOpen)}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Event <ChevronDown size={16} className={`transition-transform ${eventDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            
            {eventDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 glass-card rounded-lg shadow-xl border border-border overflow-hidden animate-slide-up z-50">
                {eventDropdown.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setEventDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition-colors"
                  >
                    <item.icon size={18} className="text-primary" />
                    <span className="text-sm text-foreground">{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Get Involved Dropdown - Desktop */}
          <div 
            className="relative"
            onMouseEnter={() => setGetInvolvedDropdownOpen(true)}
            onMouseLeave={() => setGetInvolvedDropdownOpen(false)}
          >
            <button 
              onClick={() => setGetInvolvedDropdownOpen(!getInvolvedDropdownOpen)}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Get Involved <ChevronDown size={16} className={`transition-transform ${getInvolvedDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            
            {getInvolvedDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 glass-card rounded-lg shadow-xl border border-border overflow-hidden animate-slide-up z-50">
                {getInvolvedDropdown.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setGetInvolvedDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition-colors"
                  >
                    <item.icon size={18} className="text-primary" />
                    <span className="text-sm text-foreground">{item.label}</span>
                  </Link>
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

          <Link
            to="/register"
            className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Register Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-slide-up max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="py-2 text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
            
            {/* Event Section Mobile - Expandable */}
            <div className="py-2">
              <button 
                onClick={() => setMobileEventExpanded(!mobileEventExpanded)}
                className="flex items-center justify-between w-full py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-xs font-semibold uppercase tracking-wider">Event</span>
                <ChevronDown size={16} className={`transition-transform ${mobileEventExpanded ? "rotate-180" : ""}`} />
              </button>
              {mobileEventExpanded && (
                <div className="ml-4 mt-2 space-y-1 animate-slide-up">
                  {eventDropdown.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => { setIsOpen(false); setMobileEventExpanded(false); }}
                      className="flex items-center gap-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <item.icon size={16} className="text-primary" />
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Get Involved Section Mobile - Expandable */}
            <div className="py-2">
              <button 
                onClick={() => setMobileGetInvolvedExpanded(!mobileGetInvolvedExpanded)}
                className="flex items-center justify-between w-full py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-xs font-semibold uppercase tracking-wider">Get Involved</span>
                <ChevronDown size={16} className={`transition-transform ${mobileGetInvolvedExpanded ? "rotate-180" : ""}`} />
              </button>
              {mobileGetInvolvedExpanded && (
                <div className="ml-4 mt-2 space-y-1 animate-slide-up">
                  {getInvolvedDropdown.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => { setIsOpen(false); setMobileGetInvolvedExpanded(false); }}
                      className="flex items-center gap-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <item.icon size={16} className="text-primary" />
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* More Section Mobile */}
            <div className="py-2">
              <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wider">MORE</p>
              {moreLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.icon && <l.icon size={16} />}
                  <span className="text-sm">{l.label}</span>
                </Link>
              ))}
            </div>

            <Link to="/register" onClick={() => setIsOpen(false)} className="mt-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground text-center font-semibold block">
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
