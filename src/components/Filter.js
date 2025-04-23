import React from 'react';

const Filter = ({ filters, setFilters, setCurrentPage }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handlePriceChange = (e) => {
    const newPrice = parseInt(e.target.value, 10);
    setFilters(prev => ({
      ...prev,
      priceRange: [0, newPrice] // Assuming you want the max to change
    }));
    setCurrentPage(1);
  };

  return (
    <div className="filter">
      <h3>Filters</h3>
      <div>
        <label>Category:</label>
        <select name="category" onChange={handleChange}>
          <option value="">All</option>
          <option value="ethnic">Ethnic Wear</option>
          <option value="western">Western Wear</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>
      <div>
        <label>Size:</label>
        <select name="size" onChange={handleChange}>
          <option value="">All</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
        </select>
      </div>
      <div>
        <label>Color:</label>
        <select name="color" onChange={handleChange}>
          <option value="">All</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </div>
      <div>
        <label>Price Range:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={filters.priceRange[1]}
          onChange={handlePriceChange}
        />
      </div>
    </div>
  );
};

export default Filter;