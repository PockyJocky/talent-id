import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import configureStore from "./store/configureStore";

import createHistory from 'history/createBrowserHistory'
import { Router } from 'react-router'

import MainCard from "./components/MainCard";

import { initializeIcons } from '@uifabric/icons';
initializeIcons();

// sets the starting state of the program
const initialState = {
    users: [],
    skills: [],
};

// initalizes the history oject
const history = createHistory();
// initalizes the store
const store = configureStore(initialState);

//renders the store and router wrapped around the maincard
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <MainCard />
        </Router>
    </Provider>,
    document.getElementById('root')
);
