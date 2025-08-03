// src/UserPage.js
import React from 'react';

const UserPage = ({ onLogout }) => {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <p>You can now book tickets.</p>
      <button onClick={onLogout}>Logout</button>
      <hr />
      <h3>Available Flights:</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          🔹 Chennai ➡️ Delhi | 8:00 AM | ₹4500 
          <button style={{ marginLeft: '10px' }}>Book</button>
        </li>
        <li>
          🔹 Mumbai ➡️ Bangalore | 12:00 PM | ₹3500
          <button style={{ marginLeft: '10px' }}>Book</button>
        </li>
        <li>
          🔹 Hyderabad ➡️ Kolkata | 6:00 PM | ₹4000
          <button style={{ marginLeft: '10px' }}>Book</button>
        </li>
      </ul>
    </div>
  );
};

export default UserPage;
