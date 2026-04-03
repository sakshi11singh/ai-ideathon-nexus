import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search, HelpCircle } from "lucide-react";
import { SEOMeta } from "@/components/SEO/SEOMeta";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOMeta
        title="Page Not Found | AI Ideathon 2026"
        description="The page you're looking for doesn't exist. Return to homepage or explore AI Ideathon 2026."
      />

      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="font-display text-9xl font-bold gradient-text">404</h1>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              <Home size={20} /> Back to Homepage
            </a>
            <a
              href="/event"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-card text-foreground font-semibold hover-glow"
            >
              <Search size={20} /> Explore Event
            </a>
          </div>

          <div className="glass-card p-8 mt-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <HelpCircle className="text-primary" size={24} />
              <h3 className="font-display text-xl font-bold text-foreground">Need Help?</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Looking for something specific? Here are some popular pages:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Register", href: "/register" },
                { label: "Themes", href: "/event/themes" },
                { label: "Timeline", href: "/event/timeline" },
                { label: "Prizes", href: "/prizes" },
                { label: "Resources", href: "/resources" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Judges", href: "/judges" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 rounded-lg glass-card text-sm text-foreground hover:bg-primary/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Still can't find what you need?{' '}
              <a href="/contact" className="text-primary hover:underline">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
