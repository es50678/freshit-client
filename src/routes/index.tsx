import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { App } from '../components/app';
import { Dashboard } from './dashboard';
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
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}
