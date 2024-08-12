import React from "react";
import "../../style/card.css";
import { ProductProps } from "../../services/type";

export default function Card({ product }: ProductProps) {

  if(!product){
    return null;
  }
  
  return (
    <div className="card">
        <img
          src="https://via.placeholder.com/150"
          alt="Imagen de ejemplo"
          className="cardImage"
        />
      <div className="cardHeader">
        <h2>{product.name}</h2>
      </div>
      <div className="cardBody">
        <p>{product.description}</p>
        <p>{product.price}</p>
        {/* <div>
          {product.kinds.map((kind) => (
            <p key={kind.id_kind}>{kind.name}</p>
          ))}
        </div> */}
      </div>
    </div>
  );
}
