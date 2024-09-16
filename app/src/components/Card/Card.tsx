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
          src={product.url||"https://static.vecteezy.com/system/resources/previews/023/911/566/original/jewel-icon-jewelry-illustration-sign-bijouterie-symbol-or-logo-vector.jpg"}
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
