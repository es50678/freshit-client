import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { App } from '../components/app';

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <App className="container-fluid" />
        </Route>
      </Switch>
    </Router>
  );
}
