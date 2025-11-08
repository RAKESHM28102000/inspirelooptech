import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/image/Rakeshlogo1.png"; // replace with your logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Coaching", path: "/coaching" },
    { name: "Works", path: "/works" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  // 🧭 Hide Navbar on Scroll Down, Show on Scroll Up
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setScrollUp(currentScroll < lastScroll || currentScroll < 10);
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const baseLinkClass =
    "relative group px-1 transition duration-300 font-medium";

  const getLinkClass = (path) =>
    `${baseLinkClass} ${
      location.pathname === path
        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] to-[#8B5CF6]"
        : "text-[#E0E0E0] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00C8FF] hover:to-[#8B5CF6]"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        scrollUp ? "translate-y-0" : "-translate-y-full"
      } bg-gradient-to-r from-[#1a1a1a]/50 via-[#121212]/50 to-[#1a1a1a]/50 backdrop-blur-lg border-b border-[#333]/50 shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* 🪄 Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-9" />
          <span className="hidden lg:inline-block text-2xl font-bold text-[#E0E0E0]">
            InspireLoop
          </span>
        </Link>

        {/* 💻 Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className={getLinkClass(link.path)}>
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#00C8FF] to-[#8B5CF6] transition-all duration-300 ${
                  location.pathname === link.path ? "w-full" : "group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* 📱 Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-[#E0E0E0] hover:text-[#B0B0B0] transition-all"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      <div
        className={`md:hidden bg-[#121212]/90 backdrop-blur-lg overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-start px-6 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`py-1 text-lg ${
                location.pathname === link.path
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] to-[#8B5CF6]"
                  : "text-[#E0E0E0] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00C8FF] hover:to-[#8B5CF6]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
