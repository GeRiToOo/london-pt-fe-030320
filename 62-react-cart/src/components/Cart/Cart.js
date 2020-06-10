import React from "react";
import Item from "./Item/Item";

const Cart = ({ deleteButton, updateCart, cart, total }) => {
  return (
    <div className="cart">
      <h3>Cart</h3>
      <ul>
        <div>
          <div className="titles">
            <h4>Name:</h4>
            <h4>Quantity: </h4>
            <h4>Price: </h4>
          </div>
        </div>
        {cart.map((item, index) => (
          <Item
            key={item.id}
            item={item}
            index={index}
            deleteButton={deleteButton}
            updateCart={updateCart}
          />
        ))}
      </ul>

      <div className="total">Total: £{total} </div>
    </div>
  );
};

export default Cart;
