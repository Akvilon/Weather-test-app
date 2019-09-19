import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {History} from 'history';
import home, {homeMiddlewares} from './home';
import {HomeState} from "./home/reducer";
import {AuthState} from "./auth/reducer";
import auth, {authMiddlewares} from "./auth";
import { getLocalStorage } from '../utils/storage';

// @ts-ignore
const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    // @ts-ignore
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const loadState = () => {
	try {
		const serialisedState = getLocalStorage('app_state');
		if (!serialisedState) return undefined;
		return JSON.parse(serialisedState);
	} catch (err) {
		return undefined;
	}
};
const OLD_STATE = loadState();



export interface AppState {
		auth: AuthState;
    home: HomeState;
}


const rootReducer = (history: History) => combineReducers(
    {
	      auth,
        home,
        router: connectRouter(history)
    }
);




export default (history) => {
    return createStore(
        rootReducer(history),
			OLD_STATE,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
                ...authMiddlewares,
							  ...homeMiddlewares
            )
        )
    );
}