import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll function
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#1A202C] text-white p-4 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand - Make it clickable */}
        <a 
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold hover:text-[#6366F1] transition-colors duration-300 cursor-pointer"
        >
          Personal Portfolio
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6">
          <li>
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="hover:text-[#6366F1] transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="hover:text-[#6366F1] transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              onClick={(e) => handleNavClick(e, 'skills')}
              className="hover:text-[#6366F1] transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer"
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, 'projects')}
              className="hover:text-[#6366F1] transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="hover:text-[#6366F1] transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#1A202C] shadow-xl transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <ul className="flex flex-col space-y-2 p-4">
          <li>
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="hover:text-[#6366F1] transition-colors duration-300 block px-4 py-3 rounded-lg hover:bg-white/10 cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="hover:text-[#6366F1] transition-colors duration-300 block px-4 py-3 rounded-lg hover:bg-white/10 cursor-pointer"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              onClick={(e) => handleNavClick(e, 'skills')}
              className="hover:text-[#6366F1] transition-colors duration-300 block px-4 py-3 rounded-lg hover:bg-white/10 cursor-pointer"
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, 'projects')}
              className="hover:text-[#6366F1] transition-colors duration-300 block px-4 py-3 rounded-lg hover:bg-white/10 cursor-pointer"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="hover:text-[#6366F1] transition-colors duration-300 block px-4 py-3 rounded-lg hover:bg-white/10 cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;