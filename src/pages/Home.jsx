import React from 'react';
import Services from './Services';
import Contact from './Contact';
import Coaching from './Coaching';
import Portfolio from './Portfolio';
import SkillMarquee from './SkillMarquee';
import TextTransition, { presets } from 'react-text-transition';
import 'aos/dist/aos.css';
import AOS from 'aos';
import About from './About';

const TEXTS = [
  'Websites',
  'Branding',
  'Mockups',
  'AI Apps',
  'Logos',

];

const Home = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((i) => i + 1), 2500);
    AOS.init({ duration: 1200, once: true });
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative space-y-20 pt-12 bg-[#121212] text-white overflow-hidden">
      {/* Animated Background with Gradient and Transition */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-tr from-[#0f0f0f] via-[#1e1e1e] to-[#121212] animate-gradient bg-cover bg-no-repeat transition-all duration-1000 ease-in-out" style={{ maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1), rgba(0,0,0,0.2))' }}></div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="w-80 h-80 bg-[#00C8FF] opacity-20 rounded-full absolute -top-20 -left-20 blur-3xl animate-bounce" data-aos="zoom-in"></div>
          <div className="w-96 h-96 bg-[#FF4081] opacity-20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse" data-aos="fade-up"></div>
          <div className="w-72 h-72 bg-[#00E676] opacity-20 rounded-full absolute -bottom-16 -right-16 blur-3xl animate-spin-slow" data-aos="zoom-out"></div>
        </div>
      </div>

      {/* Hero Section with Text Transition */}
      <section className="py-24 px-4 flex items-center justify-center text-center min-h-screen" data-aos="fade-up">
        <div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold text-[#E0E0E0] mb-10 leading-tight">
            We Create Stunning
          </h1>
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold mb-10 leading-tight text-[#00C8FF] drop-shadow-md grid place-items-center ">
            <TextTransition springConfig={presets.gentle}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </div>
          <p className="text-[#B0B0B0] mt-6 max-w-4xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl">
            Specializing in websites, logos, mockups, AI-powered apps, and complete brand identity to elevate your digital presence. We also provide coaching in design and tech to empower rural talent.
          </p>
        </div>
      </section>

      {/* about section */} 
        <About/>


                {/* Services Section with Animated Background */}
        <div className="relative z-0">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="w-80 h-80 bg-[#FFC107] opacity-10 rounded-full absolute top-1/3 left-1/4 blur-3xl 
        animate-pulse" data-aos="fade-right"></div>
            <div className="w-96 h-96 bg-[#7C4DFF] opacity-10 rounded-full absolute top-2/3 right-1/3 blur-3xl 
        animate-pulse delay-500" data-aos="fade-left"></div>
            <div className="w-72 h-72 bg-[#18FFFF] opacity-10 rounded-full absolute bottom-10 left-1/2 
        transform -translate-x-1/2 blur-3xl animate-pulse delay-1000" data-aos="zoom-in"></div>
          </div>
          <Services/>
          </div>
          <SkillMarquee/>

  
          {/* Services Section with Animated Background */}
        <div className="relative z-0">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="w-80 h-80 bg-[#FFC107] opacity-10 rounded-full absolute top-1/3 left-1/4 blur-3xl animate-pulse" data-aos="fade-right"></div>
            <div className="w-96 h-96 bg-[#7C4DFF] opacity-10 rounded-full absolute top-2/3 right-1/3 blur-3xl  animate-pulse delay-500" data-aos="fade-left"></div>
            <div className="w-72 h-72 bg-[#18FFFF] opacity-10 rounded-full absolute bottom-10 left-1/2 
        transform -translate-x-1/2 blur-3xl animate-pulse delay-1000" data-aos="zoom-in"></div>
          </div>
          <Coaching />
          </div>
          <Contact />
         

      
    </div>
  );
};

export default Home;