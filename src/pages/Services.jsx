import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-[#0F0F0F] text-white relative overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute w-80 h-80 bg-[#00FFC3]/20 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
        <div className="absolute w-60 h-60 bg-[#5F0FFF]/20 rounded-full blur-2xl animate-spin top-40 right-10"></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 z-10 relative text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          We Build Future-Ready&nbsp;
          <span className="text-[#00FFC3]">
            <Typewriter
              options={{
                strings: [
                  "Websites",
                  "AI Apps",
                  "Graphics",
                  "Posters",
                  "Logos",
                  "Reels",
                  "E-Commerce Sites",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <p className="text-lg md:text-xl text-[#CCCCCC] max-w-2xl mb-6">
          Elevating your business with smart, stunning, and scalable solutions.
        </p>
        <a
          href="#services"
          className="mt-4 px-6 py-3 bg-[#00FFC3] text-black rounded-full font-semibold hover:bg-[#00e6b8] transition"
        >
          View Our Services
        </a>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6" id="services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10" data-aos="fade-up">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Web Development",
                desc: "React, WordPress, E-Commerce, Custom Apps",
              },
              {
                title: "Graphic Design",
                desc: "Logos, Posters, Branding, Packaging",
              },
              {
                title: "Video Editing",
                desc: "Reels, Shorts, Promo Videos, YouTube",
              },
              {
                title: "AI App Development",
                desc: "Chatbots, Automation, Custom AI Tools",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-[#1C1C1C] p-8 rounded-xl border border-[#333] hover:shadow-xl transition"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <h3 className="text-2xl font-semibold mb-2 text-[#00FFC3]">
                  {service.title}
                </h3>
                <p className="text-[#B0B0B0]">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6" id="pricing">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#E0E0E0] mb-6" data-aos="fade-up">
            Affordable Pricing
          </h2>
          <p className="text-[#B0B0B0] max-w-2xl mx-auto mb-12" data-aos="fade-up">
            Transparent and value-driven pricing tailored to your digital needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Web Development",
                price: "₹2000 - ₹8000",
                features: ["Responsive", "Frontend + Backend", "SEO Setup"],
              },
              {
                title: "Graphic Design",
                price: "₹1000 - ₹5000",
                features: ["Logo", "Brand Kit", "Banners"],
              },
              {
                title: "Video Editing",
                price: "₹2,000 - ₹5,000",
                features: ["Reels", "Corporate Edits", "Promos"],
              },
              {
                title: "AI Apps",
                price: "₹30,000 - ₹50,000",
                features: ["Chatbot", "AI Tools", "Automation"],
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className="bg-[#1C1C1C] p-8 rounded-xl border border-[#333] hover:shadow-lg transition"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <h3 className="text-2xl font-semibold mb-2 text-[#E0E0E0]">
                  {plan.title}
                </h3>
                <p className="text-xl text-[#00FFC3] font-bold mb-4">{plan.price}</p>
                <ul className="text-[#B0B0B0] space-y-2">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex justify-center items-center gap-2">
                      <span className="text-[#00FFC3]">✔</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
