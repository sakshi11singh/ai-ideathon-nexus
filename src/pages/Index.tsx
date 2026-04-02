import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ThemesSection from "@/components/ThemesSection";
import TimelineSection from "@/components/TimelineSection";
import RoundsSection from "@/components/RoundsSection";
import RulesSection from "@/components/RulesSection";
import PrizesSection from "@/components/PrizesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ThemesSection />
    <TimelineSection />
    <RoundsSection />
    <RulesSection />
    <PrizesSection />
    <FAQSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
