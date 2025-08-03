// src/CurrencyConvertor.js
import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [inr, setInr] = useState('');
  const [euro, setEuro] = useState(null);

  const handleSubmit = () => {
    const rate = 0.011; // 1 INR = 0.011 Euro approx.
    const result = parseFloat(inr) * rate;
    setEuro(result.toFixed(2));
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Currency Convertor</h2>
      <input
        type="number"
        placeholder="Enter amount in INR"
        value={inr}
        onChange={(e) => setInr(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert</button>
      {euro !== null && <h3>Amount in Euro: €{euro}</h3>}
    </div>
  );
};

export default CurrencyConvertor;
