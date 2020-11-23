import {changeLang, getCurrentLanguage} from 'containers/language-switcher/config';

const actions = {
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
  ACTIVATE_LANG_MODAL: 'ACTIVATE_LANG_MODAL',
  switchActivation: () => ({
    type: actions.ACTIVATE_LANG_MODAL
  }),
  changeLanguage: language => {
    changeLang(language);
    return {
      type: actions.CHANGE_LANGUAGE,
      language: getCurrentLanguage(language)
    };
  }
};
export default actions;
