import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Implement login functionality here
    console.log('Logging in with:', { username, password });
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="left-panel">
          <h2 className="login-heading">Member Login</h2>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button className="login-button" onClick={handleLogin}>Login</button>
          <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
        </div>
        <div className="right-panel">
          <p className="signup-text">Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
