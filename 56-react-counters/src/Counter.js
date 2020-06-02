import React, { useState } from "react";
import "./index.css";

/**
 * 1. Create component Counter which will have:
 *
 * - with buttons you should be able to in/decrement {counter} value
 *
 * 2. In App component add button with class {newCounter}
 * 3. when you click {newCounter} you should add new counter to view
 *
 * NOTE: feel free to add some CSS to style your counters.
 */

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <h1>{counter}</h1>
      <div className="counter_buttons">
        <button className="increment" onClick={() => setCounter(counter + 1)}>
          +1
        </button>
        <button className="decrement" onClick={() => setCounter(counter - 1)}>
          -1
        </button>
      </div>
    </div>
  );
}

export default Counter;
