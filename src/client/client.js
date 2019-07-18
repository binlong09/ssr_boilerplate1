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
import reducers from './reducers';
import axios from 'axios';

const axiosInstance = axios.create({
  // append /api to the url
  baseURL: '/api'
})

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
)

// BrowserRouter does not work on the server
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)