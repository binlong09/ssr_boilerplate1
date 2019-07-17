import React from 'react';
import Home from './components/Home';
import UsersList from './components/UsersList'

// making use of react-router-config
// mandatory for server-side rendering
export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/users',
    component: UsersList
  }
];