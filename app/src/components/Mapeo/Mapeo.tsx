"use client";
import React, { useEffect, useState, useRef } from "react";
import { useFetch } from "../../services/productService";
import "../../style/card.css";
import { Product } from "../../services/type";
import Card from "../Card/Card";

interface mapeoProps{
  filters:any;
  title:string;
}

export default function Mapeo(mapeoProps:mapeoProps) {
  const url = `/product?${mapeoProps.filters}`;
  const { data, error } = useFetch(url);
  const [products, setProducts] = useState<Product[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data) {
      setProducts([...data]);
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

  // if (error) {
  //   return (
  //     <div>
  //       {"Error al cargar los productos"}
  //     </div>
  //   );
  // }


  return (
    <>
      <h1 className="title">{mapeoProps.title}</h1>
      <div className="sliderProduct" ref={sliderRef}>
        {products.map((product, index) => (
          <Card product={product} key={index} />
        ))}
      </div>
    </>
  );
}
