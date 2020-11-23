import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'settings/global.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css';
import 'antd/dist/antd.css';
import 'normalize.css';

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister(); 
 