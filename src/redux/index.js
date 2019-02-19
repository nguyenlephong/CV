import { combineReducers } from 'redux';
import view from './languageSwitcher/reducer';

const auth0 ="";

const appReducers = combineReducers({
    auth0 ,
    view
});


export default appReducers;