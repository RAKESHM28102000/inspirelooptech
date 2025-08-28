import React from 'react';

const courses = [
  {
    title: 'Full Stack Web Development',
    price: '₹5,000',
    duration: '4 to 6 months',
    placement: true,
    syllabus: [
      'HTML, CSS, JavaScript, Git & GitHub',
      'React JS, Node JS, Express JS',
      'MongoDB, REST APIs',
      '10+ Projects & Deployment',
    ],
  },
  {
    title: 'Graphic Design',
    price: '₹1,000',
    duration: '3 to 4 months',
    placement: false,
    syllabus: [
      'Adobe Photoshop, Illustrator, InDesign',
      'Canva',
      'Color Theory & Typography',
      'Design Thinking & Prototyping',
    ],
  },
  {
    title: 'MS Excel (Beginner to Advanced)',
    price: '₹1,500',
    duration: '1 month',
    placement: false,
    syllabus: [
      'Excel Functions & Formulas',
      'Pivot Tables & Charts',
      'Data Cleaning & Analysis',
      'Practical Business Projects',
    ],
  },
  {
    title: 'Power BI',
    price: '₹2,500',
    duration: '1.5 months',
    placement: false,
    syllabus: [
      'Power Query & DAX',
      'Data Modeling',
      'Interactive Dashboards',
      'Business Case Studies',
    ],
  },
  {
    title: 'SQL for Data Analytics',
    price: '₹2,500',
    duration: '1.5 months',
    placement: false,
    syllabus: [
      'SQL Basics & Queries',
      'Joins, Views & Stored Procedures',
      'Data Extraction & Reporting',
      'Projects with Real Datasets',
    ],
  },
  {
    title: 'Data Analytics Mastery',
    price: '₹2,500',
    duration: '3 months',
    placement: false,
    syllabus: [
      'Excel + SQL + Power BI',
      'Data Cleaning & Transformation',
      'Visualization & Reporting',
      'End-to-End Analytics Projects',
    ],
  },
  {
    title: 'Aptitude & Soft Skills',
    price: '₹3,000',
    duration: '2 months',
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
    price: '₹5,000',
    duration: '2 to 3 months',
    placement: true,
    syllabus: [
      'Resume & LinkedIn Building',
      'Mock Interviews & HR Rounds',
      'Placement Drives & Mentoring',
      'Portfolio Review & Live Internships',
    ],
  },
];

const Coaching = () => {
  return (
    <div className="space-y-16 pt-12">
      {/* Header Section */}
      <section className="bg-[#121212] text-center py-16 px-4" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-[#E0E0E0] mb-4">Students Online Live Coaching</h2>
        <p className="text-[#B0B0B0] max-w-3xl mx-auto text-lg">
          Learn in-demand skills with our live online coaching programs designed to prepare you for jobs, freelancing, and entrepreneurship.
        </p>
      </section>

      {/* Courses Section */}
      <section className="bg-[#1E1E1E] py-16 px-4" data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-[#121212] border border-[#333333] rounded-xl shadow-md p-6 hover:scale-[1.02] transition-all duration-300"
              data-aos="zoom-in"
            >
              <h3 className="text-2xl text-[#E0E0E0] font-semibold mb-2">{course.title}</h3>
              <p className="text-[#B0B0B0] mb-1 font-medium">
                Price: <span className="text-[#00C896] font-bold">{course.price}</span>
              </p>
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

      {/* Motivational Quote */}
      <section className="bg-[#121212] py-12 px-4 text-center" data-aos="fade-up">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#B0B0B0] text-lg italic">
            “Learning comes first, money is secondary. Even if you don’t have money, you’re always welcome to join and learn.”
          </p>
        </div>
      </section>
    </div>
  );
};

export default Coaching;
