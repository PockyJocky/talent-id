import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import configureStore from "./store/configureStore";

import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import { initializeIcons } from '@uifabric/icons';

import MainCard from "./components/MainCard";

initializeIcons();

const initialState = {
    navigation: {
        place: 0
    },
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
let store = configureStore(initialState, routerMiddleware(history));
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <MainCard />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
