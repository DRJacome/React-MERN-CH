import React from "react";
/* Para React Router v5.x -> usar Switch;
* Para React Router V6.x -> usar Routes.
 */
import {
  BrowserRouter as Router,
  Switch, //Routes,
  Route
} from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";
import { NavBar } from "./NavBar";
import { Redirect } from "react-router-dom";


export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Redirect to='/' /> {/* <Route component={HomeScreen} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  )
}