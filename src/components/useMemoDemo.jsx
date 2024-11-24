import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const Memo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const [number, setNumber] = useState(1000000000);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const calculateSum = (number) => {
    console.log("calculateSum called...");
    let sum = 0;
    let i = 1;
    while (i <= number) {
      sum += counterOne;
      i++;
    }
    return sum;
  };

  const sum = useMemo(() => calculateSum(number), [number, counterOne]);
  console.log("Sum", sum);

  return (
    <div>
      <h2>Sum: {sum}</h2>
      <h2>{counterOne}</h2>
      <button onClick={incrementOne}>IncrementOne</button>
      <h2>{counterTwo}</h2>
      <button onClick={incrementTwo}>IncrementTwo</button>
    </div>
  );
};

export default Memo;
