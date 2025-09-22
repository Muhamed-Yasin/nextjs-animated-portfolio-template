// components/About.tsx
"use client";
import { motion } from "framer-motion";
import Image from 'next/image';

export default function About() {
  const skills = [
    "C#", ".NET", "SQL Server", "Next.js", "React", "TypeScript", 
    "Tailwind CSS", "Git", "MongoDB", "Docker", "Node.js", "Python"
  ];

  const getSkillIcon = (skill: string) => {
    const skillIcons: { [key: string]: string } = {
      "C#": "🔷", ".NET": "⚡", "SQL Server": "🗃️", "Next.js": "▲",
      "React": "⚛️", "TypeScript": "📘", "Tailwind CSS": "🎨", "Git": "📋",
      "MongoDB": "🍃", "Docker": "🐳", "Node.js": "💚", "Python": "🐍"
    };
    return skillIcons[skill] || "💻";
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-indigo-100/20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="relative w-72 h-72 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src="/profile.jpg" 
                  alt="Muhamed Yasin" 
                  width={288}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <div className="prose prose-lg">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                My love for technology started early—playing FIFA on our old desktop with my brother, I&apos;d wonder: 
                <span className="italic">&quot;What if I could build something like this someday?&quot;</span> That curiosity led me to computer science, 
                and I&apos;ve been <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">hooked on coding</span> ever since.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                What excites me most is <span className="font-semibold text-gray-700">seeing ideas come to life</span> and 
                that incredible rush when you finally solve a tricky problem. 
                I&apos;m a &quot;jump right in&quot; developer who loves exploring everything from backend systems to AI research.
              </p>

              <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 mb-6">
                <p className="text-gray-700 text-sm">
                  <span className="text-xl mr-2">⚽</span>
                  When I&apos;m not coding, you&apos;ll find me watching football or movies of any genre.
                  <span className="text-xl ml-2">🎬</span>
                </p>
              </div>
            </div>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  className="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  viewport={{ once: false }}
                >
                  <div className="text-2xl mb-2">{getSkillIcon(skill)}</div>
                  <span className="text-sm font-semibold text-gray-800">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}