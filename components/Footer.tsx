'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaArrowUp, FaCode, FaCoffee, FaMedium } from 'react-icons/fa';
import { profile } from '../lib/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: FaLinkedin, href: profile.social.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: FaGithub, href: profile.social.github, label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: FaTwitter, href: profile.social.twitter, label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: FaMedium, href: profile.social.medium, label: 'Medium', color: 'hover:text-black' },
    { icon: FaEnvelope, href: `mailto:${profile.email}`, label: 'Email', color: 'hover:text-red-400' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pink-500 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <motion.h3 
                className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
              >
                {profile.name}
              </motion.h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                {profile.about}
              </p>
              
              {/* Fun Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <motion.div 
                  className="flex items-center space-x-2 text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCode className="text-purple-400" />
                  <span className="text-gray-400">5+ Years Coding</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-2 text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCoffee className="text-yellow-400" />
                  <span className="text-gray-400">∞ Cups of Coffee</span>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                    whileHover={{ rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-xl font-semibold mb-6 text-white">Get In Touch</h4>
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${profile.email}`}
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <FaEnvelope className="mr-3 text-purple-400 group-hover:text-purple-300" />
                  {profile.email}
                </motion.a>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Open to new opportunities and interesting projects. Let&apos;s create something amazing together!
                </p>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Let&apos;s Talk</span>
                  <FaArrowUp className="rotate-45" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.p 
                className="text-gray-400 text-sm mb-4 md:mb-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                &copy; {currentYear} {profile.name}. Made with{' '}
                <motion.span
                  className="inline-block mx-1"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  <FaHeart className="text-red-400 inline" />
                </motion.span>
                {' '}and lots of coffee ☕
              </motion.p>
              
              <motion.button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">Back to top</span>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <FaArrowUp className="text-xs" />
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
          style={{
            scaleX: typeof window !== 'undefined' ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) : 0
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </footer>
  );
}