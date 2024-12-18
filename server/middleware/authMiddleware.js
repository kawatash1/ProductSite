const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Получаем токен из заголовков
  const token = req.header('x-auth-token');
  
  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  try {
    // Декодируем токен с использованием секретного ключа
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Добавляем информацию о пользователе в объект запроса
    req.user = decoded;

    // Переходим к следующему middleware или обработчику маршрута
    next();
  } catch (error) {
    // Ошибка при проверке токена
    res.status(401).json({ error: 'Token is not valid' });
  }
};

module.exports = authMiddleware;