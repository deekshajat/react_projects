import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  //Increament
  const counterIncrement = () => {
    setCounter(counter + 1);
  };
  //Decrement
  const counterDecrement = () => {
    setCounter(counter - 1);
  };
  //Reset
  const counterReset = () => {
    setCounter(0);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Counter: {counter}</h1>
      <button onClick={counterIncrement} style={{ margin: "0 5px" }}>
        Increment
      </button>
      <button onClick={counterDecrement} style={{ margin: "0 5px" }}>
        Decrement
      </button>
      <button onClick={counterReset} style={{ margin: "0 5px" }}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
