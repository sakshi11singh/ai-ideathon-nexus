import { Brain } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Brain className="h-6 w-6 text-primary" />
        <span className="font-display font-bold gradient-text">AI Ideathon 2026</span>
      </div>
      <p className="text-muted-foreground text-sm text-center">
        Organized with ❤️ by AI Ideathon Team • © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
