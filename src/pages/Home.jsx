import React from 'react';
import Services from './Services';
import Contact from './Contact';
import Coaching from './Coaching';
import Portfolio from './Portfolio';
import SkillMarquee from './SkillMarquee';

const Home = () => {
  return (
    <div className="space-y-20 pt-12">

      {/* Hero Section */}
      <section className="bg-[#121212] py-20 text-center" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-[#E0E0E0] mb-4">
          Empowering Villages through Innovation
        </h1>
        <p className="text-[#B0B0B0] max-w-2xl mx-auto text-lg">
          We deliver cutting-edge design, web, AI, and educational services — while nurturing future talent from rural communities.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-[#1E1E1E] py-16" data-aos="fade-right">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: 'Web & App Development',
              desc: 'We build fast, scalable, and intelligent websites and apps tailored to your business or brand.',
              color: 'hover:shadow-[#4fc3f7]'
            },
            {
              title: 'Design & Branding',
              desc: 'From logos to motion graphics, we create visuals that define your identity and leave a lasting impression.',
              color: 'hover:shadow-[#f06292]'
            },
            {
              title: 'Rural Student Coaching',
              desc: 'We teach tech, business, design, and help place rural youth in top firms across India.',
              color: 'hover:shadow-[#81c784]'
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bg-[#121212] rounded p-6 border border-[#444444] transition-all duration-300 transform hover:scale-105 ${item.color} hover:shadow-lg`}
            >
              <h3 className="text-xl font-semibold text-[#E0E0E0] mb-2">{item.title}</h3>
              <p className="text-[#B0B0B0]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-[#121212] py-20 px-4 text-center" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#E0E0E0] mb-4">Who We Are</h2>
          <p className="text-[#B0B0B0] text-lg leading-relaxed">
            We are a purpose-driven startup combining technology, creativity, and education to uplift rural communities. 
            Our aim is to create opportunities for underrepresented talent and connect them with the future of work.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-[#1E1E1E] py-16 px-4" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#E0E0E0] mb-8">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '10+', label: 'Students Trained' },
              { number: '20+', label: 'Projects Delivered' },
              { number: '1', label: 'Village Hubs Activated' },
              { number: '90%', label: 'Job Placement Success' },
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
          <h2 className="text-3xl font-bold text-[#E0E0E0] mb-12">What People Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Prem Kumar M.',
                message: 'The design quality and professionalism are amazing! The team understood my vision clearly.',
              },
              {
                name: 'Peter P.',
                message: 'Thanks to their training program, I now work at a top IT firm. Grateful for their support.',
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
      <Services/>
      <SkillMarquee/>
      <Coaching/>
      <Portfolio/>
      <Contact/>

    </div>
  );
};

export default Home;
