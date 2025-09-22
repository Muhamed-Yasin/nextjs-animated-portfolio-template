'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendar, FaTrophy, FaCertificate, FaBook } from 'react-icons/fa';

import { education } from '../lib/portfolioData';

export default function Education() {
  const educations = education;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6 } 
    }
  };

  return (
    <section id="education" className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-600 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-600 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-600 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <FaGraduationCap className="text-4xl text-indigo-600 mr-3" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Education & Learning
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and continuous learning path that shaped my technical expertise
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={containerVariants}
          className="max-w-5xl mx-auto space-y-8"
        >
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <div className={`bg-white rounded-3xl shadow-xl p-8 border-l-4 ${
                edu.type === 'degree' ? 'border-indigo-600' : 'border-purple-600'
              } hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                
                {/* Card Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  {edu.type === 'degree' ? 
                    <FaUniversity className="w-full h-full text-indigo-600" /> :
                    <FaCertificate className="w-full h-full text-purple-600" />
                  }
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className={`w-3 h-3 rounded-full mr-3 ${
                          edu.type === 'degree' ? 'bg-indigo-600' : 'bg-purple-600'
                        }`}></div>
                        <span className={`text-sm font-semibold uppercase tracking-wider ${
                          edu.type === 'degree' ? 'text-indigo-600' : 'text-purple-600'
                        }`}>
                          {edu.type === 'degree' ? 'Degree Program' : 'Certification'}
                        </span>
                      </div>
                      
                      <motion.h3 
                        className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {edu.degree}
                      </motion.h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600">
                          <FaUniversity className="mr-3 text-indigo-600" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-500">
                            <FaCalendar className="mr-3 text-purple-600" />
                            <span>{edu.period}</span>
                          </div>
                          <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                            edu.type === 'degree' ? 'bg-indigo-100 text-indigo-800' : 'bg-purple-100 text-purple-800'
                          }`}>
                            <FaTrophy className="inline mr-2" />
                            {edu.grade}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ml-6 ${
                      edu.type === 'degree' ? 'bg-indigo-100' : 'bg-purple-100'
                    }`}>
                      {edu.type === 'degree' ? 
                        <FaGraduationCap className="text-2xl text-indigo-600" /> :
                        <FaCertificate className="text-2xl text-purple-600" />
                      }
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {edu.description}
                  </p>

                  {/* Coursework */}
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <FaBook className={`mr-2 ${
                        edu.type === 'degree' ? 'text-indigo-600' : 'text-purple-600'
                      }`} />
                      <h4 className="font-semibold text-gray-900">Key Coursework</h4>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <motion.span
                          key={courseIndex}
                          whileHover={{ scale: 1.05 }}
                          className={`px-3 py-2 rounded-lg text-sm font-medium text-center ${
                            edu.type === 'degree' ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' : 
                            'bg-purple-50 text-purple-700 border border-purple-200'
                          } hover:shadow-md transition-all duration-200`}
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <div className="flex items-center mb-3">
                      <FaTrophy className={`mr-2 ${
                        edu.type === 'degree' ? 'text-indigo-600' : 'text-purple-600'
                      }`} />
                      <h4 className="font-semibold text-gray-900">Key Achievements</h4>
                    </div>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: achIndex * 0.1 }}
                          className="flex items-start text-gray-700"
                        >
                          <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                            edu.type === 'degree' ? 'bg-indigo-600' : 'bg-purple-600'
                          }`}></div>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur-lg rounded-3xl p-8 border border-indigo-200 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
            <p className="text-gray-600 mb-6">
              Education is a journey, not a destination. I&apos;m always expanding my knowledge and staying updated with the latest technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium shadow-lg"
              >
                Currently Learning: Advanced React Patterns
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2 bg-white border border-indigo-200 text-indigo-600 rounded-full font-medium shadow-lg"
              >
                Next: Cloud Architecture
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}