import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    setMessage("Hello! React Event Handling Example");
  };

  const handleIncrease = () => {
    increment();
    sayHello();
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleClick = (e) => {
    alert("I was clicked");
    console.log("Synthetic Event:", e);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>React Events Demo</h1>

      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <br /><br />

      <button onClick={handleIncrease}>Increase (Multi Function)</button>
      <p>{message}</p>

      <br />

      <button onClick={() => sayWelcome("Welcome to React Event Handling!")}>
        Say Welcome
      </button>

      <br /><br />

      <button onClick={handleClick}>Click on me</button>

      <br /><br />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
