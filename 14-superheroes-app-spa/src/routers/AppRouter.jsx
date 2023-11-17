import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { VistaLogin } from "../components/login/VistaLogin";
import { PanelRutas } from "./PanelRutas";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/login' component={VistaLogin} />
          <Route path='/' component={PanelRutas} />
        </Switch>
      </div>
    </Router>
  )
}