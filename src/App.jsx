// src/App.js
import React, { useState } from 'react';
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
    setRegisteredUsers([...registeredUsers, newUser]);
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
          <h1>Welcome to the VECROS Quiz App</h1>
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
          <h1>Welcome !!!</h1>
          <UserDashboard onHomeClick={handleHomeClick} onQuizCompletion={handleQuizCompletion} />
        </>
      )}
    </div>
  );
};

export default App;