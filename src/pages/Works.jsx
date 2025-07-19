import React from 'react';

const webProjects = [
  {
    title: 'AI Chatbot for Students',
    desc: 'Built an education-specific chatbot for rural learners.',
    img: './image/img/laptop-1.jpg',
  },
  {
    title: 'Village Business Website',
    desc: 'E-commerce site for a rural organic farming group.',
    img: './image/img/laptop-2.jpg',
  },
  {
    title: '30+ Client Websites',
    desc: 'Developed full-stack websites for local and startup clients.',
    img: './image/img/robot-1.jpg',
  },
];

const graphicProjects = [
  {
    title: 'MPR Power Tech Logo',
    desc: 'Designed a bold brand identity for an engineering company.',
    img: './image/img/bg-1.jpg',
  },
  {
    title: 'EDGE Club Posters',
    desc: 'Created impactful posters for college events and outreach.',
    img: './image/img/bg-2.jpg',
  },
  {
    title: 'Packaging & Banner Designs',
    desc: '20+ packaging, social media, and banner designs delivered.',
    img: './image/img/bg-3.jpg',
  },
];

const ProjectCard = ({ title, desc, img }) => (
  <div className="bg-[#1E1E1E] border border-[#444444] rounded overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
    <img src={img} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-[#E0E0E0] mb-2">{title}</h3>
      <p className="text-[#B0B0B0] text-sm">{desc}</p>
    </div>
  </div>
);

const Works = () => {
  return (
    <div className="space-y-16 pt-12">
      {/* Header */}
      <section className="bg-[#1E1E1E] py-16 text-center px-4" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-[#E0E0E0] mb-4">Our Work</h2>
        <p className="text-[#B0B0B0] max-w-2xl mx-auto">
          From tech to design, here’s a glimpse of our impact across 50+ successful projects in both web and visual media.
        </p>
      </section>

      {/* Web Projects */}
      <section className="bg-[#121212] py-16 px-4" data-aos="fade-right">
        <div className="max-w-7xl mx-auto space-y-8">
          <h3 className="text-3xl text-[#E0E0E0] font-bold text-center">Web Development Projects</h3>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {webProjects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Design Projects */}
      <section className="bg-[#1E1E1E] py-16 px-4" data-aos="fade-left">
        <div className="max-w-7xl mx-auto space-y-8">
          <h3 className="text-3xl text-[#E0E0E0] font-bold text-center">Graphic Design Projects</h3>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {graphicProjects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
