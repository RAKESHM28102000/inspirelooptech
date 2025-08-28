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
        {/* Features Section */}
  <section className="bg-[#1E1E1E] py-16" data-aos="fade-right">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
      {[
        {
          title: 'Website & App Creation',
          desc: 'Responsive, scalable websites and apps tailored to your business goals.',
          color: 'hover:shadow-[#00C8FF]'
        },
        {
          title: 'Brand Identity & Design',
          desc: 'From logos to full branding, we deliver strong visual impact.',
          color: 'hover:shadow-[#FF4081]'
        },
        {
          title: 'IT & Design Coaching',
          desc: 'We train rural students in web, design, and digital skills for the future.',
          color: 'hover:shadow-[#00E676]'
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className={`bg-[#121212] rounded p-6 border border-[#444444] transition-all duration-300 
transform hover:scale-105 ${item.color} hover:shadow-lg`}
        >
          <h3 className="text-xl font-semibold text-[#E0E0E0] mb-2">{item.title}</h3>
          <p className="text-[#B0B0B0]">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
  {/* About Section */}
  <section className="bg-[#121212] py-20 px-4 text-center" data-aos="fade-up">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#E0E0E0] mb-4">About Our Mission</h2>
      <p className="text-[#B0B0B0] text-lg leading-relaxed">
        Our startup focuses first on building powerful digital identities — through websites, design, and 
branding — and then extends its impact by educating and uplifting rural youth in tech and design.
      </p>
    </div>
  </section>
  {/* Impact Section */}
  <section className="bg-[#1E1E1E] py-16 px-4" data-aos="fade-up">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-[#E0E0E0] mb-8">Our Reach</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { number: '10+', label: 'Design Projects Completed' },
          { number: '3+', label: 'Websites Delivered' },
          { number: '1', label: 'Rural Hubs Launched' },
          { number: '6+', label: 'Students Trained' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-[#121212] rounded-lg p-6 border border-[#444444] hover:shadow-md hover:shadow-[#888] transition-all duration-300">
            <h3 className="text-3xl font-bold text-[#E0E0E0] mb-2">{stat.number}</h3>
            <p className="text-[#B0B0B0] text-sm uppercase tracking-wide">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  {/* Testimonials Section */}
  <section className="bg-[#121212] py-20 px-4" data-aos="fade-up">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-[#E0E0E0] mb-12">Client & Learner Feedback</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            name: 'Peter P.',
            message: 'Amazing branding work! My startup now looks premium and professional.',
          },
          {
            name: 'Prem kumar M.',
            message: 'I learned web design from their coaching program and now freelance full-time.',
          },
        ].map((testimonial, idx) => (
          <div key={idx} className="bg-[#1E1E1E] border border-[#444444] rounded p-6 shadow-md hover:shadow-[#aaa] transition duration-300">
            <p className="text-[#B0B0B0] mb-4 italic">"{testimonial.message}"</p>
            <h4 className="text-[#E0E0E0] font-semibold">- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
  {/* About Me Section */}
<section className="bg-[#1E1E1E] py-20 px-4" data-aos="fade-up">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    <div className="w-full">
      <img
        src="./image/rakesh.jpg" // Replace with your actual image path
        alt="Rakesh M"
        className="rounded-xl shadow-md w-full object-cover h-auto"
      />
    </div>
    <div>
      <h2 className="text-3xl font-bold text-[#E0E0E0] mb-4">About Me</h2>
      <p className="text-[#B0B0B0] text-lg leading-relaxed mb-4">
        I'm Rakesh M – Founder of Rakesh Inspireloop Tech
I’m an MBA student specializing in Human Resource Management and Marketing at the University of Madras, with a deep passion for combining design, technology, and human insight to create meaningful digital experiences.
My journey started with a Bachelor’s in Agricultural and Irrigation Engineering from Anna University, where I learned the value of structured thinking and technical problem-solving. But my creative instincts led me to explore the world of graphic design and web development, earning multiple certifications and working on real-time projects that allowed me to blend art with logic.           </p>
      <p className="text-[#B0B0B0] text-lg leading-relaxed mb-4">
        I’ve completed internships in HR, gained certifications in Graphic Design,Web Development, and launched <strong>Rakesh InspireLoop Tech</strong> — a startup focused on digital branding and design.
      </p>
      <p className="text-[#B0B0B0] text-lg leading-relaxed">
        To empower individuals, startups, and organizations with digital tools that are not only visually stunning but also smart, scalable, and results-driven.To empower individuals, startups, and organizations with digital tools that are not only visually stunning but also smart, scalable, and results-driven.
      </p>
    </div>
  </div>
</section>

    </div>
  );
};

export default About;
