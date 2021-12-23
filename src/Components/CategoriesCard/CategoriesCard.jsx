import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../CategoriesCard/CategoriesCard.css";

export default class CategoriesCard extends Component {
  render() {
    return (
      <div className="categoriesCard">
        <Link className="category" to={`/categories/${this.props.category}`}>
          {this.props.category.toUpperCase()}
        </Link>
      </div>
    );
  }
}
