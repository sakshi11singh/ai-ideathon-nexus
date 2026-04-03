import { useState, useCallback } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SEOProvider } from "@/components/SEO/SEOMeta";
import LoadingScreen from "@/components/LoadingScreen";
import PageLayout from "@/components/Layout/PageLayout";
import EventLayout from "@/components/Layout/EventLayout";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import EventOverview from "./pages/EventOverview";
import ThemesPage from "./pages/event/ThemesPage";
import TimelinePage from "./pages/event/TimelinePage";
import RoundsPage from "./pages/event/RoundsPage";
import RulesPage from "./pages/event/RulesPage";
import Prizes from "./pages/Prizes";
import Register from "./pages/Register";
import Resources from "./pages/Resources";
import Judges from "./pages/Judges";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

// Role Registration Pages
import Mentor from "./pages/Mentor";
import Speaker from "./pages/Speaker";
import Judge from "./pages/Judge";
import Sponsor from "./pages/Sponsor";
import MediaPartner from "./pages/MediaPartner";
import CampusAmbassador from "./pages/CampusAmbassador";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <SEOProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {loading && <LoadingScreen onComplete={handleComplete} />}
          <BrowserRouter>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<PageLayout><Index /></PageLayout>} />
              <Route path="/about" element={<PageLayout><About /></PageLayout>} />
              
              {/* Event Pages */}
              <Route path="/event" element={<EventLayout><EventOverview /></EventLayout>} />
              <Route path="/event/themes" element={<EventLayout><ThemesPage /></EventLayout>} />
              <Route path="/event/timeline" element={<EventLayout><TimelinePage /></EventLayout>} />
              <Route path="/event/rounds" element={<EventLayout><RoundsPage /></EventLayout>} />
              <Route path="/event/rules" element={<EventLayout><RulesPage /></EventLayout>} />
              
              {/* Other Pages */}
              <Route path="/prizes" element={<PageLayout><Prizes /></PageLayout>} />
              <Route path="/register" element={<PageLayout><Register /></PageLayout>} />
              <Route path="/resources" element={<PageLayout><Resources /></PageLayout>} />
              <Route path="/judges" element={<PageLayout><Judges /></PageLayout>} />
              <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
              
              {/* Role Registration Pages */}
              <Route path="/mentor" element={<PageLayout><Mentor /></PageLayout>} />
              <Route path="/speaker" element={<PageLayout><Speaker /></PageLayout>} />
              <Route path="/judge" element={<PageLayout><Judge /></PageLayout>} />
              <Route path="/sponsor" element={<PageLayout><Sponsor /></PageLayout>} />
              <Route path="/media-partner" element={<PageLayout><MediaPartner /></PageLayout>} />
              <Route path="/campus-ambassador" element={<PageLayout><CampusAmbassador /></PageLayout>} />
              
              {/* Legal Pages */}
              <Route path="/privacy" element={<PageLayout><Privacy /></PageLayout>} />
              <Route path="/terms" element={<PageLayout><Terms /></PageLayout>} />
              
              {/* 404 - Must be last */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </SEOProvider>
  );
};

export default App;
