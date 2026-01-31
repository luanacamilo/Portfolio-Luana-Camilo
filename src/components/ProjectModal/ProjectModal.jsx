import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ProjectModal.css'

function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div 
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="modal-content"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>×</button>
          
          {project.image && (
            <div className="modal-image">
              <img src={project.image} alt={project.title} />
            </div>
          )}
          
          <div className="modal-body">
            <h2>{project.title}</h2>
            <p className="modal-description">{project.fullDescription || project.description}</p>
            
            {project.features && (
              <div className="modal-features">
                <h3>Key Features:</h3>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="modal-technologies">
              <h3>Technologies:</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="modal-actions">
              {project.liveLink && (
                <motion.a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
              )}
              {project.githubLink && (
                <motion.a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Code
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectModal
