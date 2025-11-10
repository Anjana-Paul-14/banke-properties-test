import React from "react";
import { Button } from "./ui/Button";
export const ExclusiveProjectsSection: React.FC = () => {
  return (
    <section className="relative -mt-48 md:-mt-64 z-10 pb-24 md:pb-32">
      <div className="absolute inset-0 bg-gradient-to-l from-white/65 via-white/40 -top-1/4 to-transparent pointer-events-none"></div>
      <div className="max-w-[1600px] mx-auto px-8 relative pt-8 md:pt-12">
        <div className="bg-white p-8 w-[90%] md:w-[85%] lg:w-[100%] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-foreground text-4xl md:text-[40px] font-semibold leading-[1.1] tracking-tight mb-6">
                Exclusive Projects, Only with Banke
              </h2>

              <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                Discover a curated portfolio of residential and commercial developments available exclusively through
                Banke International Properties. From landmark addresses to investment-ready spaces, our exclusive
                projects offer unmatched access, premium advantages, and long-term value.
              </p>
            </div>

            <div className="flex md:items-center md:pt-0">
              <Button
                variant="outline"
                size="lg"
                className="w-full md:w-auto whitespace-normal md:whitespace-nowrap rounded-none border-2 border-gray-400 px-6 md:px-10 py-4 md:py-6 text-sm md:text-lg tracking-wide font-medium flex items-center justify-center gap-2 md:gap-4 transition-all duration-300 hover:scale-105 hover:border-[#FFCD00] group"
              >
                <span className="uppercase text-center">Register Your Interest Today</span>
                <span className="text-[#FFCD00] text-xl md:text-2xl transition-transform duration-300 group-hover:translate-x-2">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
