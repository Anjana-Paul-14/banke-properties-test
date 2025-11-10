import React, { useState } from 'react';

const TestimonialCard: React.FC<{
  quote: string;
  name: string;
  title: string;
  isActive?: boolean;
}> = ({ quote, name, title, isActive = false }) => (
  <article className={`border border-gray-300 bg-white p-8 h-96 flex flex-col justify-between ${isActive ? 'shadow-lg' : ''}`}>
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0L19.6 11.056H31.2L22.4 17.888L26 28.944L16 22.112L6 28.944L9.6 17.888L0.8 11.056H12.4L16 0Z" fill="#FBB040"/>
        </svg>
      ))}
    </div>
    
    <blockquote className="text-gray-600 text-xl font-light leading-relaxed flex-1 mb-6">
      {quote}
    </blockquote>
    
    <footer>
      <div className="text-gray-800 text-sm font-semibold mb-1">{name}</div>
      <div className="text-gray-500 text-xs">{title}</div>
    </footer>
  </article>
);

export const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "Through Banke's exclusive access, we secured a commercial space that has been consistently leased at premium rates.",
      name: "Sabo Masties",
      title: "Founder @ Rolex"
    },
    {
      quote: "The residential project we invested in with Banke sold out quickly — we were glad to have priority access before the market.",
      name: "Sam",
      title: "Founder @ Migelko"
    },
    {
      quote: "With Banke's exclusives, we weren't just buying property — we were securing future value. Their early access advantage gave us confidence and results.",
      name: "Mansur",
      title: "Founder @ Google"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-black text-3xl md:text-5xl font-semibold leading-tight mb-12">
          Client Experiences
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              isActive={index === currentTestimonial}
            />
          ))}
        </div>
        
        <div className="flex justify-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCurrentTestimonial(Math.max(0, currentTestimonial - 1))}
              className="w-16 h-16 bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
              disabled={currentTestimonial === 0}
            >
              <svg width="27" height="12" viewBox="0 0 27 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.03532e-05 5.59425L6.75178 11.1885L6.75178 6.71312L26.8525 6.71311L26.8525 4.47541L6.75178 4.47541L6.75178 8.78632e-07L8.03532e-05 5.59425Z" fill="#96B0B8"/>
              </svg>
            </button>
            
            <button
              onClick={() => setCurrentTestimonial(Math.min(testimonials.length - 1, currentTestimonial + 1))}
              className="w-16 h-16 bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              disabled={currentTestimonial === testimonials.length - 1}
            >
              <svg width="27" height="12" viewBox="0 0 27 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.8525 5.59422L20.1008 -4.36293e-05L20.1008 4.47536L8.00531e-08 4.47536L5.33687e-08 6.71307L20.1008 6.71307L20.1008 11.1885L26.8525 5.59422Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
