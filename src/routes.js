import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import DashboardApp from './Components/Dashboard/DashboardApp'
import { useHistory } from 'react-router-dom'; 
import RouterComponent from './RouterComponent/RouterComponent';
import LoginPage from './Components/Login/login';
const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/home"
      />
      <Homepage 
        path="/home"
      />
      <RouterComponent
        component={DashboardApp}
        exact
        path="/dashboard"
      />
      <RouterComponent
        component={LoginPage}
        exact
        path="/Login"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;