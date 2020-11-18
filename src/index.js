import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Redux Store set up
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer';

//The extra argument in store is for a Redux extension on Chrome. It allows the developer to see the full state tree

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)