// src/components/Carousel/Carousel.tsx
import React from "react";
import { useFetch } from "../../services/productService";

const Carousel = () => {
  const { products, loading, error } = useFetch();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="slider-frame">
      <ul>
        {products.map((product) => (
          <li key={product.id_product}>
            <img src="https://via.placeholder.com/150" alt={product.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
