import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface EventLayoutProps {
  children: ReactNode;
}

const EventLayout = ({ children }: EventLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20 pb-20">{children}</main>
      <Footer />
    </div>
  );
};

export default EventLayout;
