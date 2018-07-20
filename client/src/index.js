import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import configureStore from "./store/configureStore";

import createHistory from 'history/createBrowserHistory'
import { Router } from 'react-router'

import MainCard from "./components/MainCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeIcons } from '@uifabric/icons';
initializeIcons();

const initialState = {
    users: [],
    skills: [],
};

const history = createHistory();
const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <MainCard />
        </Router>
    </Provider>,
    document.getElementById('root')
);
