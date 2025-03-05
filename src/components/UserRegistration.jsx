// src/components/UserRegistration.js
import React, { useState } from 'react';

const UserRegistration = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        if (username && password) {
            onRegister({ username, password });
            alert('Registration successful! Please log in.');
        } else {
            alert('Please fill the valid details.');
        }
    };

    return (
        <div>
            <h2>User Registration</h2>
            <input type="text" placeholder="Username" value={username}  onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default UserRegistration;