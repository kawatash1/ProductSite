require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const authRoutes = require('./routes/authRoutes');

const userRoutes = require('./routes/userRoutes');

const productRoutes = require('./routes/productRoutes');
const adminRoutes = require('./routes/adminRoutes');
const app = express();

const PORT = process.env.PORT || 5000;



app.use(cors({
  origin: 'http://localhost:3000',  // Ваш клиентский URL
  credentials: true
}));
app.use(express.json());
app.use('/api/auth', userRoutes); // Все маршруты будут начинаться с /api/auth
// app.use('/api/users', userRoutes);

app.use('/api/products', productRoutes);
app.use('/api/admin', adminRoutes);
app.use('/public', express.static('public'));



mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  mongoose.connection.on('connected', () => {
    console.log(`Connected to database: ${mongoose.connection.name}`);
  });

  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`));

