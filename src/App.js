import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/pages/Users';
import Dashboard from './dashboard/pages/Dashboard'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        <Redirect to="/"/>
      </Switch>
    </Router>
  )
};

export default App;
