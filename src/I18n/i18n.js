const FR = require('../I18n/languages/fr.json');
const EN = require('../I18n/languages/en.json');

export const translation = (language, key) => {
  if (language === 'en') {
    return EN[key];
  } else if (language === 'fr') {
    return FR[key];
  }
};

export const translationObject = (language, key) => {
  if (language === 'en') {
    return EN[key];
  } else if (language === 'fr') {
    return FR[key];
  }
};
