"use client";
import { useEffect, useState } from "react";

export const useFetch = (
  url: string,
  method: string = "GET",
  headers: HeadersInit = {},
  body: string = ""
) => {
  const [data, setProducts] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
    fetch(`http://192.168.100.7:3000${url}`, {
      method,
      headers,
      body: method !== "GET" && body ? body : null,
    })
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => setError(error));
    };

    fetchData();
  }, [url, method, body]);

  return { data, error };
};
