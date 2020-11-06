import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import counterReducer from './reducers/counter';
import buttonReducer from './reducers/button';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const allReducers = combineReducers({
  counter: counterReducer,
  button: buttonReducer,
});

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <div className = "App">
  <Provider store={store}>
    <App />
  </Provider>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
