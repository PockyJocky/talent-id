import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route } from 'react-router-dom';

import {Provider} from 'react-redux';

import configureStore from "./store/configureStore";

import createHistory from 'history/createBrowserHistory'

// Views
import Landing from "./components/layout/Landing";
import Register from "./components/register/Register";
import Skills from './components/register/Skills';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/MainCard.css';


const initialState = {
    users: [],
    skills: [],
    auth: []
};

const history = createHistory();
const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div className="container">
                <Route exact path="/" component={Landing} />
                <Route path="/new" component={Register} />
                <Route path="/skills" component={Skills} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
