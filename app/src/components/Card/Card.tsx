import React from "react";
import "../../style/card.css";
import { ProductProps } from "../../services/type";

export default function Card({ product }: ProductProps) {
  if (!product) {
    return null;
  }

  const defaultImage = "https://static.vecteezy.com/system/resources/previews/023/911/566/original/jewel-icon-jewelry-illustration-sign-bijouterie-symbol-or-logo-vector.jpg";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultImage;
  };

  return (
    <div className="card">
      <img
        src={`http://192.168.100.7:3000/imagenes/${product.url}` || defaultImage}
        alt={product.name}
        className="cardImage"
        onError={handleImageError}
      />
      <div className="cardHeader">
        <h2>{product.name}</h2>
      </div>
    </div>
  );
}
