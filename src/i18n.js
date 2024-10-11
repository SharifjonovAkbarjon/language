import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to our website",
      description: "Discover amazing products",
      shopNow: "Shop Now"
    }
  },
  uz: {
    translation: {
      welcome: "Bizning veb-saytimizga xush kelibsiz",
      description: "Ajoyib mahsulotlarni kashf eting",
      shopNow: "Hozir xarid qiling"
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'en', 
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
