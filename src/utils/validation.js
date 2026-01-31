

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validateName = (name) => {
  return name.trim().length >= 2
}

export const validateSubject = (subject) => {
  return subject.trim().length >= 3
}

export const validateMessage = (message) => {
  const trimmed = message.trim()
  const words = trimmed.split(/\s+/).filter(word => word.length > 0)
  const hasMinWords = words.length >= 3
  const hasMinChars = trimmed.length >= 10
  const notRepetitive = !(/(.)\1{4,}/.test(trimmed)) 
  
  return hasMinWords && hasMinChars && notRepetitive
}

export const validateForm = (formData) => {
  const errors = {}

  if (!validateName(formData.firstName)) {
    errors.firstName = 'First name must be at least 2 characters'
  }

  if (!validateName(formData.lastName)) {
    errors.lastName = 'Last name must be at least 2 characters'
  }

  if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!validateSubject(formData.subject)) {
    errors.subject = 'Please select a subject'
  }

  if (!validateMessage(formData.message)) {
    errors.message = 'Message must have at least 3 words and 10 characters. Avoid repetitive text.'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}
