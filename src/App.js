import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Categories from "./Pages/CategoriesPage/Categories";
import Category from "./Pages/CategoryPage/Category";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import Homepage from "./Pages/HomePage/Homepage";

export default class App extends Component {
  state = { cartItems: [] };

  addToCartHandler = (item) => {
    const newCartItems = [...this.state.cartItems, item];
    this.setState({ cartItems: newCartItems });
  };

  payNowHandler = () => {
    this.setState({ cartItems: [] });
  };
  render() {
    return (
      <Router>
        <Navbar count={this.state.cartItems.length} />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/checkout" exact>
            <CheckoutPage cartItems={this.state.cartItems} payNowHandler={this.payNowHandler} />
          </Route>
          <Route path="/categories" exact>
            <Categories />
          </Route>
          <Route
            path="/categories/:category"
            exact
            render={(props) => <Category {...props} addToCartHandler={this.addToCartHandler} />}
          />
        </Switch>
      </Router>
    );
  }
}
