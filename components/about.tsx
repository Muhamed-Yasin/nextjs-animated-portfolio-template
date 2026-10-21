// components/about.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { aboutSection } from '../lib/portfolioData';

const Word = ({ children, progress, range }: { children: string, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.5em] mt-1">
      {children}
    </motion.span>
  );
};

export default function About() {
  const { paragraphs, highlight } = aboutSection;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });

  const allWords = paragraphs.flatMap(p => p.split(" "));
  let currentWordIndex = 0;

  return (
    <section id="about" className="scroll-mt-24 py-24 bg-background relative overflow-hidden border-t-2 border-foreground">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        
        <div className="mb-16 border-b-2 border-foreground pb-8 flex overflow-hidden">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }} 
            viewport={{ once: false, amount: 0.1 }}
            className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter"
          >
            About Me
          </motion.h2>
        </div>
        
        <div className="mb-12">
          <div ref={containerRef} className="mb-16">
            {paragraphs.map((text, idx) => {
              const words = text.split(" ");
              return (
                <p 
                  key={idx} 
                  className="text-foreground font-mono text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 max-w-4xl flex flex-wrap font-bold uppercase tracking-tight"
                >
                  {words.map((word, wIdx) => {
                    const start = currentWordIndex / allWords.length;
                    const end = start + (1 / allWords.length);
                    currentWordIndex++;
                    return (
                      <Word key={wIdx} progress={scrollYProgress} range={[start, end]}>
                        {word}
                      </Word>
                    );
                  })}
                </p>
              );
            })}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: false, amount: 0.1 }}
            className="inline-block p-6 border-l-8 border-accent bg-foreground text-background cursor-none"
          >
            <p className="flex items-center font-mono text-base md:text-lg font-bold uppercase">
              <span className="text-2xl mr-4">{highlight.iconLeft}</span>
              {highlight.text}
              <span className="text-2xl ml-4">{highlight.iconRight}</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}