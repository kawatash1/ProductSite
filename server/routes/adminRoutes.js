const express = require('express');
const router = express.Router();


const { getProducts, getUsers } = require('../controllers/adminController');

const authMiddleware = require('../middleware/authMiddleware');



// Protect admin routes

router.get('/products', authMiddleware, getProducts);

router.get('/users', authMiddleware, getUsers);



module.exports = router;