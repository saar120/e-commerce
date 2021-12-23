import React, { Component } from "react";
import "../Table/TableRow.css";

export default class TableRow extends Component {
  render() {
    return (
      <ul className="item">
        <li>{this.props.item.title}</li>
        <li>Price: {this.props.item.price}$</li>
      </ul>
    );
  }
}
