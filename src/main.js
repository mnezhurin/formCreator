import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';

import { Provider, connect} from 'react-redux';
import store from './store';

import App from './components/App.jsx';


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);