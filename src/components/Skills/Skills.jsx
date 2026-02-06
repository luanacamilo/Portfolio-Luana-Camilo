import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../utils/animations'
import {
  SiJavascript, SiTypescript, SiReact, SiPython, SiNodedotjs,
  SiPhp, SiMysql, SiGraphql, SiGit, SiGithub, SiVite, SiNextdotjs, SiTailwindcss, SiDocker, SiMongodb
} from 'react-icons/si'
import './Skills.css'

function Skills() {
  const skillsData = [
    {
      category: 'Front-End',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
        { name: 'React', icon: SiReact, color: '#61dafb' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' }
      ]
    },
    {
      category: 'Back-End & Data',
      skills: [
        { name: 'Python', icon: SiPython, color: '#3776ab' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#68a063' },
        { name: 'PHP', icon: SiPhp, color: '#777bb4' },
        { name: 'SQL', icon: SiMysql, color: '#00758f' },
        { name: 'MongoDB', icon: SiMongodb, color: '#13aa52' },
        { name: 'GraphQL', icon: SiGraphql, color: '#e10098' }
      ]
    },
    {
      category: 'Tools & Practices',
      skills: [
        { name: 'Git', icon: SiGit, color: '#f1502f' },
        { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
        { name: 'Docker', icon: SiDocker, color: '#2496ed' },
        { name: 'Vite', icon: SiVite, color: '#646cff' }
      ]
    }
  ]

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

  const skillItemVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
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
          {skillsData.map((skillGroup, groupIndex) => (
            <motion.div 
              key={groupIndex}
              className="skill-category"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.15 }}
            >
              <h3>{skillGroup.category}</h3>
              <div className="skill-list">
                {skillGroup.skills.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <motion.div 
                      key={index}
                      className="skill-item"
                      variants={skillItemVariants}
                      whileHover={{ scale: 1.15, y: -5 }}
                      transition={{ duration: 0.2 }}
                      title={skill.name}
                    >
                      <div className="skill-icon-wrapper">
                        <IconComponent className="skill-icon" style={{ color: skill.color }} />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
