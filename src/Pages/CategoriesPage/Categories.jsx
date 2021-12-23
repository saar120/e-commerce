import React, { Component } from "react";
import uniqid from "uniqid";
import API from "../../API";
import "../CategoriesPage/Categories.css";
import CategoriesCard from "../../Components/CategoriesCard/CategoriesCard";

export default class Categories extends Component {
  state = { categories: [] };

  setCategories = async () => {
    const categories = await API.getCategories();
    this.setState({ categories });
  };

  renderCategories = () => {
    return this.state.categories.map((category) => {
      return <CategoriesCard key={uniqid()} category={category} />;
    });
  };

  componentDidMount = () => {
    this.setCategories();
  };
  render() {
    return this.state.categories.length === 0 ? (
      <div>Loading</div>
    ) : (
      <div className="categories-containers">{this.renderCategories()}</div>
    );
  }
}
