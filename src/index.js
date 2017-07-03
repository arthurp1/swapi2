import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';
// import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore); // Creates a store where all data for the app is stored

ReactDOM.render(
  // Provider is now the new rootcomponent and makes every component access the store
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container')); // container is the id of the div in index.html
