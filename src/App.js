import React  from 'react';
import PublicRoutes from 'route/router';
import { LocaleProvider } from "antd";
import { IntlProvider } from "react-intl";
import AppLocale from "./language-provider";
import config, {
  getCurrentLanguage
} from "containers/language-switcher/config";
import { createStore, applyMiddleware ,compose} from 'redux'; 
import appReducers from './redux/index';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { Provider } from "react-redux";

const history = createBrowserHistory();
const reactRouterMiddleware = routerMiddleware(history); 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWares = [ thunk, reactRouterMiddleware ];
const store = createStore(
    connectRouter(history)(appReducers), 
    composeEnhancer(
        applyMiddleware(...middleWares)
    ),
);

const currentAppLocale =
  AppLocale[getCurrentLanguage(config.defaultLanguage || "Vietnamese").locale];
  
const DashApp = () => ( 
  
  <LocaleProvider locale={currentAppLocale.antd}>
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      
    {console.log(currentAppLocale)}
          <Provider store={store}> 
            <PublicRoutes history={history} />
          </Provider>
    </IntlProvider>
  </LocaleProvider>
);

export default DashApp;
export { AppLocale };
