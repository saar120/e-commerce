import React, { Component } from "react";
import "../Item/Item.css";
export default class Item extends Component {
  addToCartHandler = (item) => {
    this.props.addToCartHandler(item);
  };

  render() {
    const { item } = this.props;
    return (
      <div className="ItemCard">
        <div className="image" style={{ background: `url(${item.image}) no-repeat center center /cover` }}></div>
        <div className="data">
          <div className="title">{item.title}</div>
          <div className="price">Price: {item.price}$</div>
        </div>
        <button onClick={() => this.addToCartHandler(item)}>Add To Cart</button>
      </div>
    );
  }
}
