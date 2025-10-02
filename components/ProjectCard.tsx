// components/ProjectCard.tsx
"use client"; 
import {motion} from "framer-motion";
import { Project } from "@/project"; // Import the type

// This defines what 'props' the component accepts
type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05, y: -8 }} className="border rounded-lg p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
  <h3 className="text-2xl font-bold mb-2 text-black">{project.title}</h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <div className="mb-4">
        {project.technologies.map((tech) => (
          <span key={tech} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tech}
          </span>
        ))}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:underline">
        View on GitHub &rarr;
      </a>
    </motion.div>
  );
}