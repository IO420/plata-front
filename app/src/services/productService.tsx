'use client'
import { useEffect, useState } from "react";

export const useFetch = (url: string, method: string) => {
  const [data, setProducts] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000${url}`, { method })
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => setError(error));
  }, [url, method]);

  return { data, error };
}
