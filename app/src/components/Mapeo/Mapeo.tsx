"use client";
import React, { useEffect, useState, useRef } from "react";
import { useFetch } from "../../services/productService";
import "../../style/card.css";
import { Product } from "../../services/type";
import Card from "../Card/Card";

export default function Mapeo({filters}: any) {
  const url = `/product?${filters}`;
  const { data, error } = useFetch(url);
  const [products, setProducts] = useState<Product[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data) {
      setProducts([...data, ...data, ...data]);
    }
  }, [data]);

  useEffect(() => {
    const slider = sliderRef.current;

    const handleScroll = () => {
      if (slider) {
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
          slider.scrollLeft = slider.scrollWidth / 3;
        } else if (slider.scrollLeft <= 0) {
          slider.scrollLeft = slider.scrollWidth / 3;
        }
      }
    };

    if (slider) {
      slider.scrollLeft = slider.scrollWidth / 3;
      slider.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (slider) {
        slider.removeEventListener("scroll", handleScroll);
      }
    };
  }, [products]);

  if (error) {
    return (
      <div>
        {"Error al cargar los productos"}
      </div>
    );
  }

  if (products.length === 0) {
    return <div>No hay productos</div>;
  }

  return (
    <>
      <h2 className="title">Recién agregado</h2>
      <div className="sliderProduct" ref={sliderRef}>
        {products.map((product, index) => (
          <Card product={product} key={index} />
        ))}
      </div>
    </>
  );
}
