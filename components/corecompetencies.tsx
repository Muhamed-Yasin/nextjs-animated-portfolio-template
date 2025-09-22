// components/CoreCompetencies.tsx
"use client";
import { motion } from 'framer-motion';
import { FaServer, FaCode, FaPaintBrush, FaDatabase, FaBrain, FaRocket, FaCog, FaLightbulb } from 'react-icons/fa';

export default function CoreCompetencies() {
  const competencies = [
    // --- CORE STRENGTHS ---
    {
      category: "Core Strengths",
      icon: <FaServer className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building robust, scalable REST APIs and services with C# and the .NET ecosystem.",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      level: 95
    },
    {
      category: "Core Strengths", 
      icon: <FaDatabase className="w-8 h-8" />,
      title: "Database Design",
      description: "Designing efficient SQL databases, and writing optimized queries and stored procedures.",
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50",
      level: 90
    },
    {
      category: "Proficient",
      icon: <FaCog className="w-8 h-8" />,
      title: "System Architecture",
      description: "Designing scalable, maintainable system architectures and microservices.",
      color: "from-gray-500 to-slate-600",
      bgColor: "bg-gray-50",
      level: 85
    },
    // --- PROFICIENT ---
    {
      category: "Proficient",
      icon: <FaCode className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Creating responsive and dynamic user interfaces with React, Next.js, and TypeScript.",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      level: 80
    },
    {
      category: "Proficient",
      icon: <FaRocket className="w-8 h-8" />,
      title: "DevOps & Deployment",
      description: "Docker containerization, CI/CD pipelines, and cloud deployment strategies.",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      level: 75
    },
    // --- FAMILIAR WITH ---
    {
      category: "Exploring",
      icon: <FaBrain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Exploring and implementing pre-trained models for practical applications.",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      level: 65
    },
    {
      category: "Exploring",
      icon: <FaPaintBrush className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "A strong appreciation for user-centric design and creating intuitive layouts.",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      level: 65
    },
    {
      category: "Exploring",
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Innovation & Research",
      description: "Staying current with emerging technologies and best practices.",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50",
      level: 80
    }
  ];

  // Group competencies by category
  const grouped = competencies.reduce((acc, item) => {
    acc[item.category] = [...(acc[item.category] || []), item];
    return acc;
  }, {} as Record<string, typeof competencies>);

  const categoryConfig = {
    "Core Strengths": { 
      subtitle: "My primary areas of expertise", 
      icon: "🚀",
      gradient: "from-blue-600 to-indigo-600"
    },
    "Proficient": { 
      subtitle: "Strong working knowledge and experience", 
      icon: "⚡",
      gradient: "from-green-600 to-emerald-600"
    },
    "Exploring": { 
      subtitle: "Actively learning and experimenting", 
      icon: "🌟",
      gradient: "from-purple-600 to-pink-600"
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
            Areas of Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </motion.div>
        
        {Object.entries(grouped).map(([category, items], categoryIndex) => {
          const config = categoryConfig[category as keyof typeof categoryConfig];
          
          return (
            <motion.div 
              key={category} 
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <motion.div 
                  className="inline-flex items-center gap-3 mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-3xl">{config.icon}</span>
                  <h3 className={`text-3xl font-bold bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}>
                    {category}
                  </h3>
                </motion.div>
                <p className="text-gray-400 text-lg">{config.subtitle}</p>
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    viewport={{ once: true }}
                  >
                    {/* Card */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 h-full shadow-xl border border-white/20 hover:border-white/40 transition-all duration-500 group-hover:shadow-2xl">
                      {/* Icon Container */}
                      <motion.div 
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl mb-4 text-white shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        {item.icon}
                      </motion.div>
                      
                      {/* Content */}
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                        {item.title}
                      </h4>
                      
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors">
                        {item.description}
                      </p>
                      
                      {/* Skill Level */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-400 font-medium">Proficiency</span>
                          <span className="text-xs text-white font-bold">{item.level}%</span>
                        </div>
                        
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            transition={{ duration: 1.5, delay: categoryIndex * 0.2 + index * 0.1 + 0.5 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                      
                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                    </div>
                    
                    {/* Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}