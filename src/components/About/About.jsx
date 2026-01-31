import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInLeft, staggerContainer } from '../../utils/animations'
import './About.css'

function About() {
  const journey = [
    {
      title: 'IT Intern — Full Stack Developer',
      company: 'Duall Engenharia',
      location: 'Brazil',
      period: 'September 2025 – Present',
      description: [
        'Developing and maintaining web platforms using JavaScript, React, and PHP',
        'Creating Python automation scripts to optimize internal processes',
        'Integrating applications with relational databases and GraphQL',
        'Providing technical support to ensure system stability and continuity'
      ]
    },
    {
      title: 'Computer Science',
      company: 'FAM - Faculdade de Americana',
      location: 'Americana, SP - Brazil',
      period: 'Ongoing',
      description: [
        'Focused on Full Stack development and software engineering',
        'Building complete web applications with modern technologies',
        'Learning advanced algorithms and data structures',
        'Participating in coding competitions and hackathons'
      ]
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.div 
          className="about-content"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="about-text">
            <motion.p variants={fadeInUp}>
              I am a Computer Science undergraduate with a strong interest in Full Stack development. 
              I have practical experience working with both Front-End and Back-End technologies, 
              allowing me to build complete, integrated, and scalable web solutions.
            </motion.p>
            <motion.p variants={fadeInUp}>
              I am particularly focused on writing clean, maintainable code and continuously 
              improving my technical and problem-solving skills.
            </motion.p>
            
            <motion.div 
              className="journey-section"
              variants={fadeInUp}
            >
              <h3>My Journey</h3>
              <div className="journey-timeline">
                {journey.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="journey-item"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                  >
                    <div className="journey-marker"></div>
                    <div className="journey-content">
                      <h4>{item.title}</h4>
                      <p className="journey-company">{item.company} | {item.location}</p>
                      <p className="journey-period">{item.period}</p>
                      <ul className="journey-description">
                        {item.description.map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
