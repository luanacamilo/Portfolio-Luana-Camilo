import React, { createContext, useState, useEffect } from 'react'
import translations from '../i18n/translations.json'

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Tenta pegar o idioma armazenado ou usa o do navegador
    const stored = localStorage.getItem('language')
    if (stored) return stored

    const browserLang = navigator.language.split('-')[0]
    return browserLang === 'pt' ? 'pt_BR' : 'en'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const t = (path) => {
    const keys = path.split('.')
    let value = translations[language]

    for (const key of keys) {
      value = value?.[key]
    }

    return value || path
  }

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'pt_BR' ? 'en' : 'pt_BR'))
  }

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
