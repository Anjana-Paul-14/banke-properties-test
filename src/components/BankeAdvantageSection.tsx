import React from "react";

export const BankeAdvantageSection: React.FC = () => {
  const features = [
    {
      icon: "/images/sales-enablement-icon.png",
      title: "Sales Enablement Partner",
    },
    {
      icon: "/images/marketing-orchestration-icon.png",
      title: "360 degree Integrated Marketing Orchestration",
    },
    {
      icon: "/images/broker-network-icon.png",
      title: "Wide Broker Network Engagement",
    },
  ];

  return (
    <section className="relative">
      <div className="absolute -left-[1350px] -top-[20px]  md:w-[2440px] h-[140px] md:h-[360px] bg-gray-100 -z-9"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start z-10">
          <div>
            <h2 className="text-black text-[28px] md:text-[36px] font-semibold leading-tight tracking-tight mb-5">
              The Banke Advantage:
              <br />A 360 Partner Solution
            </h2>
            <p className="text-neutral-700 text-sm md:text-base leading-relaxed mb-3 max-w-xl">
              At Banke, we don’t just list properties — we create pathways to opportunity. Our exclusive projects
              reflect <strong>strategic selection, market foresight, and developer trust</strong>.
            </p>
            <p className="text-neutral-700 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              With end-to-end support, from selection and financing to leasing and management, we ensure your experience
              is seamless and rewarding.
            </p>

            <br />
            <p className="text-neutral-700 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              At Banke, we don't just list properties - we create pathways to opportunity. Our projects reflect
              strategic selection, market foresight & developer trust
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110">
                    <img src={f.icon} alt={f.title} className="w-full h-full object-contain" />
                  </div>
                  <p className="mt-3 text-neutral-400 text-sm md:text-[12px] leading-snug max-w-[20rem]">{f.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 md:mt-12 lg:mt-16">
            <div className="w-full aspect-[4/3] bg-gray-200 overflow-hidden group">
              <img src="/images/ny-architecture.png" alt="Modern architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
