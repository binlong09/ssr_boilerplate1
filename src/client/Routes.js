import React from 'react';
import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList'

// making use of react-router-config
// mandatory for server-side rendering
export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    loadData,
    path: '/users',
    component: UsersList
  }
];