import React  from 'react';
import PublicRoutes from 'route/router';

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

 
const DashApp = () => ( 
    <Provider store={store}> 
      <PublicRoutes history={history} />
    </Provider>
);

export default DashApp;

