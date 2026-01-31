import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../utils/animations'
import ProjectModal from '../ProjectModal/ProjectModal'
import './Projects.css'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: 'Full Stack Web Platform',
      description: 'Development of a complete web platform using React, PHP, and GraphQL, with relational database integration.',
      fullDescription: 'A comprehensive full-stack web platform featuring modern frontend with React, robust backend with PHP, and efficient data handling with GraphQL. Includes user authentication, real-time updates, and seamless database operations with optimized queries and scalable architecture.',
      technologies: ['React', 'JavaScript', 'PHP', 'GraphQL', 'SQL', 'REST APIs'],
      features: [
        'User authentication and authorization system',
        'Real-time data synchronization',
        'Responsive and intuitive UI/UX design',
        'RESTful API integration',
        'Database optimization and query performance',
        'Scalable architecture for future growth'
      ],
      liveLink: null,
      githubLink: null,
      image: null
    },
    {
      title: 'Automation System',
      description: 'Python scripts for internal process automation, optimizing workflows and reducing task execution time.',
      fullDescription: 'Advanced automation system built with Python to streamline internal business processes. Includes scheduled tasks, automated report generation, data processing pipelines, and seamless integration with existing tools through APIs.',
      technologies: ['Python', 'Automation', 'APIs', 'Pandas', 'Task Scheduling'],
      features: [
        'Automated data processing and reporting',
        'Integration with multiple third-party APIs',
        'Scheduled task execution',
        'Error handling and logging system',
        'Performance monitoring and optimization',
        'Reduced manual work by 70%'
      ],
      liveLink: null,
      githubLink: null,
      image: null
    },
    {
      title: 'Modern React Interface',
      description: 'Development of modern and responsive interfaces with React, focusing on user experience and performance.',
      fullDescription: 'A cutting-edge React application with emphasis on user experience, performance optimization, and accessibility. Features smooth animations, lazy loading, code splitting, and responsive design that works seamlessly across all devices.',
      technologies: ['React', 'JavaScript', 'CSS3', 'Responsive Design', 'Framer Motion', 'Vite'],
      features: [
        'Smooth animations and transitions',
        'Optimized performance with code splitting',
        'Fully responsive across all devices',
        'Accessibility compliance (WCAG 2.1)',
        'SEO-friendly structure',
        'Modern design patterns and best practices'
      ],
      liveLink: null,
      githubLink: null,
      image: null
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
              onClick={() => setSelectedProject(project)}
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
              <div className="project-links">
                <motion.button 
                  className="project-link"
                  whileHover={{ x: 5, color: "var(--accent-hover)" }}
                >
                  View Details →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
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
