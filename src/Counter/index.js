import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const addToCounter = () => {
    setCounterValue(counterValue + inputValue);
  };

  const subtractFromCounter = () => {
    setCounterValue(counterValue - inputValue);
  };

  return (
    <>
      <h1 data-testid="header">My Counter</h1>
      <h2
        className={`${counterValue >= 100 ? 'green' : ''}${
          counterValue <= -100 ? 'red' : ''
        }`}
        data-testid="counter"
      >
        {counterValue}
      </h2>
      <button data-testid="substract-btn" onClick={subtractFromCounter}>
        -
      </button>
      <input
        data-testid="input"
        className="text-center"
        type="number"
        value={inputValue}
        onChange={(e) => {
          setInputValue(parseInt(e.target.value));
        }}
      />
      <button data-testid="add-btn" onClick={addToCounter}>
        +
      </button>
    </>
  );
};

export default Counter;
