// @flow
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Login from './containers/Login';


export default () => (
  <Router>
    <App>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/" component={Login} history={history} />
      </Switch>
    </App>
  </Router>
);
