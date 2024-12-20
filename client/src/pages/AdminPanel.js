import React, { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', imageUrl: '', category: '' });
  const [editingProduct, setEditingProduct] = useState(null); 

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Loading error:', err));
  };

  // Добавить товар
  const handleCreate = () => {
    fetch('http://localhost:5000/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    })
      .then(() => {
        fetchProducts();
        setNewProduct({ name: '', price: '', imageUrl: '', category: '' });
      })
      .catch(err => console.error('Adding error:', err));
  };

  // Удалить товар
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/products/${id}`, { method: 'DELETE' })
      .then(() => fetchProducts())
      .catch(err => console.error('Deleting error:', err));
  };

  // Начать редактирование
  const startEditing = (product) => {
    setEditingProduct(product);
  };

  // Сохранить изменения
  const handleUpdate = () => {
    fetch(`http://localhost:5000/api/products/${editingProduct._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingProduct),
    })
      .then(() => {
        fetchProducts();
        setEditingProduct(null);
      })
      .catch(err => console.error('Updating error:', err));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Panel</h1>

      <h2>Add New Product</h2>
      <input
        type="text"
        placeholder="Name"
        value={newProduct.name}
        onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Price"
        value={newProduct.price}
        onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={newProduct.imageUrl}
        onChange={e => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
      />
      <input
        type="text"
        placeholder="Category"
        value={newProduct.category}
        onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}
      />
      <button onClick={handleCreate}>Add Product</button>

      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product._id} style={{ marginBottom: '10px' }}>
            {product.name} - ${product.price}
            <button onClick={() => startEditing(product)} style={{ marginLeft: '10px' }}>
              Edit
            </button>
            <button onClick={() => handleDelete(product._id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Форма для редактирования товара */}
      {editingProduct && (
        <div>
          <h2>Edit Product</h2>
          <input
            type="text"
            value={editingProduct.name}
            onChange={e => setEditingProduct({ ...editingProduct, name: e.target.value })}
          />
          <input
            type="text"
            value={editingProduct.price}
            onChange={e => setEditingProduct({ ...editingProduct, price: e.target.value })}
          />
          <input
            type="text"
            value={editingProduct.imageUrl}
            onChange={e => setEditingProduct({ ...editingProduct, imageUrl: e.target.value })}
          />
          <input
            type="text"
            value={editingProduct.category}
            onChange={e => setEditingProduct({ ...editingProduct, category: e.target.value })}
          />
          <button onClick={handleUpdate}>Save Changes</button>
          <button onClick={() => setEditingProduct(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;