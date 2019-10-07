import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/login/login';
import DashboardPage from './pages/dashboard/dashboard';
import NewPage from './pages/new/new';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage}></Route>
        <Route path="/home" component={DashboardPage}></Route>
        <Route path="/new" component={NewPage}></Route>
      </Switch>
    </BrowserRouter>
  )
};