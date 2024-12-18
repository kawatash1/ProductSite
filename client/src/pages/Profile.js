import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) throw new Error('Пользователь не вошел в систему');

        const response = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (err) {
        setError(err.message || 'Ошибка загрузки профиля');
      }
    };

    fetchProfile();
  }, []);

  // if (error) return <p>{error}</p>;

  return (
    <div id="Profile">
      {user ? (
        <>
          <h1>Your Profile</h1>
          <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="Avatar" style={{ width: '100px', height: '100px' }} />
          <p>Name: {user.username}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>You need to login at first.</p>
      )}
    </div>
  );
};

export default ProfilePage;