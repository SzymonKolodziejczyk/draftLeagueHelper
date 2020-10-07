import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import * as pl from './translations/pl/pl';
import * as en from './translations/en/en';
import languageChange from './common/enums/languageChange';
import { languageRegex } from './common/validators/regex';

export const resources = {
  'pl-PL': {...pl},
  'en-US': {...en}
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en-US',
    debug: process.env.NODE_ENV === "development",
    resources
  });

const languages = Object.keys(resources);

  if (!languageRegex.test(i18n.language)) {
    i18n.changeLanguage(
      languages.find((item) => item.includes(i18n.language)) || languageChange.en
    );
}

export default i18n;