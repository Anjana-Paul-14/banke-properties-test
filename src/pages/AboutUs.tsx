import React from "react";
import { Header } from "@/components/Header";
import { AboutUsHeroSection } from "@/components/AboutUsHeroSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <AboutUsHeroSection />

        {/* The Banke International Properties Story */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-black text-3xl md:text-5xl font-bold leading-tight mb-8">
                  The Banke International Properties Story
                </h2>
                <div className="space-y-6 text-neutral-700 text-base md:text-lg leading-relaxed">
                  <p>
                    Banke is a full-service boutique real estate agency in Dubai with a bold vision and a client-first
                    philosophy. We believe that real estate is more than just transactions, it's about providing
                    insight, creating value, and guiding our clients toward smarter property investments.
                  </p>
                  <p>
                    Our strength lies in alignment: from our founders and directors to our consultants and support
                    teams, every member of Banke is committed to delivering innovative, intelligent, and personalized
                    solutions. We combine deep market knowledge with a warm, people-centric approach, ensuring that
                    every client feels supported at every step of their journey.
                  </p>
                  <p>
                    At Banke, we don't just open doors, we unlock opportunities. With us, you gain more than an agency;
                    you gain a trusted partner dedicated to helping you invest wisely and live meaningfully.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="border-4 rounded-none overflow-hidden">
                  <img
                    src="/images/banke-team.png"
                    alt="Banke Properties Team"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Banke Capital Difference */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-black text-3xl md:text-4xl font-semibold leading-tight mb-6">
                  The Banke Capital Difference
                </h2>
                <p className="text-neutral-600 text-base md:text-lg leading-relaxed mb-12">
                  At Banke Capital, we are redefining how real estate partnerships thrive, team up with the power of our
                  brokerage to drive innovation. People who are mission-minded, yet powerful, to create real value
                  systems where developers scale elegantly and brokers transform their portfolio consistently.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-black text-xl md:text-2xl font-semibold mb-4">For developers,</h3>
                    <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
                      we offer a refined pathway to connect all the legalities and all terms brokerage firms, ensuring
                      your projects receive unmatched visibility, reaching new channels and real interest. We'll
                      position your development for meaningful growth, tapping into the leverage to deliver results and
                      driving sales velocity.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-black text-xl md:text-2xl font-semibold mb-4">For brokers,</h3>
                    <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
                      we unlock effortless access to Banke's exclusive portfolio of properties. This means: the shared
                      demand, premium developments, where they need the wider market empowering you with a competitive
                      edge and raising the volume of your portfolio landscape.
                    </p>
                  </div>
                </div>

                <p className="text-neutral-600 text-base md:text-lg leading-relaxed mt-8">
                  At our core, Banke Capital is built on trust, exclusivity, and collaboration. By bridging the gap
                  between developers and brokerage firms, we shape a winning framework where everyone plays through for
                  the lifecycle of success. Investors and distributors reap the benefits.
                </p>

                <p className="text-neutral-600 text-base md:text-lg leading-relaxed mt-4">
                  With a reputation for excellence and a vision for innovation, Banke Capital is more than an
                  urban-maker, it's the future of real estate partnerships today.
                </p>
              </div>

              <div className="relative h-[600px] lg:h-full">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                  alt="Banke Capital Difference"
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-black text-3xl md:text-4xl font-semibold leading-tight mb-6">Our Philosophy</h2>
                <div className="space-y-4 text-neutral-600 text-base md:text-lg leading-relaxed">
                  <p>
                    At Banke Capital, we believe that real estate is not just about transactions, it's about building
                    ecosystems of trust, reciprocity, and long-term value. Our philosophy emphasizes sustainable growth.
                    We focus on deeper connections, where builders, brokers and clients work with privileged access to
                    opportunities they can't find them again.
                  </p>
                  <p>
                    We stand for exclusivity with integrity, ensuring that every project we handle is a highlight and
                    fully understand all professionals which takes dedication to deliver best in class service—this
                    allows real vision towards profitable and smart vision.
                  </p>
                  <p>
                    For us, success is not measured in numbers alone, but in the strength of relationships we nurture
                    and the market impact we deliver. At Banke Capital, our guiding principle is simple: exclusive
                    opportunities, limitless possibilities.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800"
                  alt="Our Philosophy"
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
