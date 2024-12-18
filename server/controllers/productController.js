const Product = require('../models/productModel');

// Получить все продукты
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

// Получить продукт по ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Продукт не найден' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

// Создать новый продукт
exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: 'Ошибка при создании продукта' });
  }
};

// Обновить продукт
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ message: 'Продукт не найден' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

// Удалить продукт
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Продукт не найден' });
    res.json({ message: 'Продукт удален' });
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};