import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { UILogo } from "./components/ui";
import "./assets/styles/main.scss";
import { UserMain } from "./components/user/User";

const App: React.FC = () => {
  return (
    <div className="beetrack-container">
      <UILogo />
      <BrowserRouter>
        <Switch>
          <Route exact path="/users" component={UserMain} />
          <Route render={() => <Redirect to="/users" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export { App };
