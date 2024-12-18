import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const Logout = () => {
  const navigate = useNavigate(); // для редиректа после выхода

  const handleLogout = async () => {
    try {
      // Отправка POST-запроса на сервер для выхода
      const response = await axios.post('/api/auth/logout', {}, { withCredentials: true });

      // Если выход успешен, перенаправляем на страницу входа
      console.log(response.data.message);
      navigate('/'); // Редирект на страницу входа или другую

      // Можно также очистить токены из localStorage или других хранилищ
      localStorage.removeItem('accessToken');  
      localStorage.removeItem('refreshToken'); 

    } catch (error) {
      console.error('Ошибка при выходе:', error);
    }
  };

  return (
    <div className="logout-container">
       <h2>Are you sure you want to go out?</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;