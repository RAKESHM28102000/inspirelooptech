import React from 'react';
import { FaLinkedin, FaInstagram, FaBehance } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '/image/Rakeshlogo1.png'; // Replace with actual logo path

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-[#B0B0B0] pt-12 pb-6 mt-20 border-t border-[#444444]">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10 text-center md:text-left">
        
        {/* Logo & About */}
        <div>
          <Link to="/" className="flex items-center justify-center md:justify-start space-x-2 mb-3">
            <img src={logo} alt="Logo" className="h-7 w-7" />
            <span className="text-lg font-semibold text-[#E0E0E0]">InspireLoop</span>
          </Link>
          <p>
            Empowering rural talent through design, development, and education. 
            We build dreams with code, creativity, and coaching.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/rakesh-m-b67121217/" target="_blank" rel="noopener noreferrer" className="hover:text-[#888888] text-xl">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/r_coding_hub/" target="_blank" rel="noopener noreferrer" className="hover:text-[#888888] text-xl">
              <FaInstagram />
            </a>
            <a href="https://www.behance.net/mrakeshmrakesh" target="_blank" rel="noopener noreferrer" className="hover:text-[#888888] text-xl">
              <FaBehance />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#E0E0E0] font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-[#888888]">About Us</Link></li>
            <li><Link to="/services" className="hover:text-[#888888]">Our Services</Link></li>
            <li><Link to="/coaching" className="hover:text-[#888888]">Student Coaching</Link></li>
            <li><Link to="/portfolio" className="hover:text-[#888888]">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-[#888888]">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[#E0E0E0] font-semibold mb-3">Services & Courses</h4>
          <ul className="space-y-2">
            <li><Link to="/services/web" className="hover:text-[#888888]">Web & App Development</Link></li>
            <li><Link to="/services/design" className="hover:text-[#888888]">Graphic Design</Link></li>
            <li><Link to="/services/ai" className="hover:text-[#888888]">AI Integration</Link></li>
            <li><Link to="/courses/powerbi" className="hover:text-[#888888]">Power BI & Excel</Link></li>
            <li><Link to="/courses/aptitude" className="hover:text-[#888888]">Aptitude & Job Training</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-[#E0E0E0] font-semibold mb-3">Contact Info</h4>
          <p>Email: <a href="mailto:rakesh.m28.mba@gmail.com" className="hover:text-[#888888]">rakesh.m28.mba@gmail.com</a></p>
          <p>Phone: <a href="tel:+919876543210" className="hover:text-[#888888]">+91 6383627745</a></p>
          <p>Address: Maiyur Indra Nagar Street,<br />Chengalpattu, Tamil Nadu - 603111</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs mt-8 text-[#777] border-t border-[#333] pt-4">
        © 2025 Rakesh InspireLoop. Crafted with ❤️ in India.
      </div>
    </footer>
  );
};

export default Footer;
