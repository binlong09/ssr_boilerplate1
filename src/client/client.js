// Startup point for the client side applciation
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import thunk from 'redux-thunk'; // async action creator
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducers, {}, applyMiddleware(thunk))

// BrowserRouter does not work on the server
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)