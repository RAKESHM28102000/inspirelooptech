// src/pages/Services.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SkillMarquee from "./SkillMarquee";

const Services = () => {
  const [firstVisit, setFirstVisit] = useState(false);
  const [showHeroAnimation, setShowHeroAnimation] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("servicesPageVisited");
    if (!hasVisited) {
      setFirstVisit(true);
      setShowHeroAnimation(true);
      AOS.init({ duration: 1200, once: true });
      localStorage.setItem("servicesPageVisited", "true");
      setTimeout(() => setShowHeroAnimation(false), 4000);
    } else {
      AOS.init({ duration: 1200, once: true });
    }
  }, []);

  // ===== Data Arrays =====
  const websiteTypes = [
    {
      title: "Static Website",
      desc: "Fast, SEO-friendly websites ideal for portfolios and small businesses.",
      price: "₹2,999 - ₹5,999",
      img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
    {
      title: "Dynamic Website",
      desc: "Interactive sites with CMS and database integration.",
      price: "₹6,999 - ₹9,999",
      img: "https://cdn-icons-png.flaticon.com/512/906/906343.png",
    },
    {
      title: "AI Integrated Website",
      desc: "AI-powered sites with chatbots and automation tools.",
      price: "₹15,999 - ₹29,999",
      img: "https://cdn-icons-png.flaticon.com/512/4712/4712108.png",
    },
  ];

  const graphicDesign = [
    {
      title: "Logo Design",
      desc: "Professional logos with brand identity guidelines.",
      price: "₹999 - ₹5,999",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920215.png",
    },
    {
      title: "Poster Design",
      desc: "Creative posters, social media banners, and print-ready designs.",
      price: "₹499 - ₹1,499",
      img: "https://cdn-icons-png.flaticon.com/512/4149/4149755.png",
    },
    {
      title: "Brand Kit",
      desc: "Logo, typography, color palette, and mockups.",
      price: "₹3,999 - ₹4,999",
      img: "https://cdn-icons-png.flaticon.com/512/9303/9303739.png",
    },
  ];

  const videoEditing = [
    {
      title: "Reels & Shorts",
      desc: "Fast-paced, trendy edits for social media.",
      price: "₹499 - ₹1,299 per reel",
      img: "https://cdn-icons-png.flaticon.com/512/4221/4221447.png",
    },
    {
      title: "Corporate Videos",
      desc: "Professional edits for events or product launches.",
      price: "₹3,999 - ₹6,999",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920122.png",
    },
    {
      title: "Promo Videos",
      desc: "Cinematic edits with music and effects.",
      price: "₹2,999 - ₹5,499",
      img: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
    },
  ];

  const mobileApps = [
    {
      title: "Basic App",
      desc: "Cross-platform app for startups.",
      price: "₹15,000 - ₹25,000",
      img: "https://cdn-icons-png.flaticon.com/512/4727/4727331.png",
    },
    {
      title: "E-Commerce App",
      desc: "App with cart, payments, and notifications.",
      price: "₹40,000 - ₹60,000",
      img: "https://cdn-icons-png.flaticon.com/512/4326/4326620.png",
    },
    {
      title: "AI Mobile App",
      desc: "Mobile apps with AI chatbots and analytics.",
      price: "₹50,000 - ₹80,000",
      img: "https://cdn-icons-png.flaticon.com/512/4712/4712069.png",
    },
  ];

  // ===== Reusable Service Grid =====
  const renderServiceGrid = (services, gradientClass, shadowColor) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {services.map((service, i) => (
        <div
          key={i}
          {...(firstVisit && {
            "data-aos": "fade-up",
            "data-aos-delay": i * 150,
          })}
          className={`group bg-[#121212] p-6 rounded-2xl border border-[#2a2a2a] text-center 
            hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_30px_${shadowColor}] 
            relative overflow-hidden`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-tr ${gradientClass} opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700`}
          ></div>
          <div className="relative z-10 mb-6 flex justify-center">
            <img
              src={service.img}
              alt={service.title}
              className="w-16 h-16 object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#00FFC3] via-[#5F0FFF] to-[#00FFC3] bg-clip-text text-transparent">
              {service.title}
            </h3>
            <p className="text-[#B0B0B0] mb-3 text-sm">{service.desc}</p>
            <p className="text-lg font-semibold text-[#00FFC3]">
              {service.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  // ===== Section Block =====
  const ServiceSection = ({
    title,
    image,
    services,
    gradient,
    shadow,
    reverse,
  }) => (
    <section
      className="py-20 px-6 flex justify-center bg-fixed bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(15,15,15,0.95), rgba(0,0,0,0.95))",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className={`w-full md:w-4/5 bg-[#0f0f0f] border border-[#1e1e1e] rounded-3xl shadow-[0_0_40px_rgba(95,15,255,0.2)] overflow-hidden 
        flex flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""} 
        items-center gap-10 p-8 md:p-14`}
        {...(firstVisit && { "data-aos": reverse ? "fade-left" : "fade-right" })}
      >
        {/* Image Side */}
        <div className="flex-1 flex justify-center items-center w-full lg:w-1/2 order-1 lg:order-none">
          <div className="relative w-full flex justify-center">
            <img
              src={image}
              alt={title}
              className="rounded-2xl w-72 md:w-[360px] hover:scale-105 transition-transform duration-700 ease-in-out shadow-[0_0_25px_rgba(0,255,195,0.4)]"
              {...(firstVisit && { "data-aos": "zoom-in" })}
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#00FFC3]/10 to-[#5F0FFF]/10 blur-3xl opacity-70 animate-pulse"></div>
          </div>
        </div>

        {/* Text & Cards */}
        <div className="flex-1 text-center lg:text-left w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#00FFC3] via-[#5F0FFF] to-[#00FFC3] bg-clip-text text-transparent">
            {title}
          </h2>
          {renderServiceGrid(services, gradient, shadow)}
        </div>
      </div>

      {/* Responsive Adjustments */}
      <style>{`
        @media (max-width: 1024px) {
          .flex-row, .lg\\:flex-row, .lg\\:flex-row-reverse {
            flex-direction: column !important;
          }
          .text-left {
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );

  return (
    <div className="bg-[#0A0A0A] text-white relative overflow-hidden scroll-smooth">
      {showHeroAnimation && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#5F0FFF]/20 via-[#00FFC3]/20 to-[#5F0FFF]/20 animate-pulse blur-3xl"></div>
      )}

      {/* Hero Section */}
      <section
        className={`min-h-[80vh] flex flex-col justify-center items-center text-center relative z-10 px-6 transition-all duration-1000 ${
          showHeroAnimation
            ? "scale-95 opacity-0 animate-fade-in"
            : "opacity-100 scale-100"
        }`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-[#00FFC3] via-[#5F0FFF] to-[#00FFC3] bg-clip-text text-transparent transition-transform duration-1000 animate-zoom-in">
          We Create&nbsp;
          <span className="text-[#00FFC3]">Digital Experiences</span>
        </h1>
        <p className="text-[#CCCCCC] max-w-2xl mb-8 text-lg md:text-2xl animate-fade-in">
          Transforming your ideas into intelligent, scalable, and stunning digital experiences.
        </p>
      </section>

      {/* Service Sections */}
      <ServiceSection
        title="Website Development"
        image="/image/img/laptop-2.jpg"
        services={websiteTypes}
        gradient="from-[#00FFC3]/10 via-[#5F0FFF]/10 to-[#00FFC3]/10"
        shadow="#00FFC3"
        reverse={false}
      />
      <ServiceSection
        title="Graphic Design"
        image="/image/img/element-2.jpg"
        services={graphicDesign}
        gradient="from-[#B388FF]/10 via-[#7C4DFF]/10 to-[#00C8FF]/10"
        shadow="#B388FF"
        reverse={true}
      />
      <ServiceSection
        title="Video Editing"
        image="/image/img/element-3.jpg"
        services={videoEditing}
        gradient="from-[#E040FB]/10 via-[#9C27B0]/10 to-[#7C4DFF]/10"
        shadow="#E040FB"
        reverse={false}
      />
      <ServiceSection
        title="Mobile App Development"
        image="/image/img/laptop-1.jpg"
        services={mobileApps}
        gradient="from-[#448AFF]/10 via-[#3D5AFE]/10 to-[#82B1FF]/10"
        shadow="#448AFF"
        reverse={true}
      />

      <SkillMarquee />
    </div>
  );
};

export default Services;
