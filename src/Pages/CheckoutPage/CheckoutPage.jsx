import React, { Component } from "react";
import TableRow from "../../Components/Table/TableRow";
import "../CheckoutPage/CheckoutPage.css";

export default class CheckoutPage extends Component {
  totalSum = 0;

  payNowHandler = () => {
    this.props.payNowHandler();
  };

  renderCart = () => {
    return this.props.cartItems.map((item) => {
      this.totalSum += item.price;
      return <TableRow key={Math.random()} item={item} />;
    });
  };

  render() {
    if (this.props.cartItems.length === 0) {
      this.totalSum = 0;
      return <h1>Your Cart Is Empty</h1>;
    }
    return (
      <div className="container">
        <h1>Checkout Page</h1>
        <div className="checkout-holder">{this.renderCart()}</div>
        <h3>Total: {this.totalSum}$</h3>
        <button onClick={this.payNowHandler}>Pay Now</button>
      </div>
    );
  }
}
