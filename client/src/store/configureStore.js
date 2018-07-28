// ./react-redux-client/src/store/configureStore.js
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "../reducers/RootReducer";

const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//         applyMiddleware(...middleware),
//         window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );
//
// export default store;

const middleware = [
    thunk
];

export default function configureStore(initialState, ...middleware) {

    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middleware),
            // window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    return store;
}