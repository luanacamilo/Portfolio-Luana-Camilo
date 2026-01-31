import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/animations'
import { validateForm } from '../../utils/validation'
import emailService from '../../services/emailService'
import './ContactForm.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const subjectOptions = [
    { value: '', label: 'Select a subject' },
    { value: 'project', label: 'Project Inquiry' },
    { value: 'job', label: 'Job Opportunity' },
    { value: 'collaboration', label: 'Collaboration' },
    { value: 'question', label: 'General Question' },
    { value: 'other', label: 'Other' }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validation = validateForm(formData)
    
    if (!validation.isValid) {
      setErrors(validation.errors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await emailService.sendEmail(formData)
      
      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message })
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        })
        setErrors({})
      } else {
        setSubmitStatus({ type: 'error', message: result.message })
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'An unexpected error occurred. Please try again.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form 
      className="contact-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">
            First Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={errors.firstName ? 'error' : ''}
            placeholder="John"
            disabled={isSubmitting}
          />
          {errors.firstName && (
            <span className="error-message">{errors.firstName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">
            Last Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={errors.lastName ? 'error' : ''}
            placeholder="Doe"
            disabled={isSubmitting}
          />
          {errors.lastName && (
            <span className="error-message">{errors.lastName}</span>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">
          Email <span className="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
          placeholder="john.doe@example.com"
          disabled={isSubmitting}
        />
        {errors.email && (
          <span className="error-message">{errors.email}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="subject">
          Subject <span className="required">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={errors.subject ? 'error' : ''}
          disabled={isSubmitting}
        >
          {subjectOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.subject && (
          <span className="error-message">{errors.subject}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="message">
          Message <span className="required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? 'error' : ''}
          placeholder="Tell me about your project or how I can help"
          rows="6"
          disabled={isSubmitting}
        />
        {errors.message && (
          <span className="error-message">{errors.message}</span>
        )}
        
      </div>

      {submitStatus && (
        <motion.div 
          className={`submit-status ${submitStatus.type}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {submitStatus.message}
        </motion.div>
      )}

      <motion.button
        type="submit"
        className="submit-button"
        disabled={isSubmitting}
        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
      >
        {isSubmitting ? (
          <>
            <span className="spinner"></span>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </motion.button>
    </motion.form>
  )
}

export default ContactForm
