import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import jaTranslation from './locales/ja/translation'
import koTranslation from './locales/ko/translation'

i18n.use(initReactI18next).init({
  resources: {
    ja: {
      translation: jaTranslation,
    },
    ko: {
      translation: koTranslation,
    },
  },
  lng: 'ja',
  fallbackLng: 'ja',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
