import Cookies from 'js-cookie';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import languageEn from './en/translation.json';
import languageVi from './vi/translation.json';

export const i18nInit = () => {
  const defaultLang = Cookies.get('lang');

  if (!defaultLang) {
    Cookies.set('lang', 'vi');
  }

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: languageEn,
        },
        vi: {
          translation: languageVi,
        },
      },
      lng: defaultLang === 'en' ? 'en' : 'vi',
      fallbackLng: 'vi',
      debug: false,
      keySeparator: '.',
      interpolation: {
        escapeValue: false,
      },
    });
};
