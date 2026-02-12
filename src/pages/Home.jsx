/* eslint-disable no-unused-vars */
// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom"; 
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import heroVideo from "../assets/website_video.mp4";
import GridScan from "../components/GridScan";

const TEXTS = ["Websites", "AI Apps", "Logos", "Branding", "Mockups"];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((i) => i + 1), 2000);
    AOS.init({ duration: 1000, once: true });
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="relative bg-[#0b0b0c] text-white font-['Lato','Roboto','Helvetica',sans-serif] overflow-hidden"
      style={{ scrollBehavior: "unset" }}
    >
  
      {/* ===== HERO SECTION ===== */}
      <section className="relative flex flex-col lg:flex-row items-center justify-center text-center lg:text-left min-h-screen px-6 md:px-16 py-20 gap-10 z-20">
         {/* <div className="absolute inset-0 w-full h-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden"> */}
           {/* <GridScan */}
            {/* //  sensitivity={0.55} */}
            {/* //  lineThickness={1} */}
            {/* //  linesColor="#392e4e" */}
            {/* //  gridScale={0.1} */}
            {/* //  scanColor="#FF9FFC" */}
            {/* //  scanOpacity={0.4} */}
            {/* //  enablePost */}
            {/* //  bloomIntensity={0.6} */}
            {/* //  chromaticAberration={0.002} */}
            {/* //  noiseIntensity={0.01} */}
          {/* //  /> */}
        {/* </div> */}
        {/* LEFT — TEXT */}
        <div
          className="space-y-8 max-w-2xl relative z-30 flex flex-col items-center lg:items-start"
          data-aos="fade-right"
        >
          <h1 className="text-[2.8rem] sm:text-[3.5rem] md:text-[rem] lg:text-[4.5rem] xl:text-[5rem] font-extrabold leading-[1.1] text-gray-100">
            Transforming{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8E2DE2] to-[#00BCD4]">
              Ideas
            </span>
            <br />
            Into Digital{" "}
          </h1>

          {/* MOVING MARQUEE WORD */}
          <div className="relative h-[90px] sm:h-[110px] overflow-hidden w-full">
            <div className="absolute whitespace-nowrap animate-fast-marquee flex items-center">
              {TEXTS.map((text, i) => (
                <span
                  key={i}
                  className="mx-8 text-[2.8rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-extrabold 
                  text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#8E2DE2] to-[#4A00E0]"
                >
                  {text}
                </span>
              ))}
              {TEXTS.map((text, i) => (
                <span
                  key={`dup-${i}`}
                  className="mx-8 text-[2.8rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-extrabold 
                  text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#8E2DE2] to-[#4A00E0]
                  drop-shadow-[0_0_25px_rgba(0,200,255,0.8)]"
                >
                  {text}
                </span>
              ))}
            </div>
          </div>

          <p className="text-gray-400 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-xl">
            We craft experiences that connect design, code, and innovation. From
            AI-powered apps to premium websites and brand identities — we make
            ideas come alive with technology and creativity.
          </p>

          <NavLink
            to="/portfolio"
            className="inline-block px-8 py-3 text-lg font-semibold rounded-full 
            bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] 
            hover:scale-105 hover:shadow-[0_0_20px_rgba(142,45,226,0.6)] 
            transition-all duration-300 shadow-lg"
          >
            Explore Our Work
          </NavLink>
        </div>

        {/* RIGHT — VIDEO */}
        <div
          className="relative w-full lg:w-1/2 flex justify-center items-center z-20"
          data-aos="fade-left"
        >
          <div className="relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="rounded-3xl shadow-2xl w-full ring-2 ring-purple-600 opacity-90 hover:opacity-100 transition-all duration-700 z-10"
            > 
              <source src={heroVideo} type="video/mp4" />
            </video>

            {/* Glow overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-tr from-[#8E2DE2]/25 to-[#00BCD4]/25 blur-2xl rounded-3xl -z-10"></div> */}
          </div>
        </div>

        {/* Animation CSS */}
        <style>{`
          @keyframes fastMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-fast-marquee {
            display: inline-flex;
            animation: fastMarquee 10s linear infinite;
          }
        `}</style>
      </section>

      {/* ===== SCROLLING SERVICES ===== */}
      <section
        className="relative py-24 overflow-hidden"
        data-aos="fade-up"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#8E2DE2] to-[#00C8FF]">
          Our Core Services
        </h2>

        <div className="relative max-w-6xl mx-auto overflow-hidden px-6">
          <div className="flex whitespace-nowrap animate-marquee">
            {[
              "Static Websites",
              "Dynamic Websites",
              "Full Stack Web Apps",
              "AI Integrations",
              "E-Commerce",
              "Mobile App UI/UX",
              "Brand Design",
              "Motion Graphics",
              "Poster & Logo Design",
            ]
              .concat([
                "Static Websites",
                "Dynamic Websites",
                "Full Stack Web Apps",
                "AI Integrations",
                "E-Commerce",
                "Mobile App UI/UX",
                "Brand Design",
                "Motion Graphics",
                "Poster & Logo Design",
              ])
              .map((service, i) => (
                <div
                  key={i}
                  className="mx-6 px-8 py-5 rounded-2xl bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2] text-white text-lg sm:text-xl md:text-2xl font-semibold shadow-lg border border-[#6a0dad]/30 min-w-[240px] text-center hover:scale-105 transition-transform duration-300"
                >
                  {service}
                </div>
              ))}
          </div>

          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#121212] to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#121212] to-transparent pointer-events-none"></div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-flex;
            width: max-content;
            animation: marquee 25s linear infinite;
          }
        `}</style>
      </section>

      {/* ABOUT */}
      <section className="relative py-24 px-6 md:px-12" data-aos="fade-up">
        <About />
      </section>

      {/* PORTFOLIO */}
      <section className="relative py-24 px-6 md:px-12" data-aos="fade-up">
        <Portfolio />
      </section>

      {/* SERVICES */}
      <section className="relative py-24 px-6 md:px-12" data-aos="fade-up">
        <Services />
      </section>

      {/* CONTACT */}
      <section className="relative py-24 px-6 md:px-12" data-aos="fade-up">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
