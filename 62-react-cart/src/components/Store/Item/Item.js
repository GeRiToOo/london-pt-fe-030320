import React, { useState } from "react";

const Item = ({ item, addToCart }) => {
  const [value, setValue] = useState(0);
  // two ways binding
  const changeHandler = (event) => {
    setValue(parseInt(event.target.value));
  };
  const addToBasketHandler = () => {
    addToCart(item.id, value);
    setValue(0);
  };

  return (
    <li>
      <div className="details">
        <h2>{item.name}</h2>
        <h3>£{item.price}</h3>
      </div>

      <div className="add">
        <input
          type="number"
          name={item.id}
          min={0}
          max={item.quantity}
          value={value}
          onChange={changeHandler}
        />

        <button onClick={addToBasketHandler}>
          <img src={require("../images/cart.png")} alt="" />
        </button>
      </div>
      <div className="label">
        {item.quantity === 0 ? (
          <p className="sold">Out of Stock!</p>
        ) : (
          <p>In stock: {item.quantity}</p>
        )}
      </div>
    </li>
  );
};

export default Item;
