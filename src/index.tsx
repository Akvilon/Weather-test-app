import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import createStore from './store';
import {createBrowserHistory} from 'history';
import { ThemeSwitcher } from './components/ThemeSwitcher';

export const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
    <Provider store={store}>
                <ThemeSwitcher>
                    <ConnectedRouter history={history}>
                        <App />
                    </ConnectedRouter>
                </ThemeSwitcher>
            </Provider>,
    document.getElementById('root'));


