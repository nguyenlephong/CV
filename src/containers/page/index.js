import React from 'react';
// import LayoutMain from 'containers/layout/demo';
import LayoutMain from 'containers/layout/index';
import {LocaleProvider} from "antd";
import {IntlProvider} from "react-intl";
import AppLocale from "language-provider";
import {getCurrentLanguage} from "containers/language-switcher/config";

import {connect} from 'react-redux';


class Home extends React.Component {

  render() {
    const {lang} = this.props;
    const currentAppLocale =
      AppLocale[getCurrentLanguage(lang.languageId || "Vietnamese").locale];
    return (
      <LocaleProvider locale={currentAppLocale.antd}>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <LayoutMain/>
        </IntlProvider>
      </LocaleProvider>
    );
  }
}

export default connect(
  state => ({
    lang: state.view.language,
  }),
  {}
)(Home);
export {AppLocale};
