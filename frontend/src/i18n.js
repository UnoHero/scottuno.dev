import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locales/en.json'; // Import English translations
import noTranslations from './locales/no.json'; // Import Norwegian translations

i18n
  .use(LanguageDetector) // Enable language detection
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      no: {
        translation: noTranslations,
      },
    },
    fallbackLng: 'en', // Default language
    detection: {
      order: ['navigator', 'localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // Not needed for React as it escapes by default
    },
  });

export default i18n;
