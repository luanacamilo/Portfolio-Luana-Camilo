import React from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>© {currentYear} Luana Alves Camilo. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/luanacamilo" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/luana-camilo-b1b5a117a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:luanacamilotec@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
