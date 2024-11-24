import React from "react";
import { memo } from "react";
import { useCallback } from "react";
import { useState } from "react";

const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <div>
      <div>Count: {count}</div>
      <Child onClick={handleClick} />
    </div>
  );
};

const Child = memo(({ onClick }) => {
  console.log("Child rendered!");
  return (
    <div>
      <button onClick={onClick}>Increment</button>
    </div>
  );
});

export default UseCallbackDemo;
