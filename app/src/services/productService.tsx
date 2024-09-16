// src/services/productService.ts
'use client';
import { useEffect, useState } from "react";

interface Kind {
  id_kind: number;
  name: string;
}

export interface Product {
  id_product: number;
  name: string;
  description: string;
  price: number;
  kinds: Kind[];
}

export const useFetch = () => {
  const url:string = 'http://192.168.100.7:3000/products';
  const method:string = 'GET';
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch(url, { method });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [url, method]);

  return { products, loading, error };
};
