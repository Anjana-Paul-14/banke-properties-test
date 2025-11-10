import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ExclusiveProjectsSection } from "@/components/ExclusiveProjectsSection";
import { PropertyTypesSection } from "@/components/PropertyTypesSection";
import { WhyBankeSection } from "@/components/WhyBankeSection";
import { StatsSection } from "@/components/StatsSection";
import { BankeAdvantageSection } from "@/components/BankeAdvantageSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ExpertsSection } from "@/components/ExpertsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <HeroSection />

        <div className="relative">
          <ExclusiveProjectsSection />

          <PropertyTypesSection />
          <WhyBankeSection />
        </div>

        <BankeAdvantageSection />

        <StatsSection />

        <TestimonialsSection />

        <ExpertsSection />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
