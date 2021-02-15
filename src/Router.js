import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Home } from "./pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
