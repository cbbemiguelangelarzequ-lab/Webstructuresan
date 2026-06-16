import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import GradientBackground from "../components/layout/GradientBackground";

import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import AppShowcaseSection from "../components/sections/AppShowcaseSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import PricingPreviewSection from "../components/sections/PricingPreviewSection";
import FinalCTASection from "../components/sections/FinalCTASection";

import ChatbotFloating from "../components/chat/ChatbotFloating";

const Home: React.FC = () => {
  return (
    <div className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth scroll-pt-20 bg-slate-950 text-slate-50">
      <GradientBackground />
      
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <main className="relative z-10">
        <div className="snap-start snap-always min-h-[calc(100vh-5rem)] flex flex-col justify-center">
          <HeroSection />
        </div>
        <div id="features" className="snap-start snap-always min-h-[calc(100vh-5rem)] flex flex-col justify-center">
          <FeaturesSection />
        </div>
        <div className="snap-start snap-always min-h-[calc(100vh-5rem)] flex flex-col justify-center">
          <HowItWorksSection />
        </div>
        <div id="about" className="snap-start snap-always min-h-[calc(100vh-5rem)] flex flex-col justify-center">
          <AppShowcaseSection />
        </div>
        <div className="snap-start snap-always min-h-[calc(100vh-5rem)] flex flex-col justify-center">
          <TestimonialsSection />
        </div>
        <div id="pricing" className="snap-start snap-always min-h-[calc(100vh-5rem)] flex flex-col justify-center">
          <PricingPreviewSection />
        </div>
        <div id="contact" className="snap-start snap-always min-h-[calc(100vh-5rem)] flex flex-col justify-center">
          <FinalCTASection />
        </div>
        <div className="snap-start snap-always">
          <Footer />
        </div>
      </main>

      {/* Chat IA flotante */}
      <ChatbotFloating />
    </div>
  );
};

export default Home;
