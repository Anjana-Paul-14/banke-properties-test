import React from "react";

const StatCard: React.FC<{
  value: string;
  label: string;
  highlight?: boolean;
}> = ({ value, label, highlight = false }) => (
  <article className="relative border border-white/30 p-8 text-left h-72 md:h-80 flex flex-col justify-center overflow-hidden transition-all duration-300 hover:border-white/60 hover:-translate-y-1 group">
    {highlight && (
      <div
        className="absolute inset-0 pointer-events-none mix-blend-screen animate-glowPulse"
        style={{
          background:
            "radial-gradient(120% 80% at 30% 60%, rgba(255,205,0,0.85) 0%, rgba(255,205,0,0.55) 35%, rgba(255,205,0,0.25) 60%, rgba(255,205,0,0) 85%)",
          filter: "blur(12px)",
          opacity: 0.8,
        }}
      />
    )}

    <div className="relative z-10">
      <div className="text-[#FFCD00] text-6xl md:text-7xl font-semibold leading-none mb-4 drop-shadow-[0_0_8px_rgba(255,205,0,0.6)] transition-all duration-300 group-hover:scale-110">
        {value}
      </div>
      <div className="text-white/90 text-lg md:text-xl font-light leading-relaxed">{label}</div>
    </div>
  </article>
);

export const StatsSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24">
      <img
        src="/images/Base.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/75" />
      <style>{`
        @keyframes glowPulse {
          0% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 0.95; transform: scale(1.03); }
          100% { opacity: 0.55; transform: scale(1); }
        }
        .animate-glowPulse {
          animation: glowPulse 3.5s ease-in-out infinite;
        }
      `}</style>
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-white text-3xl md:text-5xl font-semibold leading-tight mb-10 md:mb-14">
          Why Partner With Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <StatCard value="50B+" label="Portfolio Value" highlight />
          <StatCard value="200+" label="Broker Network" />
          <StatCard value="13+" label="Years of Expertise" />
          <StatCard value="2,000+" label="Exclusive Listings" />
        </div>
      </div>
    </section>
  );
};
