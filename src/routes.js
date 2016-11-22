import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import Room from './components/Room'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/rooms/:id" component={Room} />
  </Route>
);