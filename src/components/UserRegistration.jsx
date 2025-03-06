// src/components/UserRegistration.js
import React, { useState } from 'react';

const UserRegistration = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Check if the username already exists
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const userExists = storedUsers.some((user) => user.username === username);

    if (userExists) {
      setError('Username already exists. Please choose a different username.');
      return;
    }

    // Register the new user
    const newUser = { username, password };
    onRegister(newUser);
    setError('');
    alert('Registration successful! Please log in.');
  };

  return (
    <div>
      <h2>User Registration</h2>
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default UserRegistration;