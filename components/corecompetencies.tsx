// components/corecompetencies.tsx
"use client";
import { motion } from 'framer-motion';
import { coreCompetencies } from '../lib/portfolioData';

export default function CoreCompetencies() {
  const competencies = coreCompetencies;

  const grouped = competencies.reduce((acc, item) => {
    acc[item.category] = [...(acc[item.category] || []), item];
    return acc;
  }, {} as Record<string, typeof competencies>);

  return (
    <section className="py-24 bg-background relative overflow-hidden border-t-2 border-foreground">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        <div className="mb-16 border-b-2 border-foreground pb-8 flex overflow-hidden">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }} // Hard, mechanical easing
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter"
          >
            Expertise
          </motion.h2>
        </div>
        
        {Object.entries(grouped).map(([category, items], categoryIndex) => (
          <motion.div 
            key={category} 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            {/* Category Header */}
            <div className="mb-8 border-l-8 border-accent pl-4">
              <h3 className="text-3xl font-black text-foreground uppercase tracking-tight">
                {category}
              </h3>
            </div>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, index) => {
                const Icon = item.icon;
                
                return (
                  <motion.div
                    key={item.title}
                    className="group relative border-2 border-foreground p-6 bg-background hover:bg-foreground hover:text-background transition-colors duration-300 cursor-none flex flex-col justify-between h-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: false, amount: 0.4 }}
                  >
                    <div>
                      <div className="mb-4 flex items-center justify-between border-b-2 border-foreground group-hover:border-background pb-4 transition-colors duration-300">
                        <h4 className="text-xl font-black uppercase tracking-tight group-hover:text-accent-inverted transition-colors duration-300">
                          {item.title}
                        </h4>
                        {Icon && <Icon className="w-8 h-8 text-foreground group-hover:text-accent-inverted transition-colors duration-300" />}
                      </div>
                      <p className="font-mono text-sm leading-relaxed mb-8 text-foreground/80 group-hover:text-background/80 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>

                    {/* Brutalist Level Indicators (Blocks) */}
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <div
                          key={n}
                          className={`h-4 w-full border-2 transition-colors duration-300 ${
                            n <= item.level 
                              ? 'bg-foreground border-foreground group-hover:bg-accent-inverted group-hover:border-accent-inverted' 
                              : 'bg-transparent border-foreground/30 group-hover:border-background/30'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}