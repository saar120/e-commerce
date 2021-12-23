import React, { Component } from "react";
import "../CategoryPage/Category.css";
import API from "../../API";
import Item from "../../Components/Item/Item";

export default class Category extends Component {
  state = { items: [] };

  category = this.props.match.params.category;

  setCategoryItems = async () => {
    const items = await API.getCategory(this.category);
    this.setState({ items });
  };

  renderItems = () => {
    return this.state.items.length === 0 ? (
      <div>Loading</div>
    ) : (
      this.state.items.map((item) => {
        return <Item key={item.id} item={item} />;
      })
    );
  };

  componentDidMount = () => {
    this.setCategoryItems();
  };

  render() {
    return (
      <>
        <h2>{this.category.toUpperCase()}</h2>
        <div className="items-container">{this.renderItems()}</div>
      </>
    );
  }
}
