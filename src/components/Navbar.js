// components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks, contactInfo } from '../data/seasanaData';

const Navbar = () => {
  // 1. State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu after a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-blue-800 text-white p-4 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo/Brand */}
        <Link to="/" className="text-3xl font-extrabold tracking-tight hover:scale-105 transition duration-300">
          SEASANA
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="space-x-6 text-lg font-medium hidden md:flex items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="hover:text-amber-400 transition transform hover:-translate-y-0.5"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={`mailto:${contactInfo.email}`} 
            className="bg-amber-500 text-blue-800 px-5 py-2 rounded-full font-bold hover:bg-amber-400 transition duration-300 transform hover:scale-105 shadow-md"
          >
            Contact Us
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {/* Hamburger or Close Icon */}
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              // Close X icon when menu is open
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger icon when menu is closed
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu Content (Collapsible) */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col space-y-3 pt-4 border-t border-blue-700">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={handleLinkClick} // Close menu on click
              className="px-2 py-2 text-white font-medium hover:bg-blue-700 rounded-lg transition duration-200 border-l-4 border-transparent hover:border-amber-500"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile Contact Button */}
          <a 
            href={`mailto:${contactInfo.email}`} 
            onClick={handleLinkClick} // Close menu on click
            className="mt-4 text-center bg-amber-500 text-blue-800 px-5 py-3 rounded-lg font-bold hover:bg-amber-400 transition duration-300 shadow-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;