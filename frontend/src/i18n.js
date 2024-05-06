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

// Set initial lang attribute when the site is loaded
document.documentElement.lang = i18n.language;

// Add event listener to update lang attribute when language changes
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng; // Set lang attribute of html tag
});

export default i18n;
