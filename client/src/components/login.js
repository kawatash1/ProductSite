import React, { useState } from 'react';
import { loginUser } from '../api/auth.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      localStorage.setItem('accessToken', data.accessToken); // Сохраняем токен
      alert('You have logged in successfully!');
      navigate('/profile'); // Перенаправление на страницу профиля
    } catch (err) {
      // setError('Login error. Please check your details.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign in!</button>
      </form>
    </div>
  );
};

export default Login;