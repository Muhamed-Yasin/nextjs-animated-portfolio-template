'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaBuilding, FaChevronDown } from 'react-icons/fa';

import { experience } from '../lib/portfolioData';

export default function Experience() {
  const experiences = experience;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.6
      } 
    }
  };

  return (
    <section id="experience" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-600 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-600 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-600 rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-18 h-18 bg-indigo-600 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <FaBriefcase className="text-4xl text-blue-600 mr-3" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Work Experience
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through various roles and the impact I&apos;ve made along the way
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 rounded-full"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-left'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`hidden md:block absolute top-8 w-6 h-6 bg-white border-4 border-blue-600 rounded-full shadow-lg ${
                  index % 2 === 0 ? 'right-0 transform translate-x-1/2' : 'left-0 transform -translate-x-1/2'
                }`}></div>
                
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`bg-white rounded-2xl shadow-xl p-8 border-l-4 ${
                    index === 0 ? 'border-blue-600' : index === 1 ? 'border-purple-600' : 'border-pink-600'
                  } hover:shadow-2xl transition-all duration-300 group`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <motion.h3 
                        className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {exp.role}
                      </motion.h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <FaBuilding className="mr-2 text-blue-600" />
                        <span className="font-medium">{exp.company}</span>
                        {exp.location && (
                          <>
                            <span className="mx-2 text-gray-400">•</span>
                            <span className="text-gray-500">{exp.location}</span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <FaCalendar className="mr-2 text-purple-600" />
                        <span>{exp.period}</span>
                        <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-purple-100' : 'bg-pink-100'
                    }`}>
                      <FaBriefcase className={`text-lg ${
                        index === 0 ? 'text-blue-600' : index === 1 ? 'text-purple-600' : 'text-pink-600'
                      }`} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ scale: 1.1 }}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            index === 0 ? 'bg-blue-100 text-blue-800' : 
                            index === 1 ? 'bg-purple-100 text-purple-800' : 
                            'bg-pink-100 text-pink-800'
                          }`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: achIndex * 0.1 }}
                          className="flex items-start text-gray-700"
                        >
                          <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                            index === 0 ? 'bg-blue-600' : index === 1 ? 'bg-purple-600' : 'bg-pink-600'
                          }`}></div>
                          <span className="text-sm">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Know More?</h3>
            <p className="text-gray-600 mb-6">
              I&apos;d love to discuss how my experience can contribute to your team&apos;s success.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              <span>Let&apos;s Connect</span>
              <FaChevronDown className="rotate-[-90deg]" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}