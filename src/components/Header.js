import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">Abhivastra Designer Studio</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About Us</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      <div className="search-cart">
        <input type="text" placeholder="Search..." />
        <span className="cart-icon">🛒</span>
      </div>
    </header>
  );
};

export default Header;