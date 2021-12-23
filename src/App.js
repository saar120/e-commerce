import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Categories from "./Pages/CategoriesPage/Categories";
import Category from "./Pages/CategoryPage/Category";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import Homepage from "./Pages/HomePage/Homepage";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/checkout" exact>
            <CheckoutPage />
          </Route>
          <Route path="/categories" exact>
            <Categories />
          </Route>
          <Route path="/categories/:category" exact>
            <Category />
          </Route>
        </Switch>
      </Router>
    );
  }
}
