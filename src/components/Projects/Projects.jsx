import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../utils/animations'
import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'Full Stack Web Platform',
      description: 'Development of a complete web platform using React, PHP, and GraphQL, with relational database integration.',
      technologies: ['React', 'JavaScript', 'PHP', 'GraphQL', 'SQL'],
      link: null
    },
    {
      title: 'Automation System',
      description: 'Python scripts for internal process automation, optimizing workflows and reducing task execution time.',
      technologies: ['Python', 'Automation', 'APIs'],
      link: null
    },
    {
      title: 'Modern React Interface',
      description: 'Development of modern and responsive interfaces with React, focusing on user experience and performance.',
      technologies: ['React', 'JavaScript', 'CSS3', 'Responsive Design'],
      link: null
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        <motion.p 
          className="projects-intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A collection of projects that demonstrate different aspects of Full Stack development,
          including web applications, automation, and API integration.
        </motion.p>
        <motion.div 
          className="projects-grid"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              variants={fadeInUp}
              whileHover={{ 
                y: -10, 
                borderColor: "var(--accent)",
                boxShadow: "0 15px 40px rgba(0, 255, 136, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <motion.span 
                      key={idx} 
                      className="tech-tag"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "var(--accent)",
                        color: "var(--bg-dark)"
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              {project.link && (
                <div className="project-links">
                  <motion.a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                    whileHover={{ x: 5, color: "var(--accent-hover)" }}
                  >
                    View Project →
                  </motion.a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="github-link"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>More projects available on my</p>
          <motion.a 
            href="https://github.com/luanacamilo" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ x: 5, scale: 1.05 }}
          >
            GitHub →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
