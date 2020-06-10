import React from "react";
import Item from "./Item/Item";

const Store = ({ addToCart, stock }) => {
  return (
    <div className="store">
      <div className="title">
        <h3>Store</h3>
        <img src={require("./images/plant.png")} alt="" />
      </div>

      <ul>
        {stock.map((item) => (
          <Item key={item.id} item={item} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
};

export default Store;
