import React, { useState } from 'react';

const UserLogin = ({ onUserLogin, registeredUsers }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = registeredUsers.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      onUserLogin();
    } else {
      alert('Invalid user credentials');
    }
  };

  return (
    <div>
      <h2>User Login</h2>
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