// app/page.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/project";
import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import CoreCompetencies from "@/components/corecompetencies";
import Preloader from "@/components/Preloader"; // Import the preloader
import { heroSection } from "../lib/portfolioData";
import Marquee from "@/components/Marquee";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [heroReady, setHeroReady] = useState(false); // NEW STATE
  
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Preloader takes 0.8s to exit. We trigger the hero animations 
      // 400ms into the exit for a seamless overlap.
      setTimeout(() => setHeroReady(true), 400); 
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
{/* ASYMMETRICAL BRUTALIST HERO SECTION */}
      <section className="relative min-h-[100svh] w-full px-6 md:px-12 pt-24 pb-12 flex flex-col justify-between overflow-hidden bg-background">
        
        {/* Main Split Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full flex-grow relative z-10">
          
          {/* Left Side: Massive Typography */}
          <div className="flex flex-col w-full md:w-3/5 shrink-0 z-20 pt-10 md:pt-0">
            {/* First Name */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={heroReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
              className="flex text-[18vw] md:text-[11vw] font-black leading-[0.8] tracking-tighter text-foreground uppercase cursor-none"
            >
              {"MUHAMED".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  // REMOVED color from whileHover
                  whileHover={{ scaleX: 1.4, marginInline: "1vw" }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  // ADDED Tailwind hover and transition classes here
                  className="hover:text-accent transition-colors duration-200"
                  style={{ display: "inline-block", originX: 0.5 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Last Name */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={heroReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
              className="flex text-[18vw] md:text-[11vw] font-black leading-[0.8] tracking-tighter text-foreground uppercase cursor-none"
            >
              {"YASIN".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  // REMOVED color from whileHover
                  whileHover={{ scaleX: 1.4, marginInline: "1vw" }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  // ADDED Tailwind hover and transition classes here
                  className="hover:text-accent transition-colors duration-200"
                  style={{ display: "inline-block", originX: 0.5 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Halftone Portrait */}
          <motion.div 
            style={{ y }}
            initial={{ opacity: 0, x: 50 }}
            // CHANGED: Waits for heroReady
            whileInView={heroReady ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className="relative w-3/4 max-w-[280px] md:max-w-[340px] aspect-[4/5] mt-12 md:mt-0 self-end md:self-auto halftone-container border-2 border-foreground shrink-0"
          >
            <div className="halftone-overlay"></div>
            <Image 
              src="/profile.jpg" 
              alt="Muhamed Yasin" 
              fill 
              sizes="(max-width: 768px) 280px, 340px"
              priority
              className="object-cover halftone-image object-center"
            />
          </motion.div>
        </div>

        {/* Bottom Footer Area of Hero */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mt-20 md:mt-12 z-20 gap-8 md:gap-0">
          
          {/* 1-Line Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            // CHANGED: Waits for heroReady
            whileInView={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: false, amount: 0.1 }}
            className="max-w-md"
          >
            <p className="text-sm md:text-base font-mono uppercase tracking-widest text-foreground font-medium leading-relaxed">
              <span className="text-accent mr-2">{"//"}</span>
              {heroSection.subtitle}
            </p>
          </motion.div>

          {/* Custom Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            // CHANGED: Waits for heroReady
            whileInView={heroReady ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            className="flex items-center gap-4 self-start md:self-end"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">
              SCROLL, GENTLY
            </span>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-foreground/30">
              <div className="absolute top-[8px] left-[8px] w-2.5 h-2.5 rounded-full bg-accent"></div>
              <motion.span 
                whileInView={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="text-foreground text-xs mt-1"
              >
                ↓
              </motion.span>
            </div>
          </motion.div>
        </div>
      </section>

      <About />
      <CoreCompetencies />
      <Experience />
      <Education />

      {/* PROJECTS SECTION - Simplified for brutalism */}
      <section id="projects" className="py-24 bg-background relative overflow-hidden border-t border-foreground/10">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.4 }}
            className="mb-16 border-b-2 border-foreground pb-8"
          >
            <h2 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter">
              Featured Work
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.4 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: false, amount: 0.4 }}
            className="text-center mt-24"
          >
            <motion.a
              href="https://github.com/Muhamed-Yasin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-foreground text-foreground font-mono uppercase tracking-widest px-8 py-4 hover:bg-foreground hover:text-background transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="mr-4">Visit My GitHub</span>
              <motion.span
                whileInView={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </section>
      <Marquee text="AVAILABLE FOR FREELANCE // OPEN FOR OPPORTUNITIES // "/>
      <Contact />
    </>
  );
}