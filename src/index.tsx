import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import {createBrowserHistory} from "history";
import createStore from './store';
import {Provider} from "react-redux";
import {ThemeProvider} from "theming";
import {theme} from "./styles";
import {ConnectedRouter} from "connected-react-router";
import { setLocalStorage } from './utils/storage';

export const history = createBrowserHistory();
const store = createStore(history);

const saveState = (state) => {
	try {
		const serialisedState = JSON.stringify(state);
		console.log('TO LOCAL');
		setLocalStorage('app_state', serialisedState);
	} catch (e) {
		throw e
	}
};

store.subscribe(() => {
	saveState(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root'));
