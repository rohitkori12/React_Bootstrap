import React from 'react';
import LoginPage from '../containers/pages/loginPage';
import HomePage from '../containers/pages/homePage';
import App from '../components/app/App';

const routes = [
  {
    path: ['/login', '/logout', '', '/'],
    authenticated: false,
    name: 'index-page',
    action: context => (
      <App context={context}>
        <LoginPage context={context} />
      </App>
    )
  },
  {
    path: ['/homepage'],
    authenticated: false,
    name: 'home-page',
    action: context => (
      <App context={context}>
        <HomePage context={context} />
      </App>
    )
  },
  {
    path: '(.*)',
    authenticated: false,
    action: () => (
      <App>
        <h1>404 Not Found.</h1>
      </App>
    )
  }
];

export { routes };
