// app/page.tsx
"use client";
import { motion } from "framer-motion";
import { FaCheckCircle, FaLightbulb, FaBookOpen } from "react-icons/fa";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/project";
import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import CoreCompetencies from "@/components/corecompetencies";

export default function Home() {
  return (
    <>
      {/* STUNNING HERO SECTION */}
      <section className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden pt-20">
        {/* Floating background elements */}
        <div className="floating-elements"></div>
        
        {/* Main hero content */}
        <motion.div 
          className="text-center z-10 px-6 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Animated greeting
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/30">
              👋 Welcome to my portfolio
            </span>
          </motion.div> */}
          
          {/* Main heading with gradient text */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <motion.span 
              className="block text-white mb-2 text-shadow"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Hi, I&apos;m
            </motion.span>
            <motion.span 
              className="block gradient-text font-black"
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Muhamed Yasin
            </motion.span>
          </motion.h1>
          
          {/* Subtitle with typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white/90 mb-4 font-light">
              Full Stack Developer & Technology Explorer
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Passionate about exploring different technologies and frameworks. I love tinkering with code and building innovative solutions that create beautiful user experiences.
            </p>
          </motion.div>
          
          {/* Call-to-action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <motion.a 
              href="#projects" 
              className="group relative bg-white text-gray-900 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl glow-button overflow-hidden min-w-[200px]"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center">
                View My Projects
                <motion.span 
                  className="inline-block ml-2 text-xl"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🚀
                </motion.span>
              </span>
            </motion.a>
            
            <motion.a 
              href="#contact" 
              className="group glass-effect text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all duration-300 min-w-[200px] border border-white/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center">
                Let&apos;s Connect
                <motion.span 
                  className="inline-block ml-2"
                  whileHover={{ rotate: 15 }}
                >
                  💬
                </motion.span>
              </span>
            </motion.a>
          </motion.div>
          
          {/* My Principles Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-24" // Increased mb-24 for more spacing
          >
            {[
              {
                icon: <FaCheckCircle className="w-8 h-8 text-green-400" />,
                title: "Clean & Testable Code",
                description: "I believe in writing code that is not just functional, but also maintainable and well-tested for future scalability."
              },
              {
                icon: <FaLightbulb className="w-8 h-8 text-yellow-400" />,
                title: "Pragmatic Problem-Solving",
                description: "I enjoy tackling complex challenges and finding practical, effective solutions to real-world problems."
              },
              {
                icon: <FaBookOpen className="w-8 h-8 text-sky-400" />,
                title: "Continuous Learning",
                description: "I am passionate about learning new technologies and constantly improving my skills as a developer."
              }
            ].map((principle, index) => (
              <motion.div 
                key={principle.title}
                className="glass-effect rounded-2xl p-6 text-center" // Increased padding
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {principle.icon}
                </div>
                <div className="text-xl font-bold text-white mb-2">
                  {principle.title}
                </div>
                <div className="text-white/70 text-sm font-medium">
                  {principle.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Animated scroll indicator */}
        {/* <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div 
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <p className="text-white/70 text-xs mt-2 font-medium">Scroll Down</p>
        </motion.div> */}
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-40 right-32 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-pulse hidden lg:block"></div>
      </section>

      {/* REST OF THE SECTIONS */}

        <About />

        <CoreCompetencies />


        <Experience />

      
        <Education />
      
      {/* ENHANCED PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A showcase of my recent work, featuring full-stack applications and innovative solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
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
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-600 mb-6">Interested in seeing more of my work?</p>
            <motion.a
              href="https://github.com/Muhamed-Yasin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">Visit My GitHub</span>
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </section>
      
      <Contact />
    </>
  );
}