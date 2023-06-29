import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the login credentials to the backend API
      const response = await axios.post('http://localhost:3000/login', {
        email: email,
        password: password
      });

      if (response.data.success) {
        setMessage('Login successful!');
      } else {
        setMessage('Login failed. Please try again.');
      }

      // Reset the form
      setEmail('');
      setPassword('');
    } catch (error) {
      setMessage('An error occurred during login. Please try again.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <p>{message}</p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
