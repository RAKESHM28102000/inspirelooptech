import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';

const websiteProjects = [
  { title: 'MPR POWER TECH', img:'./image/websites/mprpowertechnew.png', link:"https://mprpowertech.online/" },
  { title: 'Lunico kitchen', img:'./image/websites/catering app.png', link:"https://lunicokitchen.com/" },
  { title: 'Edge Club', img:'./image/websites/egdeclub.png', link: "https://edgeunom.online/" },
  { title: 'Synergy Club', img:'./image/websites/synergyclub (1).png', link:"http://synergyunom.onrender.com/"},
  { title: 'Electrical', img:'./image/websites/mpr2024.png', link:"https://mprpowertechofficial.netlify.app/" },
  { title: 'Social Media Site', img:'./image/websites/socialmedia.png', link: "https://reactapp2023.onrender.com/"},
   { title: 'Youtube', img:'./image/websites/youtube.png', link: "https://youtube-rakesh.onrender.com/" },
 { title: 'Event TANSPY', img:'./image/websites/tanspy.png', link:"https://tanpsycon2023.onrender.com"},
  { title: 'Portfolio', img:'./image/websites/mpr1.png', link: 'https://rakeshm.onrender.com' },
  { title: 'Nike Site', img:'./image/websites/nike.png', link:"https://rake-shoe-app.netlify.app/" },
  { title: 'Portfolio 2', img: './image/websites/nextapp.png', link:"https://rakeshm-web-developer.onrender.com/" },
  { title: 'Movies Website', img:'./image/websites/movies.png', link:"https://moviefinder-c9zg.onrender.com/" },
  { title: 'Top Brand', img: './image/websites/topbrand.png', link: "https://topbrand.onrender.com/" },
];

const designProjects = [
  
  { title: 'DESIGN', img: './image/graphic/portfolio-rakesh-m4.jpg',  link: 'https://www.behance.net/mrakeshmrakesh' },
  { title: 'DESIGN', img: './image/graphic/portfolio-rakesh-m5.jpg',  link: 'https://www.behance.net/mrakeshmrakesh' },
  { title: 'DESIGN', img: './image/graphic/portfolio-rakesh-m6.jpg',  link: 'https://www.behance.net/mrakeshmrakesh' },
  { title: 'DESIGN', img: './image/graphic/portfolio-rakesh-m7.jpg',  link: 'https://www.behance.net/mrakeshmrakesh' },
  { title: 'DESIGN', img: './image/graphic/portfolio-rakesh-m8.jpg',  link: 'https://www.behance.net/mrakeshmrakesh' },
  { title: 'DESIGN', img: './image/graphic/portfolio-rakesh-m9.jpg',  link: 'https://www.behance.net/mrakeshmrakesh' },
  { title: 'DESIGN', img: './image/graphic/portfolio-rakesh-m10.jpg', link: 'https://www.behance.net/mrakeshmrakesh' },
  { title: 'DESIGN', img: './image/graphic/portfolio-rakesh-m11.jpg', link: 'https://www.behance.net/mrakeshmrakesh' },
  { title: 'DESIGN', img: './image/graphic/portfolio-rakesh-m12.jpg', link: 'https://www.behance.net/mrakeshmrakesh' },
  { title: 'DESIGN', img: './image/graphic/portfolio-rakesh-m13.jpg', link: 'https://www.behance.net/mrakeshmrakesh' },
  { title: 'DESIGN', img: './image/graphic/portfolio-rakesh-m14.jpg', link: 'https://www.behance.net/mrakeshmrakesh' },
  { title: 'DESIGN', img: './image/graphic/portfolio-rakesh-m15.jpg', link: 'https://www.behance.net/mrakeshmrakesh' },
  { title: 'DESIGN', img: './image/graphic/portfolio-rakesh-m16.jpg', link: 'https://www.behance.net/mrakeshmrakesh' },
  { title: 'DESIGN', img: './image/graphic/portfolio-rakesh-m17.jpg', link: 'https://www.behance.net/mrakeshmrakesh' },
  { title: 'DESIGN', img: './image/graphic/portfolio-rakesh-m18.jpg', link: 'https://www.behance.net/mrakeshmrakesh' },
  { title: 'DESIGN', img: './image/graphic/portfolio-rakesh-m19.jpg', link: 'https://www.behance.net/mrakeshmrakesh' },
  { title: 'DESIGN', img: './image/graphic/portfolio-rakesh-m20.jpg', link: 'https://www.behance.net/mrakeshmrakesh' },
  { title: 'DESIGN', img: './image/graphic/portfolio-rakesh-m21.jpg', link: 'https://www.behance.net/mrakeshmrakesh' },
  { title: 'DESIGN', img: './image/graphic/portfolio-rakesh-m22.jpg', link: 'https://www.behance.net/mrakeshmrakesh' },

];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('website');
  const projects = activeTab === 'website' ? websiteProjects : designProjects;

  return (
    <div className="pt-16 space-y-12">
      {/* Header Section */}
      <section className="text-center py-12 px-4" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-[#E0E0E0]">Portfolio</h2>
        <div className="flex justify-center gap-6">
          <button
            className={`px-6 py-2 rounded bg-[#121212] border border-[#444444] hover:bg-[#888888] hover:text-black transition-all ${
              activeTab === 'website' ? 'text-[#E0E0E0]' : 'text-[#B0B0B0]'
            }`}
            onClick={() => setActiveTab('website')}
          >
            Websites
          </button>
          <button
            className={`px-6 py-2 rounded bg-[#121212] border border-[#444444] hover:bg-[#888888] hover:text-black transition-all ${
              activeTab === 'design' ? 'text-[#E0E0E0]' : 'text-[#B0B0B0]'
            }`}
            onClick={() => setActiveTab('design')}
          >
            Graphic Design
          </button>
        </div>
      </section>

      {/* Project Cards Section */}
      <section className=" py-12 px-4" data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl border border-[#444444] shadow-md bg-[#1E1E1E] transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#888888]"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00C8FF] via-[#7C4DFF] to-[#FF4081]  bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#888888] hover:bg-[#B0B0B0] p-3 rounded-full transition-all"
                >
                  <EyeIcon className="w-6 h-6" />
                </a>
              </div>

              {/* Project Title */}
              <h3 className="text-center text-lg font-semibold text-[#E0E0E0] py-4">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
