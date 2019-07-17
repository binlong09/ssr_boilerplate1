import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage'

// making use of react-router-config
// mandatory for server-side rendering
export default [
  {
    ...HomePage,
    path: '/',
    exact: true
  },
  {
    ...UsersListPage,
    path: '/users'
  }
];