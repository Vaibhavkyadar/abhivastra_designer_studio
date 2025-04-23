import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import RelatedProducts from '../components/RelatedProducts';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'; // Make sure this is correctly imported

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState(null);     // Add an error state

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      setError(null);
      try {
        const productResponse = await axios.get(`/api/products/${id}`);
        setProduct(productResponse.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchRelatedProductsData = async () => {
      try {
        const relatedResponse = await axios.get(`/api/products/related/${id}`);
        setRelatedProducts(relatedResponse.data);
      } catch (err) {
        //  setError(err); //  Don't set error here, as it may not be critical
        console.error("Failed to fetch related products", err);
      }
    };

    fetchProductData();
    fetchRelatedProductsData();
  }, [id]);

  if (loading) return <div>Loading...</div>; // Show loading indicator
  if (error) return <div>Error: {error.message}</div>; // Show error message
  if (!product) return <div>Product not found</div>; // Handle null product

  return (
    <div className="product-detail">
      <div className="image-gallery">
        <Zoom>
          <img src={product.image} alt={product.name} className="main-image" />
        </Zoom>
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="description">{product.description}</p>
        <h3>Fabric Details</h3>
        <p>{product.fabricDetails}</p>
        <h3>Care Instructions</h3>
        <p>{product.careInstructions}</p>
        <h3>Size Guide</h3>
        <p>{product.sizeGuide}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
      <RelatedProducts products={relatedProducts} />
    </div>
  );
};

export default ProductDetail;