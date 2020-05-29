import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import { createStore } from "redux";
import {Provider} from "react-redux";
import carReducer from './reducers/carReducer'


const store = createStore(carReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

