import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MainCard from "./components/MainCard";
import {Provider} from 'react-redux'
import {addInterest} from "./actions/InterestCardActions";
import configureStore from "./store/configureStore";
import "babel-polyfill";

const initialState = {
    user: {
        firstName: '',
        lastName: '',
        edipi: '',
        rank: 'AB',
        squadron: '13 IS'
    }
};

let store = configureStore(initialState);
window.store = store;
window.addInterest = addInterest;
ReactDOM.render(
    <Provider store = {store}>
        <MainCard />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
