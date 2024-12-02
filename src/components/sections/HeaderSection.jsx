"use client"
import React, { useState } from 'react';
import Link from 'next/link'

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" text-black">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link href={"/"}> <img src="logo.svg" className='h-10' alt="" /> </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/about" className="hover:text-gray-400 py-4">About Us</Link>
          <Link href="/services" className="hover:text-gray-400 py-4">Services</Link>
          <Link href="/services/events" className="hover:text-gray-400 py-4">Events</Link>
          <Link href="/blog" className="hover:text-gray-400 py-4">Blog</Link>
          <Link href="/contact" className="hover:text-gray-400 py-4">Contact Us</Link>
          <Link href="/join-community" target="_blank" className="hover:text-gray-400 "> <button className='p-4'>
            Join Community
          </button>
          </Link>
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
        <div className="md:hidden p-4">
          <Link href="/about" className="block hover:text-gray-400 py-2">About Us</Link>
          <Link href="/services" className="block hover:text-gray-400 py-2">Services</Link>
          <Link href="/services/events" className="block hover:text-gray-400 py-2">Events</Link>
          <Link href="/blog" className="block hover:text-gray-400 py-2">Blog</Link>
          <Link href="/contact" className="block hover:text-gray-400 py-2">Contact</Link>
          <Link href="/join-community" target="_blank" className=" bg-custom-red text-white rounded-lg p-1">Join Community</Link>
        </div>
      )}
    </header>
  );
};

export default HeaderSection;