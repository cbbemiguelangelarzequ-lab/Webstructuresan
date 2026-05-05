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
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="relative overflow-hidden">
        <GradientBackground />
        <Navbar />

        <main className="relative z-10">
          <HeroSection />
          <div id="features">
            <FeaturesSection />
          </div>
          <HowItWorksSection />
          <div id="about">
            <AppShowcaseSection />
          </div>
          <TestimonialsSection />
          <div id="pricing">
            <PricingPreviewSection />
          </div>
          <div id="contact">
            <FinalCTASection />
          </div>
        </main>

        <Footer />

        {/* Chat IA flotante */}
        <ChatbotFloating />
      </div>
    </div>
  );
};

export default Home;
