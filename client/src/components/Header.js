import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          {/* <li><Link to="/admin">Admin Panel</Link></li> */}
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/logout">Logout</Link></li>




        </ul>
      </nav>
    </header>
  );
};

export default Header;