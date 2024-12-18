const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Здесь вы можете добавлять маршруты для работы с продуктами
// Например:
// Получить все продукты
router.get('/', productController.getAllProducts);

// Получить продукт по ID
router.get('/:id', productController.getProductById);

// Создать новый продукт (админ)
router.post('/', productController.createProduct);

// Обновить продукт по ID (админ)
router.put('/:id', productController.updateProduct);

// Удалить продукт по ID (админ)
router.delete('/:id', productController.deleteProduct);

module.exports = router;