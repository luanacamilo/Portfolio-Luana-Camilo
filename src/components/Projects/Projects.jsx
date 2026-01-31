import React from 'react'
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
        <h2 className="section-title">My Projects</h2>
        <p className="projects-intro">
          A collection of projects that demonstrate different aspects of Full Stack development,
          including web applications, automation, and API integration.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              {project.link && (
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="github-link">
          <p>More projects available on my</p>
          <a href="https://github.com/luanacamilo" target="_blank" rel="noopener noreferrer">
            GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
