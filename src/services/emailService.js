// Email Service using Nodemailer backend API
class EmailService {
  constructor() {
    // Backend API URL - change this for production
    this.apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'
  }

  async sendEmail(formData) {
    try {
      // Send request to backend API
      const response = await fetch(`${this.apiUrl}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        return {
          success: true,
          message: data.message || 'Message sent successfully! I will get back to you soon.'
        }
      } else {
        throw new Error(data.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Email sending error:', error)
      
      // Check if it's a network error
      if (error.message === 'Failed to fetch') {
        return {
          success: false,
          message: 'Unable to connect to server. Please make sure the backend is running.'
        }
      }
      
      return {
        success: false,
        message: error.message || 'Failed to send message. Please try again later.'
      }
    }
  }

  // Health check to verify backend is running
  async checkHealth() {
    try {
      const response = await fetch(`${this.apiUrl}/health`)
      const data = await response.json()
      return data.status === 'ok'
    } catch (error) {
      return false
    }
  }
}

export default new EmailService()
