import React from 'react';

const ExpertCard: React.FC<{
  name: string;
  designation: string;
}> = ({ name, designation }) => (
  <article className="border border-gray-400 bg-gray-200 h-[539px] flex flex-col">
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="w-64 h-80 bg-gray-300 flex items-center justify-center">
        <svg width="200" height="250" viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="250" fill="#E5E5E5"/>
          <circle cx="100" cy="80" r="30" fill="#9E9E9E"/>
          <path d="M60 180C60 150 75 130 100 130C125 130 140 150 140 180V250H60V180Z" fill="#9E9E9E"/>
        </svg>
      </div>
    </div>
    
    <footer className="p-6 bg-white">
      <h3 className="text-black text-3xl font-semibold leading-tight mb-2">
        {name}
      </h3>
      <p className="text-black text-lg font-normal">
        {designation}
      </p>
    </footer>
  </article>
);

export const ExpertsSection: React.FC = () => {
  const experts = [
    { name: "Expert Name", designation: "Designation" },
    { name: "Expert Name", designation: "Designation" },
    { name: "Expert Name", designation: "Designation" },
    { name: "Expert Name", designation: "Designation" }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-black text-3xl md:text-5xl font-semibold leading-tight mb-6">
          Banke Capital Experts
        </h2>
        
        <p className="text-black text-lg md:text-xl font-light leading-relaxed mb-12 max-w-4xl">
          Meet the leadership team at Banke. Discover our experts driving real estate success across Dubai with strategic innovation and market expertise.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert, index) => (
            <ExpertCard
              key={index}
              name={expert.name}
              designation={expert.designation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
