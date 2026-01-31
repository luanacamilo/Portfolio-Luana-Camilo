import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInLeft, staggerContainer } from '../../utils/animations'
import './About.css'

function About() {
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
              className="about-experience"
              variants={fadeInLeft}
            >
              <h3>Professional Experience</h3>
              <div className="experience-item">
                <h4>IT Intern — Full Stack Developer</h4>
                <p className="company">Duall Engenharia | Brazil</p>
                <p className="period">September 2025 – Present</p>
                <ul>
                  <li>Developing and maintaining web platforms using JavaScript, React, and PHP</li>
                  <li>Creating Python automation scripts to optimize internal processes</li>
                  <li>Integrating applications with relational databases and GraphQL</li>
                  <li>Providing technical support to ensure system stability and continuity</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
