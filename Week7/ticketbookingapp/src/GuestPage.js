// src/GuestPage.js
import React from 'react';

const GuestPage = ({ onLogin }) => {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>You can browse flight details below:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>🔹 Chennai ➡️ Delhi | 8:00 AM | ₹4500</li>
        <li>🔹 Mumbai ➡️ Bangalore | 12:00 PM | ₹3500</li>
        <li>🔹 Hyderabad ➡️ Kolkata | 6:00 PM | ₹4000</li>
      </ul>
      <button onClick={onLogin}>Login to Book Tickets</button>
    </div>
  );
};

export default GuestPage;
