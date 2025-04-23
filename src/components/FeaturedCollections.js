import React from 'react';

const FeaturedCollections = () => {
  const collections = ['Ethnic Wear', 'Western Wear', 'Accessories'];
  return (
    <div className="featured-collections">
      {collections.map((collection) => (
        <div key={collection} className="collection">
          <h3>{collection}</h3>
          <img src={`/path/to/${collection}.jpg`} alt={collection} />
        </div>
      ))}
    </div>
  );
};

export default FeaturedCollections;