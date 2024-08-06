import React from "react";
import "../../style/card.css";
import { Product } from "../../services/type";

interface productProps{
  product:Product
}

export default function Card({product}:productProps) {
  return (
    <div className="card">
      <div className="cardHeader">
        <h2>{product.name}</h2>
      </div>
      <div className="cardBody">
        <img
          src="https://via.placeholder.com/150"
          alt="Imagen de ejemplo"
          className="cardImage"
        />
        <p>{product.description}</p>
        <p>{product.price}</p>
        <div>
          {product.kinds.map((kind) => (
            <p key={kind.id_kind}>{kind.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
