const mongoose = require('mongoose');
const path = require('path');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: { 
    type: String, 
    default: 'http://localhost:5000/public/item.png'
    },
  category: { type: String },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;