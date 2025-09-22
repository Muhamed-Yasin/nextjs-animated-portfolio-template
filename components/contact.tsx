'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaExclamationTriangle, FaTwitter, FaMedium } from 'react-icons/fa';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import emailjs from 'emailjs-com';
import { profile } from '../lib/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [lastSubmission, setLastSubmission] = useState<number>(0);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear validation errors when user starts typing
    if (validationErrors.length > 0) {
      setValidationErrors([]);
      setSubmitStatus('idle');
    }
  };

  // Enhanced validation function with specific error messages
  const validateForm = () => {
    const errors: string[] = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (formData.name.trim().length < 2) {
      errors.push('Name must be at least 2 characters long');
    }
    
    if (formData.email.trim().length === 0) {
      errors.push('Email is required');
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.push('Please enter a valid email address');
    }
    
    if (formData.message.trim().length < 10) {
      errors.push('Message must be at least 10 characters long');
    }
    
    if (errors.length > 0) {
      setValidationErrors(errors);
      setSubmitStatus('error');
      return false;
    }
    
    setValidationErrors([]);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      console.log('Form validation failed');
      return;
    }
    
    const now = Date.now();
    if (now - lastSubmission < 30000) {
      setValidationErrors(['Please wait 30 seconds between submissions']);
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setValidationErrors([]);
    
    try {
      console.log('Attempting to save to Firebase...');
      
      // Save to Firebase
      const docRef = await addDoc(collection(db, 'contact-submissions'), {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        message: formData.message.trim(),
        timestamp: serverTimestamp(),
        status: 'new'
      });
      
      console.log('Firebase save successful, document ID:', docRef.id);
      console.log('Attempting to send email via EmailJS...');

      // Send email notification via EmailJS
      const emailResult = await emailjs.send(
        'service_vc7wd1w', 
        'template_rvr9xyh',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString()
        },
        'WE02XNluOL5kW_Fl3'
      );
      
      console.log('EmailJS send successful:', emailResult);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setLastSubmission(now);
      
    } catch (error) {
      console.error('Detailed error:', error);
      setValidationErrors(['Something went wrong. Please try again or email me directly.']);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: FaPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
    { icon: FaMapMarkerAlt, label: 'Location', value: profile.location, href: '#' }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: profile.social.linkedin, label: 'LinkedIn' },
    { icon: FaGithub, href: profile.social.github, label: 'GitHub' },
    { icon: FaTwitter, href: profile.social.twitter, label: 'Twitter' },
    { icon: FaMedium, href: profile.social.medium, label: 'Medium' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
          >
            Let&apos;s Build Something Amazing
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Ready to turn your ideas into reality? I&apos;m here to help you create exceptional digital experiences.
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-8">Get in Touch</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                I&apos;m always excited about new opportunities and interesting projects. 
                Whether you have a question, a project idea, or just want to say hello, 
                I&apos;d love to hear from you!
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 text-gray-300 hover:text-white transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                      <item.icon className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                    >
                      <social.icon className="text-lg" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-200"
                >
                  ✅ Thank you! Your message has been sent successfully. I&apos;ll get back to you soon!
                </motion.div>
              )}
              
              {/* Validation Error Messages */}
              {validationErrors.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl"
                >
                  <div className="flex items-start space-x-3">
                    <FaExclamationTriangle className="text-red-400 text-lg mt-0.5 flex-shrink-0" />
                    <div className="space-y-1">
                      <p className="text-red-200 font-semibold">Please fix the following errors:</p>
                      <ul className="text-red-200 text-sm space-y-1">
                        {validationErrors.map((error, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <span className="w-1 h-1 bg-red-400 rounded-full flex-shrink-0"></span>
                            <span>{error}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="group"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="group"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="group"
                >
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <span>✅ Sent!</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-lg" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6">
              Let&apos;s discuss your ideas and create something extraordinary together.
            </p>
            <motion.a
              href="mailto:yasinmanath@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              <span>Let&apos;s Talk</span>
              <FaPaperPlane />
            </motion.a>
            </div>
        </motion.div>
      </div>
    </section>
  );
}