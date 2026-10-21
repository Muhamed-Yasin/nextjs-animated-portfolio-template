// components/ProjectCard.tsx
"use client"; 
import { motion } from "framer-motion";
import { Project } from "@/project"; 

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div 
      whileHover={{ 
        x: -4, 
        y: -4, 
        boxShadow: "8px 8px 0px 0px var(--color-foreground)" 
      }} 
      className="border-2 border-foreground p-8 bg-background transition-all duration-200 h-full flex flex-col cursor-none"
    >
      <h3 className="text-2xl font-black uppercase text-foreground mb-4 tracking-tight">
        {project.title}
      </h3>
      
      <p className="text-foreground/80 font-mono text-sm leading-relaxed mb-8 flex-grow">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.technologies.map((tech) => (
          <span 
            key={tech} 
            className="inline-block border border-foreground/30 px-3 py-1 text-xs font-mono uppercase font-bold text-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block border-t-2 border-foreground pt-4 font-black uppercase text-foreground hover:text-accent transition-colors"
      >
        View Repository →
      </a>
    </motion.div>
  );
}