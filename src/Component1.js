import React from "react";
import { useSelector } from "react-redux";

function Component1({ value, onIncrement, onDecrement }) {
  const counterValue = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Component 1</h1>
      <p>Counter value: {counterValue}</p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
}

export default Component1;
