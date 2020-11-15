import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Redux Store set up
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)