"use client";
import React, { useState } from "react";
import Kind from "../kind/Kind";
import "./search.css";
import Mapeo from "../Mapeo/Mapeo";
import { useFetch } from '../../services/productService';

export default function Search() {
  const [filters, setFilters] = useState({});
  const { data: kinds, error } = useFetch("/kind");

  const handleKindClick = (kind: string) => {
    console.log({kind});
    setFilters({ kind });
  };

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      <div className="searchContainer">
        {kinds.map((kind: any) => (
          <Kind
            key={kind.id_kind}
            img={kind.url}
            title={kind.name}
            onClick={handleKindClick}
          />
        ))}
      </div>
      <Mapeo filters={filters} />
    </>
  );
}
