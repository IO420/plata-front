// src/services/productService.ts

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

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('http://192.168.100.7:3000/product');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error('Fetch error:', error.message);
    throw error;
  }
};
