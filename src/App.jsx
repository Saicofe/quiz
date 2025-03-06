// src/App.js
import React, { useState, useEffect } from 'react';
import AdminLogin from './components/AdminLogin';
import UserRegistration from './components/UserRegistration';
import UserLogin from './components/UserLogin';
import Leaderboard from './components/Leaderboard';
import UserDashboard from './components/UserDashboard';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [userType, setUserType] = useState(null); // 'admin', 'user', or null
  const [theme, setTheme] = useState('light');
  const [showUserRegistration, setShowUserRegistration] = useState(false);
  const [userScores, setUserScores] = useState([]); // Store user scores

  // Load registered users from localStorage on initial render
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    setRegisteredUsers(storedUsers);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleAdminLogin = () => {
    setUserType('admin');
  };

  const handleUserLogin = (username) => {
    setUserType('user');
  };

  const handleUserRegistration = (newUser) => {
    const updatedUsers = [...registeredUsers, newUser];
    setRegisteredUsers(updatedUsers);
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers)); // Store in localStorage
    setShowUserRegistration(false); // Switch to login after registration
  };

  const handleHomeClick = () => {
    setUserType(null); // Redirect to home
  };

  const handleQuizCompletion = (username, score, quizType) => {
    setUserScores([...userScores, { username, score, quizType }]);
  };

  return (
    <div className={`App ${theme}`}>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      {!userType ? (
        <>
          <h1>Welcome to the Vercos Quiz </h1>
          <h2>Challenge Your Mind, Join the Fun!</h2>
          <AdminLogin onAdminLogin={handleAdminLogin} />
          <div>
            <button onClick={() => setShowUserRegistration(!showUserRegistration)}>
              {showUserRegistration ? 'Switch to Login' : 'Switch to Registration'}
            </button>
          </div>
          {showUserRegistration ? (
            <UserRegistration onRegister={handleUserRegistration} />
          ) : (
            <UserLogin
              onUserLogin={handleUserLogin}
              registeredUsers={registeredUsers}
            />
          )}
        </>
      ) : userType === 'admin' ? (
        <>
          <Leaderboard onHomeClick={handleHomeClick} userScores={userScores} />
        </>
      ) : (
        <>
          <h1>Welcome, User!</h1>
          <UserDashboard onHomeClick={handleHomeClick} onQuizCompletion={handleQuizCompletion} />
        </>
      )}
    </div>
  );
};

export default App;