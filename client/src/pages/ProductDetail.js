import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); // Получаем ID из URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(response => {
        if (!response.ok) throw new Error('Ошибка загрузки продукта');
        return response.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Ошибка:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2>Loading...</h2>;

  if (!product) return <h2>Продукт не найден</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <button id="BackToList" onClick={() => navigate('/products')} style={{ marginBottom: '20px' }}>
      Back to the Product List
      </button>
      <h1>{product.name}</h1>
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{ width: '300px', borderRadius: '8px' }}
      />
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Product ID:</strong> {product._id}</p>
    </div>
  );
};

export default ProductDetail;