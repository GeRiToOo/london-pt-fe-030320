import React, { useState } from "react";
import "./App.scss";

import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";

const initialStock = [
  {
    id: 1,
    name: "Butter",
    quantity: 20,
    price: 1.99,
  },
  {
    id: 2,
    name: "Apples",
    quantity: 5,
    price: 2.99,
  },
  {
    id: 3,
    name: "Salmon",
    quantity: 13,
    price: 16.99,
  },
  {
    id: 4,
    name: "Soap",
    quantity: 2,
    price: 0.99,
  },
];

const App = () => {
  const [stock, setStock] = useState([...initialStock]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const localStock = [...stock];
  const localCart = [...cart];

  const addToCart = (id, value) => {
    const itemIndexInStock = localStock.findIndex((item) => item.id === id);

    const itemIndexInCart = localCart.findIndex((item) => item.id === id);
    localStock[itemIndexInStock].quantity -= value;

    if (itemIndexInCart === -1) {
      const newItem = { ...localStock[itemIndexInStock] };
      newItem.quantity = value;
      localCart.push(newItem);
      setTotal(total + newItem.price * newItem.quantity);
    } else {
      localCart[itemIndexInCart].quantity += value;

      setTotal(
        localCart[itemIndexInCart].price * localCart[itemIndexInCart].quantity
      );
    }
    setStock(localStock);
    setCart(localCart);
  };

  // const deleteButton = (id, quantity, index) => {
  //   let clicked = parseInt(id);
  //   setCart(localCart.filter((item, i) => i !== index));
  //   const clickedCartItem = localCart.findIndex((item) => item.id === clicked);

  //   const clickedItem = localStock.findIndex((item) => item.id === clicked);
  //   localStock[clickedItem].quantity += quantity;

  //   setTotal(
  //     total -
  //       localCart[clickedCartItem].quantity * localCart[clickedCartItem].price
  //   );

  //   setStock(localStock);
  // };

  const updateCart = (value, id) => {
    const localStock = stock.map((item) => {
      if (item.id !== id) {
        return item;
      }
      const previousItem = cart.find((item) => item.id === id);
      const difference = previousItem.quantity - value;

      setTotal(total - difference * item.price);
      return { ...item, quantity: item.quantity + difference };
    });

    const localCart = cart
      .map((item) => {
        if (item.id !== id) {
          return item;
        }
        return { ...item, quantity: value };
      })
      .filter((item) => item.quantity > 0);

    setStock(localStock);
    setCart(localCart);
  };

  return (
    <div className="app">
      <Store stock={stock} addToCart={addToCart} />
      <Cart cart={cart} total={total.toFixed(2)} updateCart={updateCart} />
    </div>
  );
};

export default App;
