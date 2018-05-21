import React from 'react';
import ReactDOM from 'react-dom';
import MainCard from "./components/MainCard";
import {Provider} from 'react-redux'
import configureStore from "./store/configureStore";
import "babel-polyfill";

const initialState = {
    user: {
        firstName: '',
        lastName: '',
        edipi: '',
        rank: 'AB',
        squadron: '13 IS'
    },
    skillValue: '3',
    interestValue: '3',
    skillName: '',
    skillList: []
};

let store = configureStore(initialState);
window.store = store;
ReactDOM.render(
<Provider store = {store}>
    <MainCard />
</Provider>,
document.getElementById('root')
);
