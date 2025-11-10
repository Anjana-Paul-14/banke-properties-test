import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen md:h-[1080px] overflow-hidden">
      <img src="/images/dubai-skyline.png" alt="Dubai skyline at sunset" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center animate-fade-in -mt-20 md:-mt-32">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-6xl">
            Where{" "}
            <span className="text-brand-yellow">
              <b>Exclusivity</b>
            </span>{" "}
            Meets Opportunity
          </h1>
        </div>
      </div>
    </section>
  );
};
