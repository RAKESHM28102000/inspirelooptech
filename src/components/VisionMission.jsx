import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa";

export default function VisionMission() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-stretch">
        {/* Vision */}
        <div
          className="bg-[#121212] border border-[#2a2a2a] rounded-2xl p-8 transform transition-transform duration-400 
          hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#00C8FF]/20"
          data-aos="fade-right"
        >
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00C8FF] to-[#7C4DFF] grid place-items-center shadow-lg">
              <FaEye className="text-white text-2xl" />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 
                bg-gradient-to-r from-[#00C8FF] via-[#7C4DFF] to-[#00C8FF] bg-clip-text text-transparent animate-glow">
                Our Vision
              </h3>
              <p className="text-[#B0B0B0] leading-relaxed">
                To empower rural talents by bridging the gap between innovation and opportunity — 
                enabling them to compete globally with confidence and skill.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[#0f0f0f] border border-[#2f2f2f] transition-colors hover:bg-[#001b27]">
              <h4 className="text-[#E0E0E0] font-medium">Inclusive Education</h4>
              <p className="text-[#B0B0B0] text-sm mt-1">
                Training for students from underrepresented regions.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#0f0f0f] border border-[#2f2f2f] transition-colors hover:bg-[#001b27]">
              <h4 className="text-[#E0E0E0] font-medium">Global Mindset</h4>
              <p className="text-[#B0B0B0] text-sm mt-1">
                Skills and standards to compete internationally.
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
            {/* Icon */}
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#FF4081] to-[#FFC107] grid place-items-center shadow-lg">
              <FaBullseye className="text-white text-2xl" />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 
                bg-gradient-to-r from-[#FF4081] via-[#FFC107] to-[#FF4081] bg-clip-text text-transparent animate-glow">
                Our Mission
              </h3>
              <p className="text-[#B0B0B0] leading-relaxed">
                Build impactful digital solutions, deliver professional coaching in IT and design, 
                and uplift communities by training the next generation of developers, designers, 
                and data thinkers from underrepresented regions.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[#0f0f0f] border border-[#2f2f2f] transition-colors hover:bg-[#3b0027]">
              <h4 className="text-[#E0E0E0] font-medium">Hands-on Learning</h4>
              <p className="text-[#B0B0B0] text-sm mt-1">
                Project-based coaching for real-world readiness.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#0f0f0f] border border-[#2f2f2f] transition-colors hover:bg-[#3b0027]">
              <h4 className="text-[#E0E0E0] font-medium">Social Impact</h4>
              <p className="text-[#B0B0B0] text-sm mt-1">
                Sustainable programs to create long-term change.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Local Glow Animation */}
      <style>{`
        @keyframes softGlow {
          0%, 100% { text-shadow: 0 0 8px rgba(0,200,255,0.5), 0 0 16px rgba(124,77,255,0.4); }
          50% { text-shadow: 0 0 14px rgba(0,200,255,0.8), 0 0 24px rgba(124,77,255,0.6); }
        }
        .animate-glow {
          animation: softGlow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
