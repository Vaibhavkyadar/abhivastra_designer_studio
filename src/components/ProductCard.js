// src/components/ProductCard.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const history = useHistory();

  const handleAddToCart = () => {
    console.log(`Added ${product.name} to cart`);
  };

  const handleProductClick = () => {
    history.push(`/product/${product._id}`);
  };

  return (
    <div className="product-card" onClick={handleProductClick}>
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;