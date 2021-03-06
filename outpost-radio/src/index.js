import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import * as serviceWorker from './serviceWorker';
import './index.css';
import './fonts/topaz.ttf'

import app from './reducers/reducers';
import Root from './components/Root';

const store = createStore(app);

ReactDOM.render(
  <Root store={store} />, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
