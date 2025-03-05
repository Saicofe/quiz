// src/components/Leaderboard.js
import React from 'react';

const Leaderboard = ({ onHomeClick, userScores }) => {
  // Group scores by quiz type
  const groupedScores = userScores.reduce((acc, score) => {
    if (!acc[score.quizType]) {
      acc[score.quizType] = [];
    }
    acc[score.quizType].push(score);
    return acc;
  }, {});

  // Sort scores within each quiz type
  Object.keys(groupedScores).forEach((quizType) => {
    groupedScores[quizType].sort((a, b) => b.score - a.score);
  });

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="admin-stats">
        <div className="stat-card">
          <h3>Users</h3>
          <p>{userScores.length}</p>
        </div>
        <div className="stat-card">
          <h3>Categories</h3>
          <p>2(Frontend/Backend)</p> {/* Frontend and Backend */}
        </div>
      </div>
      <div className="home-button">
        <button onClick={onHomeClick}>Home</button>
      </div>
      <h2>Leaderboard</h2>
      {Object.keys(groupedScores).map((quizType) => (
        <div key={quizType}>
          <h3>{quizType === 'frontend' ? 'Frontend Quiz' : 'Backend Quiz'}</h3>
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {groupedScores[quizType].map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;