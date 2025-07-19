import React from 'react';

const services = [
  {
    title: 'Web Development',
    desc: 'React, WordPress, E-Commerce, Custom Apps',
    content: [
      {
        subtitle: 'Responsive Design',
        text: 'We ensure your website looks great on all devices using modern responsive frameworks.',
      },
      {
        subtitle: 'Frontend & Backend',
        text: 'Using React, Tailwind, and backend stacks, we develop complete solutions that scale.',
      },
      {
        subtitle: 'SEO Optimization',
        text: 'We implement SEO strategies to ensure better ranking and visibility.',
      },
    ],
    image: './image/img/laptop-1.jpg',
  },
  {
    title: 'Graphic Design',
    desc: 'Posters, Logos, Branding, UI Design',
    content: [
      {
        subtitle: 'Brand Identity',
        text: 'We create logos, branding kits, and style guides that represent your business core.',
      },
      {
        subtitle: 'Marketing Collaterals',
        text: 'Designs for social media, brochures, posters that captivate and convert.',
      },
      {
        subtitle: 'UI/UX Wireframes',
        text: 'Prototypes and wireframes for web and app interfaces focused on usability.',
      },
    ],
    image: './image/img/element-1.jpg',
  },
  {
    title: 'Video Editing',
    desc: 'Corporate Videos, Reels, Product Demos',
    content: [
      {
        subtitle: 'Social Media Reels',
        text: 'Engaging reels for Instagram, YouTube Shorts, and Facebook stories.',
      },
      {
        subtitle: 'Corporate Presentations',
        text: 'Well-edited business explainers with subtitles, transitions, and branding.',
      },
      {
        subtitle: 'Product & Promo Videos',
        text: 'Highlight your services with cinematic cuts, animations, and music.',
      },
    ],
    image: './image/img/ai-1.jpg',
  },
  {
    title: 'AI App Development',
    desc: 'Chatbots, Smart Tools, Predictive Platforms',
    content: [
      {
        subtitle: 'AI Chatbots',
        text: 'Integrate intelligent bots that interact with users using NLP and ML.',
      },
      {
        subtitle: 'Smart Recommendation Systems',
        text: 'We build AI tools that learn user behavior and give real-time suggestions.',
      },
      {
        subtitle: 'Automation Tools',
        text: 'From data entry to customer support, we automate workflows with AI.',
      },
    ],
    image: './image/img/robot-3.jpg',
  },
];

const Services = () => {
  return (
    <div className="space-y-16 pt-12">
      {/* Section Header */}
      <section className="bg-[#121212] text-center py-16 px-4" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-[#E0E0E0] mb-4">Our Core Services</h2>
        <p className="text-[#B0B0B0] max-w-xl mx-auto">
          Explore our specialized digital services that help businesses scale with design, code, and innovation.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-[#1E1E1E] py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-10`}
              data-aos="fade-up"
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto rounded-xl border border-[#444444] shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 bg-[#121212] p-8 rounded-xl border border-[#444444] shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-3xl font-semibold text-[#E0E0E0] mb-3">{service.title}</h3>
                <p className="text-[#B0B0B0] italic mb-6">{service.desc}</p>
                <div className="space-y-4">
                  {service.content.map((sub, idx) => (
                    <div key={idx}>
                      <h4 className="text-xl text-[#E0E0E0] font-medium mb-1">{sub.subtitle}</h4>
                      <p className="text-[#B0B0B0]">{sub.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
