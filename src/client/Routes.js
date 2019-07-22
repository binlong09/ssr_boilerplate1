import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage'
import NotFoundPage from './pages/NotFoundPage'

// making use of react-router-config
// mandatory for server-side rendering
export default [
  {
    ...App,
    // It's up to the App component to render whatever the
    // components that got matched by the routes
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];

