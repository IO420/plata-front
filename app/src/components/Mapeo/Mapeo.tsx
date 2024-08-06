"use client";
import React, { useEffect, useState } from "react";
import { useFetch } from "../../services/productService";
import "../../style/card.css";
import { Product } from "../../services/type";
import Card from "../Card/Card";

export default function Mapeo() {
  const url = "/product";
  const method = "GET";
  const { data, error } = useFetch(url, method);
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
    <div className="flex">
      {products.map((product) => (
        <Card
        product={product}
        key={product.id_product}
        />
      ))}
    </div>
  );
}
