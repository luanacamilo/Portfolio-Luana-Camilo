import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Create transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
  },
})

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email configuration error:', error)
  } else {
    console.log('✅ Server is ready to send emails')
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

app.post('/api/send-email', async (req, res) => {
  try {
    console.log(' Received email request:', req.body)
    const { firstName, lastName, email, subject, message } = req.body

    if (!firstName || !lastName || !email || !subject || !message) {
      console.log(' Validation failed - missing fields')
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      })
    }

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || 'luanacamilotec@gmail.com',
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
                border-radius: 8px;
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .content {
                background: white;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .info-row {
                margin: 15px 0;
                padding: 10px;
                background: #f5f5f5;
                border-left: 4px solid #667eea;
              }
              .label {
                font-weight: bold;
                color: #667eea;
                margin-bottom: 5px;
              }
              .message-box {
                margin-top: 20px;
                padding: 20px;
                background: #f8f9fa;
                border-radius: 8px;
                border: 1px solid #e0e0e0;
              }
              .footer {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #e0e0e0;
                text-align: center;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📬 New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="info-row">
                  <div class="label">From:</div>
                  <div>${firstName} ${lastName}</div>
                </div>
                
                <div class="info-row">
                  <div class="label">Email:</div>
                  <div><a href="mailto:${email}">${email}</a></div>
                </div>
                
                <div class="info-row">
                  <div class="label">Subject:</div>
                  <div>${subject}</div>
                </div>
                
                <div class="message-box">
                  <div class="label">Message:</div>
                  <div>${message.replace(/\n/g, '<br>')}</div>
                </div>
                
                <div class="footer">
                  <p>This message was sent from your portfolio contact form</p>
                  <p>You can reply directly to: ${email}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

From: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
You can reply directly to: ${email}
      `,
    }

    console.log(' Sending email...')
    await transporter.sendMail(mailOptions)

    console.log(` Email sent from: ${email}`)

    res.json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
    })
  } catch (error) {
    console.error(' Error sending email:', error)
    console.error('Error details:', error.message)
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    })
  }
})

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`)
})
