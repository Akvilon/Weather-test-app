import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { ThemeProvider } from 'react-jss';
import { theme } from './styles/theme.styles';
import {ConnectedRouter} from "connected-react-router";
import {Provider} from 'react-redux';
import createStore from './store';
import {createBrowserHistory} from "history";
import { setLocalStorage } from './utils/storage';


export const history = createBrowserHistory();
const store = createStore(history);

// const saveState = (state) => {
// 	try {
// 		const serialisedState = JSON.stringify(state);
// 		console.log('TO LOCAL');
// 		setLocalStorage('app_state', serialisedState);
// 	} catch (e) {
// 		throw e
// 	}
// };
//
// store.subscribe(() => {
// 	saveState(store.getState());
// });

ReactDOM.render(
    <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <ConnectedRouter history={history}>
                        <App />
                    </ConnectedRouter>
                </ThemeProvider>
            </Provider>,
    document.getElementById('root'));


