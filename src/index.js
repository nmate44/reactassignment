import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import { createStore } from "redux";
import carReducer from './reducers/carReducer'


const store = createStore(carReducer);

ReactDOM.render(<App />,document.getElementById('root'));

