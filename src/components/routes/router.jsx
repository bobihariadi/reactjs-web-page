import React from "react";
import { Route, Switch } from "react-router-dom";
import Login2 from "../pages/login/Login2";
import RegistrationFrom from "../pages/RegistrationFrom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login2 />
      </Route>
      <Route path="/register">
        <RegistrationFrom />
      </Route>
    </Switch>
  );
};

export default Routes;
