import React, { Component } from "react";
import "../Navbar/Navbar.css";

import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="left-side">
          <Link to="/" className="Link">
            <i className="fas fa-home fa-2x"></i>
          </Link>
          <Link to="/categories" className="Link">
            CATEGORIES
          </Link>
        </div>
        <Link to="/checkout" className="Link">
          <i className="fas fa-shopping-cart fa-2x">
            <span>{this.props.count}</span>
          </i>
        </Link>
      </div>
    );
  }
}
