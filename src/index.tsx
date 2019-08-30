import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import createBrowserHistory from "history/createBrowserHistory";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {ThemeProvider} from "theming";
import {theme} from "./styles";
import {ConnectedRouter} from "connected-react-router";
import {BrowserRouter as Router} from "react-router-dom";

// export const history = createBrowserHistory();
// const store = createStore(history);
//
// ReactDOM.render(
//     <Provider store={store}>
//         <ThemeProvider theme={theme}>
//             <ConnectedRouter history={history}>
//                 <App />
//             </ConnectedRouter>
//         </ThemeProvider>
//     </Provider>,
//     document.getElementById('root'));
ReactDOM.render(
    <ThemeProvider theme={theme}>
            <Router>
                <App />
            </Router>
    </ThemeProvider>,
    document.getElementById('root'));