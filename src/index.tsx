import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import {createBrowserHistory} from "history";
import createStore from './store';
import {Provider} from "react-redux";
import {ThemeProvider} from "theming";
import {theme} from "./styles";
import {ConnectedRouter} from "connected-react-router";

export const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root'));
