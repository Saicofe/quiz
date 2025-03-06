// src/components/UserLogin.js
import React, { useState } from 'react';

const UserLogin = ({ onUserLogin, registeredUsers }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const user = storedUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      onUserLogin(username);
      setError('');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div>
      <h2>User Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default UserLogin;