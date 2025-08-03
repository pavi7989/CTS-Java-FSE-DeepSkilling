import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  let page;
  if (isLoggedIn) {
    page = <UserPage onLogout={handleLogout} />;
  } else {
    page = <GuestPage onLogin={handleLogin} />;
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>✈️ Ticket Booking App</h1>
      {page}
    </div>
  );
}

export default App;
