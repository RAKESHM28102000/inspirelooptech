import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/image/Rakeshlogo1.png'; // Replace with your logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Coaching', path: '/coaching' },
    { name: 'Works', path: '/works' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  // 🎨 Base link styles
  const baseLinkClass =
    'relative group px-1 transition duration-300 font-medium';

  // 🟢 Function to detect active route and apply gradient visibly
  const getLinkClass = (path) =>
    `${baseLinkClass} ${
      location.pathname === path
        ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] to-[#8B5CF6]'
        : 'text-[#E0E0E0] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00C8FF] hover:to-[#8B5CF6]'
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#121212]/95 backdrop-blur-md text-[#E0E0E0] border-b border-[#333] shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        
        {/* 🪄 Logo + Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-7 w-8" />
          <span className="hidden lg:inline-block text-2xl font-bold text-[#E0E0E0]">
            InspireLoop
          </span>
        </Link>

        {/* 💻 Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className={getLinkClass(link.path)}>
              {link.name}
              {/* Gradient underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#00C8FF] to-[#8B5CF6] transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'w-full'
                    : 'group-hover:w-full'
                }`}
              ></span>
            </Link>
          ))}

          {/* Login button */}
          <Link
            to="/login"
            className="text-sm px-4 py-1 bg-gradient-to-r from-[#8B5CF6] to-[#00C8FF] text-black rounded hover:opacity-90 transition"
          >
            Login
          </Link>
        </div>

        {/* 📱 Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-[#E0E0E0] hover:text-[#B0B0B0] transition"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1E1E1E] px-6 pb-4 flex flex-col space-y-3 transition-all duration-300 ease-out origin-top animate-open">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`py-1 ${
                location.pathname === link.path
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] to-[#8B5CF6]'
                  : 'text-[#E0E0E0] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00C8FF] hover:to-[#8B5CF6]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="text-sm px-4 py-2 bg-gradient-to-r from-[#8B5CF6] to-[#00C8FF] text-black rounded hover:opacity-90 transition"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
