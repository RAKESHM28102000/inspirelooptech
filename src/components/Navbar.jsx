import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/image/Rakeshlogo3.png'; // Replace with your logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = ['Home', 'About', 'Services', 'Coaching', 'Works', 'Portfolio', 'Contact'];

  const getLinkClass = (page) =>
    `hover:text-[#B0B0B0] transition duration-200 ${
      location.pathname === `/${page.toLowerCase()}` ? 'text-[#888888]' : ''
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#121212] text-[#E0E0E0] border-b border-[#444444] shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-7 w-7 bg-white border-1 border-white shadow-sm shadow-amber-300" />
          <span className="hidden lg:inline-block text-2xl font-bold text-[#E0E0E0]">InspireLoop</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((page) => (
            <Link key={page} to={`/${page.toLowerCase()}`} className={getLinkClass(page)}>
              {page}
            </Link>
          ))}
          <Link
            to="/login"
            className="text-sm px-4 py-1 bg-[#888888] text-black rounded hover:bg-[#B0B0B0] transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-[#E0E0E0] hover:text-[#B0B0B0] transition"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1E1E1E] px-6 pb-4 flex flex-col space-y-3 transition-all duration-300 ease-out transform origin-top animate-open">
          {[...navLinks, 'Login', 'Signup'].map((page) => (
            <Link
              key={page}
              to={`/${page.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="hover:text-[#B0B0B0] text-[#E0E0E0] transition"
            >
              {page}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
