'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../lib/portfolioData';

export default function Education() {
  const degrees = education.filter(edu => edu.type === 'degree');
  const certs = education.filter(edu => edu.type === 'certification');

  return (
    <section id="education" className="py-24 bg-background relative overflow-hidden border-t-2 border-foreground">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        
        <div className="mb-16 border-b-2 border-foreground pb-8 flex overflow-hidden">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }} // Hard, mechanical easing
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter"
          >
            Education
          </motion.h2>
        </div>

        {/* PRIMARY: FORMAL DEGREES */}
        <div className="mb-16">
          <h3 className="font-mono text-sm font-bold uppercase text-foreground/50 mb-6 border-b-2 border-foreground/20 pb-2">
            // Formal Education
          </h3>
          <div className="space-y-8">
            {degrees.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.4 }}
                className="group border-2 border-foreground p-8 md:p-12 bg-background hover:bg-foreground transition-colors duration-300 cursor-none"
              >
                <div className="flex flex-col md:flex-row items-start justify-between mb-8">
                  <div className="max-w-2xl">
                    <h3 className="text-3xl md:text-5xl font-black uppercase text-foreground group-hover:text-background tracking-tighter transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="font-mono text-xl text-accent group-hover:text-accent-inverted transition-colors duration-300 mt-4 font-bold uppercase">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="mt-6 md:mt-0 text-left md:text-right flex flex-col gap-2 shrink-0">
                    <span className="inline-block border-2 border-foreground group-hover:border-background group-hover:text-background px-4 py-2 font-mono text-sm uppercase font-bold transition-colors duration-300">
                      {edu.period}
                    </span>
                    <span className="font-mono text-sm uppercase font-bold text-foreground/70 group-hover:text-background/70">
                      {edu.grade}
                    </span>
                  </div>
                </div>

                <p className="font-mono text-lg text-foreground/80 group-hover:text-background/80 leading-relaxed mb-8 transition-colors duration-300">
                  {edu.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-mono font-bold text-foreground group-hover:text-background uppercase mb-4">
                      // Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-3 py-1 border border-foreground/30 group-hover:border-background/30 text-foreground group-hover:text-background text-xs font-mono uppercase font-bold transition-colors duration-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-mono font-bold text-foreground group-hover:text-background uppercase mb-4">
                      // Achievements
                    </h4>
                    <ul className="space-y-3">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start text-foreground/90 group-hover:text-background/90 font-mono text-sm"
                        >
                          <span className="mr-3 text-accent group-hover:text-accent-inverted transition-colors duration-300">{">"}</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECONDARY: CERTIFICATIONS (2-Column Grid) */}
        <div>
          <h3 className="font-mono text-sm font-bold uppercase text-foreground/50 mb-6 border-b-2 border-foreground/20 pb-2">
            // Certifications & Continuing Ed
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {certs.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.4 }}
                className="group border-2 border-foreground p-6 bg-background hover:bg-foreground transition-colors duration-300 cursor-none flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-black uppercase text-foreground group-hover:text-background transition-colors duration-300 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="font-mono text-sm text-accent group-hover:text-accent-inverted transition-colors duration-300 font-bold uppercase mb-6 border-b-2 border-foreground/10 group-hover:border-background/10 pb-4">
                    {edu.institution}
                  </p>
                  <p className="font-mono text-sm text-foreground/80 group-hover:text-background/80 leading-relaxed mb-6 transition-colors duration-300">
                    {edu.description}
                  </p>
                </div>
                
                <div className="flex justify-between items-end border-t-2 border-foreground/10 group-hover:border-background/10 pt-4">
                  <span className="font-mono text-xs uppercase font-bold text-foreground/70 group-hover:text-background/70">
                    {edu.grade}
                  </span>
                  <span className="inline-block border border-foreground group-hover:border-background group-hover:text-background px-3 py-1 font-mono text-xs uppercase font-bold transition-colors duration-300">
                    {edu.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}