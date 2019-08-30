import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {History} from 'history';
import home, {homeMiddlewares} from './home';
import {HomeState} from "./home/reducer";

// @ts-ignore
const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    // @ts-ignore
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;


export interface AppState {
    home: HomeState
}


const rootReducer = (history: History) => combineReducers(
    {
        home,
        router: connectRouter(history)
    }
);

export default (history) => {
    return createStore(
        rootReducer(history),
        undefined,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),

            )
        )
    );
}