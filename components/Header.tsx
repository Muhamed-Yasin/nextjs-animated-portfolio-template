// components/Header.tsx
"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white shadow border-b border-white/20">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#003E58] via-[#003E58] to-[#350766] bg-clip-text">
          Muhamed Yasin
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
              {item.label}
            </Link>
          ))}
          <Link href="#contact" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:shadow-lg transition-all duration-300 ml-4">
            Let&apos;s Talk
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-8 h-1 bg-gray-700 rounded mb-1"></span>
          <span className="block w-8 h-1 bg-gray-700 rounded mb-1"></span>
          <span className="block w-8 h-1 bg-gray-700 rounded"></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay with Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isMobileMenuOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
        className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center px-6"
      >
        {isMobileMenuOpen && (
          <>
            <button
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 bg-white text-gray-700 text-2xl shadow hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              &#10005;
            </button>
            <Link href="/" className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#003E58] via-[#003E58] to-[#350766] bg-clip-text mb-10">
              Muhamed Yasin
            </Link>
            <nav className="flex flex-col items-center gap-6 mb-10">
              {navItems.map(item => (
                <Link key={item.href} href={item.href} className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link href="#contact" className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:shadow-lg transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>
              Let&apos;s Talk
            </Link>
          </>
        )}
      </motion.div>
    </header>
  );
}