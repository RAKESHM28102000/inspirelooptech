import React from 'react';

const courses = [
  {
    title: 'Full Stack Web Development',
    price: '₹999',
    duration: '3 to 6 months',
    placement: false,
    syllabus: [
      'HTML, CSS, JavaScript, Git & GitHub',
      'React JS, Node JS, Express JS',
      'MongoDB, REST APIs',
      '10+ Project Building and Deployment',
    ],
  },
  {
    title: 'Graphic Design',
    price: '₹499',
    duration: '3 to 6 months',
    placement: false,
    syllabus: [
      'Adobe Photoshop, Illustrator, InDesign',
      'Canva',
      'Color Theory and Typography',
      'Design Thinking and Prototyping',
    ],
  },
  {
    title: 'MS Excel / Power BI / Data Analytics',
    price: '₹499',
    duration: '3 to 6 months',
    placement: false,
    syllabus: [
      'MS Excel Advanced Functions',
      'Power Query, DAX, Power BI Dashboards',
      'Data Cleaning and Visualization',
      'Case Studies and Reporting Projects',
    ],
  },
  {
    title: 'Aptitude & Soft Skills',
    price: '₹499',
    duration: '3 to 6 months',
    placement: false,
    syllabus: [
      'Quantitative Aptitude',
      'Logical Reasoning & Verbal Ability',
      'Group Discussion & Public Speaking',
      'Personality Development',
    ],
  },
  {
    title: 'Career Prep with Placement Support',
    price: '₹3,000',
    duration: '3 to 6 months',
    placement: true,
    syllabus: [
      'Resume & LinkedIn Building',
      'Mock Interviews & HR Rounds',
      'Placement Drives & Career Mentoring',
      'Live Internships & Portfolio Review',
    ],
  },
];

const Coaching = () => {
  return (
    <div className="space-y-16 pt-12">
      <section className="bg-[#121212] text-center py-16 px-4" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-[#E0E0E0] mb-4">Student Empowerment Program</h2>
        <p className="text-[#B0B0B0] max-w-3xl mx-auto">
          Empowering rural students with in-demand tech, design, and business skills through expert mentorship and real-world training.
        </p>
      </section>

      <section className="bg-[#1E1E1E] py-16 px-4" data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-[#121212] border border-[#333333] rounded-xl shadow-md p-6 hover:scale-[1.02] transition-all duration-300"
              data-aos="zoom-in"
            >
              <h3 className="text-2xl text-[#E0E0E0] font-semibold mb-2">{course.title}</h3>
              <p className="text-[#B0B0B0] mb-1 font-medium">Price: <span className="text-[#00C896] font-bold">{course.price}</span></p>
              <p className="text-[#B0B0B0] mb-3">Duration: {course.duration}</p>
              <ul className="list-disc list-inside space-y-1 text-[#B0B0B0] text-sm">
                {course.syllabus.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              {course.placement && (
                <p className="mt-4 text-[#FFD700] font-semibold">Includes Placement Assistance</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Coaching;