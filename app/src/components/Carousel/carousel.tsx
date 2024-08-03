'use client'
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import '../../style/carousel.css';
import { fetchProducts, Product } from '../../services/productService';

const Carousel = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const chunkSize = 3;
  const productChunks = Array.from({ length: Math.ceil(products.length / chunkSize) }, (_, i) =>
    products.slice(i * chunkSize, i * chunkSize + chunkSize)
  );

  return (
    <div id="carouselExampleControls" className="carousel slide">
      <div className="carousel-inner">
        {productChunks.map((chunk, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div className="carousel-card-container">
              {chunk.map(product => (
                <div key={product.id_product} className="carousel-card">
                  <Card
                    title={product.name}
                    content={product.description}
                    price={product.price.toString()}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
