import React from "react";

export const AboutUsHeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen md:h-[800px] overflow-hidden">
      <img
        src="/images/hero-building.png"
        alt="New York architecture"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 md:px-0 max-w-4xl">
          <h1 className="text-white text-1xl md:text-3xl leading-tight md:leading-tight font-extralight">
            "Where vision meets opportunity, Banke drives <br /> success through innovation and excellence"
          </h1>
        </div>
      </div>
    </section>
  );
};
