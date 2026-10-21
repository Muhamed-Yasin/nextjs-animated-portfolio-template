// components/Header.tsx
"use client";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const navItems = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' }
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  // Handle theme persistence and hydration
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setTheme('dark');
    }
  };

  return (
    <header className="fixed w-full z-50 bg-background border-b-2 border-foreground">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-black text-foreground uppercase tracking-tighter cursor-none">
          YASIN<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="font-mono text-sm uppercase font-bold text-foreground hover:text-accent transition-colors cursor-none"
            >
              {item.label}
            </Link>
          ))}
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="text-foreground hover:text-accent transition-colors cursor-none flex items-center justify-center p-2"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </button>

          <Link 
            href="#contact" 
            className="border-2 border-foreground bg-foreground text-background px-6 py-2 font-mono text-sm uppercase font-bold hover:bg-transparent hover:text-foreground transition-all duration-300 cursor-none"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="text-foreground hover:text-accent transition-colors cursor-none flex items-center justify-center p-2"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
          </button>
          <button
            className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none cursor-none z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-8 h-1 bg-foreground rounded mb-1 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-8 h-1 bg-foreground rounded mb-1 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-8 h-1 bg-foreground rounded transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[68px] bg-background border-t-2 border-foreground z-40 flex flex-col items-center justify-center px-6"
          >
            <nav className="flex flex-col items-center gap-8 mb-12 w-full">
              {navItems.map(item => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className="text-4xl font-black uppercase text-foreground hover:text-accent transition-colors w-full text-center border-b-2 border-foreground/10 pb-4" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link 
              href="#contact" 
              className="w-full text-center border-2 border-foreground bg-foreground text-background px-6 py-4 font-mono text-xl uppercase font-bold hover:bg-transparent hover:text-foreground transition-all duration-300" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start a Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}