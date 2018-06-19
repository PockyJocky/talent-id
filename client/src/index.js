import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import configureStore from "./store/configureStore";

import createHistory from 'history/createBrowserHistory'
import { Router } from 'react-router'

import { initializeIcons } from '@uifabric/icons';

import MainCard from "./components/MainCard";

initializeIcons();

const initialState = {
    userCard: {
        firstName: '',
        lastName: '',
        edipi: '',
        rank: 'AB',
        squadron: '13 IS'
    },
    userList: [],
    interestList: [],
    interestCard: {
        skillValue: '3',
        interestValue: '3',
        skillName: '',
        skillList: []
    }
};

const history = createHistory();
let store = configureStore(initialState);
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <MainCard />
        </Router>
    </Provider>,
    document.getElementById('root')
);
