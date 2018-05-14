import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MainCard from "./components/MainCard";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers/RootReducer'
import {addInterest} from "./actions/InterestCardActions";

//import style sheets
// import './styles/index.css';

let store = createStore(rootReducer)
window.store = store
window.addInterest = addInterest
ReactDOM.render(
    <Provider store = {store}>
        <MainCard />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
