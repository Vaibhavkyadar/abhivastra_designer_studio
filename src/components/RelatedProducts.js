// src/components/RelatedProducts.js
import React from 'react';
import ProductCard from './ProductCard';

const RelatedProducts = ({ products }) => {
  return (
    <div className="related-products">
      <h2>Related Products</h2>
      <div className="product-listings">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;