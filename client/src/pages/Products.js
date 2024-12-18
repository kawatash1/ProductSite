import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => {
        if (!response.ok) throw new Error('Ошибка загрузки продуктов');
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(err => console.error('Ошибка:', err));
  }, []);

  return (
    <div className="Products">
      <h1>Products</h1>
      <ul className="product-list">
        {products.map(product => (
          <li
            key={product._id}
            onClick={() => navigate(`/products/${product._id}`)} // Навигация
            style={{ cursor: 'pointer', margin: '10px', listStyle: 'none' }}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{ width: '200px', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <span>{product.name} - ${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;