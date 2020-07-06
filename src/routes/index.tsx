import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { App } from '../components/app';
import { Login } from './login';

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
