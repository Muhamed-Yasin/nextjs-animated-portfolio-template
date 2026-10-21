// components/experience.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../lib/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden border-t border-foreground/10">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        
        <div className="mb-16 border-b-2 border-foreground pb-8 flex overflow-hidden">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }} // Hard, mechanical easing
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter"
          >
            Experience
          </motion.h2>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.4 }}
              className="group border-2 border-foreground p-8 bg-background hover:bg-foreground transition-colors duration-300 cursor-none"
            >
              <div className="flex flex-col md:flex-row items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-black uppercase text-foreground group-hover:text-background transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-lg text-accent group-hover:text-accent-inverted transition-colors duration-300 mt-2 font-bold uppercase">
                    {exp.company}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <span className="inline-block border-2 border-foreground group-hover:border-background group-hover:text-background px-4 py-1 font-mono text-sm uppercase font-bold transition-colors duration-300">
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className="font-mono text-foreground/80 group-hover:text-background/80 leading-relaxed mb-6 transition-colors duration-300">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 border border-foreground/30 group-hover:border-background/30 text-foreground group-hover:text-background text-xs font-mono uppercase font-bold transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}