import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AgentLogin from "./components/AgnetLogin";
import UserLogin from "./components/UserLogin";
import UserRegistration from "./components/UserRegistration";
import AgentRegistration from "./components/AgentRegistration";
import UserMain from "./components/UserMain";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={AgentLogin} path="/login/agent" />
    <Route component={UserLogin} path="/login/user" />
    <Route component={UserRegistration} path="/register/user" />
    <Route component={AgentRegistration} path="/register/agent" />
    <Route component={UserMain} path="/main/user" />
  </Switch>
);
