import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products/best-sellers');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="best-sellers">
      {products.map((product) => (
        <div key={product._id} className="product">
          <img src={product.image} alt={product.name} />
          <h4>{product.name}</h4>
          <p>${product.price}</p>
          <button>Quick View</button>
        </div>
      ))}
    </div>
  );
};

export default BestSellers;