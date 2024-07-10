import React from "react";
import "./counter.css";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="divc">
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
