import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './en.json'
import sv from './sv.json'

const resources = {
  sv,
  en
}

export const availableLanguages = Object.keys(resources)

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources,
  defaultNS: 'common',
  fallbackLng: 'sv'
})
