import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a Computer Science undergraduate with a strong interest in Full Stack development. 
              I have practical experience working with both Front-End and Back-End technologies, 
              allowing me to build complete, integrated, and scalable web solutions.
            </p>
            <p>
              I am particularly focused on writing clean, maintainable code and continuously 
              improving my technical and problem-solving skills.
            </p>
            <div className="about-experience">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
