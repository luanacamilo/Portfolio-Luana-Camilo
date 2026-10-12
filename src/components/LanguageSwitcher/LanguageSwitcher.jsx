import React from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import './LanguageSwitcher.css'

export const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      className="language-switcher"
      onClick={toggleLanguage}
      aria-label="Toggle language"
      title={language === 'pt_BR' ? 'Switch to English' : 'Mudar para Português'}
    >
      <span className="language-text">{language === 'pt_BR' ? 'EN' : 'PT'}</span>
    </button>
  )
}
