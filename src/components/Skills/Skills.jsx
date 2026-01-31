import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../utils/animations'
import './Skills.css'

function Skills() {
  const skills = {
    frontend: ['JavaScript', 'TypeScript', 'React'],
    backend: ['Python', 'Node.js', 'PHP', 'SQL', 'GraphQL', 'RESTful APIs'],
    tools: ['Git', 'GitHub', 'VS Code', 'Vite']
  }

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>
        <motion.div 
          className="skills-grid"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div 
            className="skill-category"
            variants={cardVariants}
            whileHover={{ y: -10, borderColor: "var(--accent)" }}
            transition={{ duration: 0.15 }}
          >
            <h3>Front-End</h3>
            <div className="skill-list">
              {skills.frontend.map((skill, index) => (
                <motion.span 
                  key={index} 
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "var(--accent)", 
                    color: "var(--bg-dark)",
                    borderColor: "var(--accent)"
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="skill-category"
            variants={cardVariants}
            whileHover={{ y: -10, borderColor: "var(--accent)" }}
            transition={{ duration: 0.15 }}
          >
            <h3>Back-End & Data</h3>
            <div className="skill-list">
              {skills.backend.map((skill, index) => (
                <motion.span 
                  key={index} 
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "var(--accent)", 
                    color: "var(--bg-dark)",
                    borderColor: "var(--accent)"
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="skill-category"
            variants={cardVariants}
            whileHover={{ y: -10, borderColor: "var(--accent)" }}
            transition={{ duration: 0.15 }}
          >
            <h3>Tools & Practices</h3>
            <div className="skill-list">
              {skills.tools.map((skill, index) => (
                <motion.span 
                  key={index} 
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "var(--accent)", 
                    color: "var(--bg-dark)",
                    borderColor: "var(--accent)"
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
