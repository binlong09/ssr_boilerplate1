// Startup point for the client side applciation
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import thunk from 'redux-thunk'; // async action creator
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(thunk))

// BrowserRouter does not work on the server
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)