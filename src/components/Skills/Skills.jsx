import React from 'react'
import './Skills.css'

function Skills() {
  const skills = {
    frontend: ['JavaScript', 'TypeScript', 'React'],
    backend: ['Python', 'Node.js', 'PHP', 'SQL', 'GraphQL', 'RESTful APIs'],
    tools: ['Git', 'GitHub', 'VS Code', 'Vite']
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Front-End</h3>
            <div className="skill-list">
              {skills.frontend.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Back-End & Data</h3>
            <div className="skill-list">
              {skills.backend.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Tools & Practices</h3>
            <div className="skill-list">
              {skills.tools.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
