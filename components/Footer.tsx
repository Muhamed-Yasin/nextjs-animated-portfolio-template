// components/Footer.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 border-t-4 border-accent">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        <motion.div 
          className="text-4xl md:text-6xl font-black uppercase tracking-tighter cursor-none"
          whileHover={{ color: "var(--accent)" }}
        >
          YASIN.
        </motion.div>

        <div className="mt-8 md:mt-0 flex flex-col items-center md:items-end">
          <p className="font-mono text-sm uppercase font-bold text-background/70 mb-2">
            © {currentYear} ALL RIGHTS RESERVED
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-sm uppercase font-bold hover:text-accent transition-colors cursor-none underline underline-offset-4"
          >
            BACK TO TOP ↑
          </button>
        </div>
        
      </div>
    </footer>
  );
}