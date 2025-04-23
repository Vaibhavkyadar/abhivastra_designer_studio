// src/pages/Shop.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', size: '', color: '', priceRange: [0, 100] });
  const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products', {
        params: { ...filters, sort: sortOption, page: currentPage },
      });
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
    };
    fetchProducts();
  }, [filters, sortOption, currentPage]);

  return (
    <div className="shop">
      <h1>Shop</h1>
      <div className="shop-container">
        <Filter filters={filters} setFilters={setFilters} setCurrentPage={setCurrentPage} />
        <div className="sort-options">
          <label>Sort by:</label>
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="default">Default</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="newest">Newest Arrivals</option>
          </select>
        </div>
        <div className="product-listings">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Shop;