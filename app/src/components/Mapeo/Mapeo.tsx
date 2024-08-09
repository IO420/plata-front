"use client";
import React, { useEffect, useState } from "react";
import { useFetch } from "../../services/productService";
import "../../style/card.css";
import { Product } from "../../services/type";
import Card from "../Card/Card";

export default function Mapeo() {
  const url = "/product";
  const { data, error } = useFetch(url);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  if (error) {
    return (
      <div>
        {error} || {"error"}
      </div>
    );
  }

  if (products.length === 0) {
    return <div>No hay productos</div>;
  }

  return (
    <>
    <h2 className="title">Recien agragado</h2>
      <div className="sliderProduct">
        {products.map((product) => (
          <Card product={product} key={product.id_product} />
        ))}
      </div>
    </>
  );
}
