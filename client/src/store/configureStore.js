// ./react-redux-client/src/store/configureStore.js
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "../reducers/RootReducer";

export default function configureStore(initialState, ...middleware) {
    const middlewares = [
        thunk,
        ...middleware
    ];
    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
        )
    );

    return store;
}