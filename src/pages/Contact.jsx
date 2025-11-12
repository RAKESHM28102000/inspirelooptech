import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("Get in Touch");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Thank You for Your Message!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("Failed to Send. Try Again!");
      });
  };

  return (
    <div className="pt-20 px-4 bg-[#1E1E1E] min-h-screen flex items-center">
      <section className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-5 bg-[#121212] p-8 rounded-2xl shadow-lg w-full"
        >
          {/* Gradient Heading */}
          <h2
            className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-transparent bg-clip-text"
          >
            {status}
          </h2>

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-[#1E1E1E] border border-[#444444] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#888888]"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-[#1E1E1E] border border-[#444444] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#888888]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-lg bg-[#1E1E1E] border border-[#444444] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#888888]"
          ></textarea>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#888888] hover:bg-[#B0B0B0] text-black font-semibold rounded-lg transition-all duration-300"
          >
            Send
          </button>
        </form>

        {/* Google Map */}
        <div className="w-full h-80 md:h-full">
          <iframe
            title="Location"
            className="w-full h-full rounded-2xl border border-[#ffffff] shadow-[#8E2DE2] shadow-lg "
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d500.85849864615454!2d79.94218286214058!3d12.6610973732057!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1752931988924!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
