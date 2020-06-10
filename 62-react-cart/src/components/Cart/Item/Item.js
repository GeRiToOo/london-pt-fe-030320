import React, { useState, useEffect } from "react";

const Item = ({ item, index, updateCart }) => {
  const [localQuantity, setLocalQuantity] = useState(item.quantity);

  useEffect(() => {
    setLocalQuantity(item.quantity);
  }, [item.quantity]);

  const onChangeHandler = (event) => {
    setLocalQuantity(parseInt(event.target.value));
  };

  const updateCartValue = () => {
    updateCart(parseInt(localQuantity), item.id);
  };

  const deleteHandler = () => {
    updateCart(0, item.id);
  };

  return (
    <li>
      <div className="itemInfo">
        <h3>{item.name}</h3>
        <input
          type="number"
          min={0}
          max={item.quantity}
          value={localQuantity}
          onChange={onChangeHandler}
        />
        <p>£{(item.price * item.quantity).toFixed(2)}</p>
      </div>

      <div className="buttons">
        <button onClick={deleteHandler} className="delete" value={item.id}>
          Remove
        </button>
        <button
          className="update"
          onClick={() => {
            updateCartValue(item.id);
          }}
        >
          Update
        </button>
      </div>
    </li>
  );
};

export default Item;
