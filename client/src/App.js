
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'C:/Users/madks/Documents/FullStack/Project 3/client/src/pages/Home';
import About from 'C:/Users/madks/Documents/FullStack/Project 3/client/src/pages/About';
import Account from './pages/Profile';
import Products from 'C:/Users/madks/Documents/FullStack/Project 3/client/src/pages/Products';
import Cart from 'C:/Users/madks/Documents/FullStack/Project 3/client/src/pages/Cart';
import ContactUs from 'C:/Users/madks/Documents/FullStack/Project 3/client/src/pages/ContactUs';
import ProductDetail from 'C:/Users/madks/Documents/FullStack/Project 3/client/src/pages/ProductDetail';
import AdminPanel from 'C:/Users/madks/Documents/FullStack/Project 3/client/src/pages/AdminPanel.js';
import Login from './components/login';
import Logout from './pages/Logout';

import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/Profile';

import Header from './components/Header';
import Footer from './components/Footer';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';  
axios.defaults.withCredentials = true;  // Разрешить отправку cookies

const App = () => {
  return (
    <div>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />


        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />


        <Route path="/account" element={<Account />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
};


export default App;