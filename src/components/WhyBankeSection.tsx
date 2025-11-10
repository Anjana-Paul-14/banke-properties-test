import React from "react";

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <article className="bg-white border border-gray-300 rounded-none p-8 md:p-10 flex flex-col h-full min-h-[360px] z-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
    <div className="h-16 md:h-20 flex items-center mb-6 md:mb-8 transition-transform duration-300 group-hover:scale-110">
      {icon}
    </div>
    <h3 className="text-black text-[20px] md:text-[20px] font-semibold leading-tight tracking-tight mb-5 max-w-[22ch]">
      {title}
    </h3>
    <p className="text-neutral-400 text-base md:text-lg leading-relaxed">{description}</p>
  </article>
);

export const WhyBankeSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative mb-3">
          <div className="absolute -left-[1350px] -top-[20px]  md:w-[1840px] h-[140px] md:h-[200px] bg-gray-100 -z-9"></div>
          <h2 className="relative text-black text-2xl md:text-4xl font-semibold leading-tight text-center md:text-left px-4 md:px-3 py-2 md:py-3 inline-block">
            Why Banke Capital
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 items-stretch">
          <FeatureCard
            icon={<img src="/images/priority-access-icon.png" alt="" className="h-full w-auto" />}
            title="Priority Access"
            description="Be among the first to secure prime opportunities before they reach the open market."
          />
          <FeatureCard
            icon={<img src="/images/residential-commercial-icon.png" alt="" className="h-full w-auto" />}
            title="Residential & Commercial Choices"
            description="From signature residences to Grade A office towers, our exclusives span both lifestyle and business."
          />
          <FeatureCard
            icon={<img src="/images/growth-roi-icon.png" alt="" className="h-full w-auto" />}
            title="Capital Growth & ROI"
            description="Each project is selected for sustainable appreciation and strong rental demand."
          />
          <FeatureCard
            icon={<img src="/images/partnerships-icon.png" alt="" className="h-full w-auto" />}
            title="Trusted Developer Partnerships"
            description="We bring you projects backed by leading developers, ensuring reliability and transparency."
          />
        </div>
      </div>
    </section>
  );
};
