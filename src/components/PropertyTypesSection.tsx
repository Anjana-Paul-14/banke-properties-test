import React from "react";
import { Button } from "./ui/Button";

export const PropertyTypesSection: React.FC = () => {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[600px] md:h-[720px] overflow-hidden group">
          <img
            src="/images/residential-property.png"
            alt="Residential properties"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className="
              absolute right-0 top-1/2 -translate-y-1/2 md:-translate-y-full md:top-[50%]
              bg-white/95 shadow-xl 
              p-6 md:p-10 max-w-[90%] md:max-w-[520px] mx-auto md:mx-0 z-10
            "
          >
            <h3 className="text-black text-2xl md:text-4xl font-semibold leading-tight mb-3 md:mb-4">Residential</h3>
            <p className="text-black text-base md:text-xl font-light leading-relaxed mb-4 md:mb-6">
              Modern residences in thriving communities, designed for lifestyle and long-term investment growth.
            </p>
            <Button variant="outline" className="w-auto transition-all duration-300 hover:scale-105">
              View MORE
            </Button>
          </div>
        </div>
        <div className="relative h-[600px] md:h-[720px] overflow-hidden group">
          <img
            src="/images/commercial-property.png"
            alt="Commercial properties"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className="
              absolute left-0 top-1/2 -translate-y-1/2 md:top-[50%] md:translate-y-0
              bg-white/95 shadow-xl 
              p-6 md:p-10 max-w-[90%] md:max-w-[520px] mx-auto md:mx-0 z-10
            "
          >
            <h3 className="text-black text-2xl md:text-4xl font-semibold leading-tight mb-3 md:mb-4">Commercial</h3>
            <p className="text-black text-base md:text-xl font-light leading-relaxed mb-4 md:mb-6">
              Premium office spaces and retail opportunities positioned in Dubai's most dynamic business districts.
            </p>
            <Button variant="outline" className="w-auto transition-all duration-300 hover:scale-105">
              View MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
