"use client"
import React, { useState } from 'react';

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">MyLogo</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="/Therapy" className="hover:text-gray-400">Therapy</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
          <a href="https://pages.razorpay.com/bettertogether" target="_blank" className="hover:text-gray-400">Payment</a>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <a href="#home" className="block hover:text-gray-400 py-2">Home</a>
          <a href="#about" className="block hover:text-gray-400 py-2">About</a>
          <a href="/Therapy" className="hover:text-gray-400">Therapy</a>
          <a href="#services" className="block hover:text-gray-400 py-2">Services</a>
          <a href="#contact" className="block hover:text-gray-400 py-2">Contact</a>
          <a href="https://pages.razorpay.com/bettertogether" target="_blank" className="block hover:text-gray-400 py-2">Payment</a>
        </div>
      )}
    </header>
  );
};

export default HeaderSection;