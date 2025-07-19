import React from 'react';

// Replace with your own image paths or icons
const skills = [
  { name: 'React', icon: './image/skills/React-icon.png' },
  { name: 'Tailwind', icon: './image/skills/tailwind-css-icon.png' },
  { name: 'Javascript', icon: './image/skills/java-script.png' },
  { name: 'Node', icon: './image/skills/nodejs.png' },
  { name: 'Git', icon: './image/skills/git.png' },
  { name: 'Postgres', icon: './image/skills/Postgresql.png' },
  { name: 'Photoshop', icon: './image/skills/Adobe_Photoshop_CC_icon.svg.png' },
  { name: 'Illustrator', icon: './image/skills/Adobe_Illustrator_CC_icon.svg.png' },
  { name: 'Indesign', icon: './image/skills/Adobe_InDesign_CC_icon.svg.png' },
  { name: 'Html', icon: './image/skills/html.png' },
  { name: 'Next', icon: './image/skills/nextjs-icon.png' },
  { name: 'CSS', icon: './image/skills/css.png' },
];

const SkillMarquee = () => {
  return (
    <section className="bg-[#121212] py-12 overflow-hidden">
      <h2 className="text-3xl text-center text-[#E0E0E0] font-bold mb-8">Our Tech & Design Stack</h2>

      <div className="relative w-full">
        <div className="animate-marquee flex space-x-12 w-max">
          {skills.concat(skills).map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
              <p className="text-[#B0B0B0] mt-2 text-sm md:text-base">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillMarquee;
