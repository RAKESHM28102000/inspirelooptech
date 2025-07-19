import React from 'react';

const About = () => {
  return (
    <div className="space-y-20 pt-12">
      {/* Company Overview */}
      <section className="bg-[#1E1E1E] py-16 text-center px-4" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-[#E0E0E0] mb-4">Who We Are</h2>
        <p className="text-[#B0B0B0] max-w-3xl mx-auto leading-relaxed text-lg">
          At InspireLoop Technologies, we believe in creating real change by blending digital innovation with rural empowerment. We specialize in developing modern websites, impactful graphic designs, and coaching rural youth in IT, AI, and digital skills to prepare them for the future.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#121212] py-16 px-4" data-aos="fade-up">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h3 className="text-3xl text-[#E0E0E0] font-semibold">Our Vision</h3>
            <p className="text-[#B0B0B0] text-lg">
              To empower rural talents by bridging the gap between innovation and opportunity, enabling them to compete globally with confidence and skill.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl text-[#E0E0E0] font-semibold">Our Mission</h3>
            <p className="text-[#B0B0B0] text-lg">
              InspireLoop exists to build impactful digital solutions, offer professional coaching in IT and design, and uplift communities by training the next generation of developers, designers, and data thinkers from underrepresented regions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#1E1E1E] py-16 px-4" data-aos="fade-up">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="w-full">
            <img
              src="./image/img/ai-1.jpg"
              alt="Our Story"
              className="rounded-xl shadow-md w-full object-cover h-auto"
            />
          </div>
          <div>
            <h3 className="text-3xl text-[#E0E0E0] font-bold mb-4">Our Story</h3>
            <p className="text-[#B0B0B0] text-lg leading-relaxed">
              InspireLoop Technologies was born out of a vision to bring digital empowerment to every corner of India. With humble beginnings, we started training students in small towns, designing creative brand visuals, and building impactful websites. Today, we’re not just a company—we’re a movement to spark innovation and growth in places where it’s needed most.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#121212] py-16 px-4" data-aos="fade-up">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl text-[#E0E0E0] font-bold mb-4">Why Choose Us</h3>
            <p className="text-[#B0B0B0] text-lg leading-relaxed">
              We’re more than a service provider. We are a partner in your digital journey. Whether you need a stunning website, engaging graphic content, or educational programs that bring results, InspireLoop delivers with heart and purpose. We’re committed to social impact, professional excellence, and long-term growth.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="./image/img/ai-2.jpg"
              alt="Why Choose Us"
              className="rounded-xl shadow-md w-full object-cover h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
