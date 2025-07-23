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

const Works = () => {
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
      {/* Pricing Section */}
<section className="bg-[#0F0F0F] py-20 px-4 text-center" id="pricing">
  <div className="max-w-6xl mx-auto" data-aos="fade-up">
    <h2 className="text-4xl font-bold text-[#E0E0E0] mb-6">Affordable Pricing</h2>
    <p className="text-[#B0B0B0] max-w-2xl mx-auto mb-12">
      Transparent and value-driven pricing tailored to your digital needs. Our services deliver ROI through quality, speed, and innovation.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: 'Web Development',
          price: '₹20,000 - ₹80,000',
          features: ['Responsive Website', 'Frontend + Backend', 'SEO Setup'],
        },
        {
          title: 'Graphic Design',
          price: '₹1,000 - ₹10,000',
          features: ['Logo Design', 'Brand Kit', 'Posters & Banners'],
        },
        {
          title: 'Video Editing',
          price: '₹2,000 - ₹15,000',
          features: ['Reels & Shorts', 'Promo Videos', 'Corporate Edits'],
        },
        {
          title: 'AI App Development',
          price: '₹30,000 - ₹1,50,000',
          features: ['Chatbot Integration', 'Automation Tools', 'Custom AI Models'],
        },
      ].map((plan, idx) => (
        <div
          key={idx}
          className="bg-[#1C1C1C] border border-[#333] p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-up"
          data-aos-delay={idx * 100}
        >
          <h3 className="text-2xl font-semibold text-[#E0E0E0] mb-2">{plan.title}</h3>
          <p className="text-xl text-[#00FFB3] font-bold mb-4">{plan.price}</p>
          <ul className="text-[#B0B0B0] space-y-2">
            {plan.features.map((f, i) => (
              <li key={i} className="flex items-center justify-center gap-2">
                <span className="text-[#00FFB3]">✔</span>
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

export default Works;
