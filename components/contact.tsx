'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaExclamationTriangle, FaTwitter, FaMedium } from 'react-icons/fa';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../lib/firebase';
import emailjs from 'emailjs-com';
import { profile } from '../lib/portfolioData';

const SUBMISSION_TIMEOUT_MS = 10000;
const emailJsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
};
const isEmailJsConfigured = Object.values(emailJsConfig).every(Boolean);

function withTimeout<T>(promise: Promise<T>, operation: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error(`${operation} timed out after ${SUBMISSION_TIMEOUT_MS}ms`));
    }, SUBMISSION_TIMEOUT_MS);

    promise.then(
      value => {
        clearTimeout(timeoutId);
        resolve(value);
      },
      error => {
        clearTimeout(timeoutId);
        reject(error);
      }
    );
  });
}

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

    // Determine the final message (use placeholder if user left it blank)
    const defaultMessage = "Hi Yasin, I checked out your portfolio and would love to connect about a potential opportunity!";
    const finalMessage = formData.message.trim() === '' ? defaultMessage : formData.message.trim();

    if (finalMessage.length < 10) {
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

    const defaultMessage = "Hi Yasin, I checked out your portfolio and would love to connect about a potential opportunity!";
    const messageToSend = formData.message.trim() === '' ? defaultMessage : formData.message.trim();
    
    try {
      if (!isFirebaseConfigured && !isEmailJsConfigured) {
        throw new Error('Contact form integrations are not configured.');
      }

      const submissions: Promise<unknown>[] = [];

      if (isFirebaseConfigured) {
        submissions.push(
          withTimeout(
            addDoc(collection(db, 'contact-submissions'), {
              name: formData.name.trim(),
              email: formData.email.trim().toLowerCase(),
              message: messageToSend,
              timestamp: serverTimestamp(),
              status: 'new'
            }),
            'Firebase submission'
          )
        );
      }

      if (isEmailJsConfigured) {
        submissions.push(
          withTimeout(
            emailjs.send(
              emailJsConfig.serviceId!,
              emailJsConfig.templateId!,
              {
                name: formData.name,
                email: formData.email,
                message: messageToSend,
                time: new Date().toLocaleString()
              },
              emailJsConfig.publicKey!
            ),
            'Email notification'
          )
        );
      }

      const submissionResults = await Promise.allSettled(submissions);
      const failedResults = submissionResults.filter(result => result.status === 'rejected');

      for (const result of failedResults) {
        if (result.status === 'rejected') {
          console.error('Contact submission failed:', result.reason);
        }
      }

      if (failedResults.length === submissionResults.length) {
        throw new Error('The message could not be submitted through Firebase or EmailJS.');
      }

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
    <section id="contact" className="py-24 bg-background relative overflow-hidden border-t-2 border-foreground">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          className="mb-16 border-b-2 border-foreground pb-8"
        >
          <h2 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter">
            Let's Talk
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            className="flex flex-col justify-between pr-0 lg:pr-12"
          >
            <div>
              <p className="font-mono text-lg md:text-2xl leading-relaxed text-foreground mb-12">
                Ready to turn your ideas into reality? I'm currently open for new opportunities.
              </p>
              
              <div className="space-y-6 mb-16">
                <a href={`mailto:${profile.email}`} className="block text-2xl md:text-3xl font-black uppercase hover:text-accent transition-colors cursor-none">
                  {profile.email}
                </a>
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="block text-2xl md:text-3xl font-black uppercase hover:text-accent transition-colors cursor-none">
                  {profile.phone}
                </a>
              </div>
            </div>

            {/* Brutalist Socials Block */}
            <div>
              <h3 className="font-mono text-sm font-bold uppercase text-foreground/50 mb-6 border-b-2 border-foreground/20 pb-2">
                // On The Internet
              </h3>
              <div className="flex flex-col space-y-4">
                {Object.entries(profile.social).map(([platform, link]) => (
                  <a 
                    key={platform}
                    href={link as string} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="group flex items-center justify-between border-2 border-foreground p-4 hover:bg-foreground transition-colors duration-300 cursor-none"
                  >
                    <span className="font-black uppercase text-xl text-foreground group-hover:text-background transition-colors duration-300">
                      {platform}
                    </span>
                    <span className="font-mono text-foreground group-hover:text-accent transition-colors duration-300">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Brutalist Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-foreground py-4 font-mono text-xl text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors cursor-none rounded-none"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-foreground py-4 font-mono text-xl text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors cursor-none rounded-none"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="MESSAGE..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-2 border-foreground p-4 font-mono text-xl text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors cursor-none rounded-none resize-none mt-4"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full border-2 border-foreground bg-foreground text-background py-6 font-black text-2xl uppercase tracking-widest hover:bg-background hover:text-foreground transition-colors duration-300 disabled:opacity-50 cursor-none"
              >
                {isSubmitting ? "SENDING..." : submitStatus === 'success' ? "SENT" : "SEND MESSAGE"}
              </button>

              {validationErrors.length > 0 && (
                <div className="p-4 border-2 border-red-500 text-red-500 font-mono text-sm uppercase">
                  {validationErrors.map((err, i) => <p key={i}>* {err}</p>)}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}