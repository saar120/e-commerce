import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CheckoutPage from "./Pages/CheckoutPage";
import Homepage from "./Pages/Homepage";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/checkout" exact>
            <CheckoutPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}
