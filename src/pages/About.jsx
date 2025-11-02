import React from 'react';
import CountUp from "react-countup"; 

const About = () => {
  return (
    <div className="space-y-20 pt-12">

      {/* Company Overview */}
      <section className="bg-[#1E1E1E] py-16 text-center px-4" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00C8FF] via-[#7C4DFF] to-[#FF4081] bg-clip-text text-transparent">
          Who We Are
        </h2>
        <p className="text-[#B0B0B0] max-w-3xl mx-auto leading-relaxed text-lg">
          At InspireLoop Technologies, we believe in creating real change by blending digital innovation with rural empowerment. We specialize in developing modern websites, impactful graphic designs, and coaching rural youth in IT, AI, and digital skills to prepare them for the future.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-stretch">

          {/* Vision */}
          <div
            className="bg-[#121212] border border-[#2a2a2a] rounded-2xl p-8 transform transition-transform duration-400 
             hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#00C8FF]/20"
            data-aos="fade-right"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00C8FF] to-[#7C4DFF] grid place-items-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L20 8v8l-8 6-8-6V8l8-6z" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-[#00C8FF] via-[#7C4DFF] to-[#FF4081] bg-clip-text text-transparent">
                  Our Vision
                </h3>
                <p className="text-[#B0B0B0] leading-relaxed">
                  To empower rural talents by bridging the gap between innovation and opportunity — enabling them to compete globally with confidence and skill.
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div
            className="bg-[#121212] border border-[#2a2a2a] rounded-2xl p-8 transform transition-transform duration-400 
              hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FF4081]/20"
            data-aos="fade-left"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#FF4081] to-[#FFC107] grid place-items-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3v18M3 12h18" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-[#FF4081] via-[#7C4DFF] to-[#00C8FF] bg-clip-text text-transparent">
                  Our Mission
                </h3>
                <p className="text-[#B0B0B0] leading-relaxed">
                  Build impactful digital solutions, deliver professional coaching in IT and design, and uplift communities by training the next generation of developers, designers, and data thinkers from underrepresented regions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Our Story */}
      <section className="bg-[#1E1E1E] py-16 px-4" data-aos="fade-up">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="w-full">
            <img src="./image/img/ai-1.jpg" alt="Our Story" className="rounded-xl shadow-md w-full object-cover h-auto" />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#00C8FF] via-[#7C4DFF] to-[#FF4081] bg-clip-text text-transparent">
              Our Story
            </h3>
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
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#FF4081] via-[#7C4DFF] to-[#00C8FF] bg-clip-text text-transparent">
              Why Choose Us
            </h3>
            <p className="text-[#B0B0B0] text-lg leading-relaxed">
              We’re more than a service provider. We are a partner in your digital journey. Whether you need a stunning website, engaging graphic content, or educational programs that bring results, InspireLoop delivers with heart and purpose.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src="./image/img/ai-2.jpg" alt="Why Choose Us" className="rounded-xl shadow-md w-full object-cover h-auto" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#1E1E1E] py-16" data-aos="fade-right">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: 'Website & App Creation', desc: 'Responsive, scalable websites and apps tailored to your business goals.' },
            { title: 'Brand Identity & Design', desc: 'From logos to full branding, we deliver strong visual impact.' },
            { title: 'IT & Design Coaching', desc: 'We train rural students in web, design, and digital skills for the future.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#121212] rounded p-6 border border-[#444444] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00C8FF]/30">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-[#00C8FF] via-[#7C4DFF] to-[#FF4081] bg-clip-text text-transparent">{item.title}</h3>
              <p className="text-[#B0B0B0]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Our Mission */}
      <section className="bg-[#121212] py-20 px-4 text-center" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#00C8FF] via-[#7C4DFF] to-[#FF4081] bg-clip-text text-transparent">
            About Our Mission
          </h2>
          <p className="text-[#B0B0B0] text-lg leading-relaxed">
            Our startup focuses first on building powerful digital identities — through websites, design, and branding — and then extends its impact by educating and uplifting rural youth in tech and design.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-[#1E1E1E] py-20 px-4" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 bg-gradient-to-r from-[#00C8FF] via-[#7C4DFF] to-[#FF4081] bg-clip-text text-transparent">
            Our Reach
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: 10, label: "Design Projects Completed", suffix: "+" },
              { number: 3, label: "Websites Delivered", suffix: "+" },
              { number: 1, label: "Rural Hubs Launched", suffix: "" },
              { number: 6, label: "Students Trained", suffix: "+" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-[#121212] border border-[#2A2A2A] rounded-2xl p-8 shadow-md hover:shadow-xl hover:shadow-[#00C8FF]/20 transition-all duration-500" data-aos="zoom-in">
                <h3 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-[#00C8FF] to-[#7C4DFF] bg-clip-text text-transparent">
                  <CountUp start={0} end={stat.number} duration={2.5} separator="," suffix={stat.suffix} enableScrollSpy scrollSpyOnce />
                </h3>
                <p className="text-[#B0B0B0] text-sm uppercase tracking-wide leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#121212] py-20 px-4" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-[#00C8FF] via-[#7C4DFF] to-[#FF4081] bg-clip-text text-transparent">
            Client & Learner Feedback
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Peter P.', message: 'Amazing branding work! My startup now looks premium and professional.' },
              { name: 'Prem kumar M.', message: 'I learned web design from their coaching program and now freelance full-time.' },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-[#1E1E1E] border border-[#444444] rounded p-6 shadow-md hover:shadow-[#aaa] transition duration-300">
                <p className="text-[#B0B0B0] mb-4 italic">"{testimonial.message}"</p>
                <h4 className="text-[#E0E0E0] font-semibold">- {testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="bg-[#1E1E1E] py-20 px-4" data-aos="fade-up">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="w-full">
            <img src="./image/rakesh.jpg" alt="Rakesh M" className="rounded-xl shadow-md w-full object-cover h-auto" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#00C8FF] via-[#7C4DFF] to-[#FF4081] bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-[#B0B0B0] text-lg leading-relaxed mb-4">
              I'm <strong>Rakesh M</strong> – Founder of Rakesh Inspireloop Tech. I’m an MBA student specializing in Human Resource Management and Marketing at the University of Madras, with a deep passion for combining design, technology, and human insight to create meaningful digital experiences.
            </p>
            <p className="text-[#B0B0B0] text-lg leading-relaxed mb-4">
              I’ve completed internships in HR, gained certifications in Graphic Design, Web Development, and launched <strong>Rakesh InspireLoop Tech</strong> — a startup focused on digital branding and design.
            </p>
            <p className="text-[#B0B0B0] text-lg leading-relaxed">
              My mission is to empower individuals, startups, and organizations with digital tools that are not only visually stunning but also smart, scalable, and results-driven.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
