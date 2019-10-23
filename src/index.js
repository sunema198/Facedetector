import React from 'react';
import ReactDOM from 'react-dom'; //used for DOM for websites
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import './index.css'; //its in same directory
import App from './containers/App';
import * as serviceWorker from './serviceWorker'; //to work website faster and potentially work offline
import { searchPeople } from './reducers';
import 'tachyons';

const logger = createLogger;
const store = createStore(searchPeople, applyMiddleware(logger))

ReactDOM.render(
                <Provider store={ store }>
                <App />
                </Provider> , document.getElementById('root')); //reactDOM package to use function render this
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
