// components/CoreCompetencies.tsx
"use client";
import { motion } from 'framer-motion';
import { coreCompetencies } from '../lib/portfolioData';

export default function CoreCompetencies() {
  const competencies = coreCompetencies;

  // Group competencies by category
  const grouped = competencies.reduce((acc, item) => {
    acc[item.category] = [...(acc[item.category] || []), item];
    return acc;
  }, {} as Record<string, typeof competencies>);

  const categoryConfig = {
    "Core Strengths": { 
      subtitle: "My primary areas of expertise", 
      icon: "🚀",
      gradient: "from-[#EAD747] to-[#EEFF00]"
    },
    "Proficient": { 
      subtitle: "Strong working knowledge and experience", 
      icon: "⚡",
      gradient: "from-[#83FFB1] to-[#16FFB1]"
    },
    "Exploring": { 
      subtitle: "Actively learning and experimenting", 
      icon: "🌟",
      gradient: "from-[#FF9193] to-[#FF6262]"
    }
  };

  return (
  <section className="py-24 bg-gradient-to-br from-[#393093] via-[#271C8E] to-[#4A2C85] relative overflow-hidden">
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
                {items.map((item, index) => {
                  const BlockBar = () => (
                    <div className="flex gap-1 mt-4 mb-2">
                      {[1,2,3,4,5].map((n) => (
                        <div
                          key={n}
                          className={
                            `h-2 w-6 rounded-full transition-all duration-300 ` +
                            (n <= item.level ? 'bg-blue-400' : 'bg-gray-400')
                          }
                        />
                      ))}
                    </div>
                  );
                  const Icon = item.icon;
                  return (
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
                          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl mb-4 text-white shadow-lg"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          {Icon && <Icon className="w-8 h-8" />}
                        </motion.div>
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors">
                          {item.description}
                        </p>
                        {/* Level Block Bar */}
                        <BlockBar />
                        {/* Hover Effect Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}