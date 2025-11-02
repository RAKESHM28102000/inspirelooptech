// FloatingButtons.jsx
import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingButtons = () => {
  const phoneNumber = "916383627745";
  const whatsappMessage = encodeURIComponent("Hello Rakesh! I’m interested in your web development services.");

  return (
    <>
      {/* ✅ Custom animation styles directly in same page */}
      <style>{`
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @media (max-width: 640px) {
          .floating-buttons {
            bottom: 4%;
            left: 4%;
            gap: 0.75rem;
          }
        }
      `}</style>

      <div className="fixed bottom-5 left-5 flex flex-col gap-4 z-50 floating-buttons">
        {/* ✅ WhatsApp Direct Chat Button */}
        <a
          href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 flex items-center justify-center bg-green-500 text-white rounded-full 
                     shadow-lg hover:scale-110 transition-transform duration-300"
          style={{
            animation: "bounceSlow 2.5s infinite ease-in-out",
          }}
          title="Chat with Rakesh on WhatsApp"
        >
          <span
            className="absolute inset-0 rounded-full bg-green-400 blur-md"
            style={{
              opacity: "0.4",
              animation: "glowPulse 2.5s infinite ease-in-out",
            }}
          ></span>
          <FaWhatsapp className="text-3xl relative z-10" />
        </a>

        {/* ✅ Call Me Button */}
        <a
          href="tel:+916383627745"
          className="relative w-14 h-14 flex items-center justify-center bg-sky-500 text-white rounded-full 
                     shadow-lg hover:scale-110 transition-transform duration-300"
          style={{
            animation: "bounceSlow 2.5s infinite ease-in-out 0.6s",
          }}
          title="Call Rakesh"
        >
          <span
            className="absolute inset-0 rounded-full bg-sky-400 blur-md"
            style={{
              opacity: "0.4",
              animation: "glowPulse 2.5s infinite ease-in-out",
            }}
          ></span>
          <FaPhoneAlt className="text-2xl relative z-10" />
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;
