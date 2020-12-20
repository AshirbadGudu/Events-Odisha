import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Results from "./pages/Results";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/results" component={Results} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
