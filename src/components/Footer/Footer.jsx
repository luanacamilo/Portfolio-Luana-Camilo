import React from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>© {currentYear} Luana Camilo. All rights reserved.</p>
          <div className="footer-links">
            {[
              { href: 'https://github.com/luanacamilo', label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/luana-camilo-b1b5a117a/', label: 'LinkedIn' },
              { href: 'mailto:luanacamilotec@gmail.com', label: 'Email' }
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ color: 'var(--accent)', y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
