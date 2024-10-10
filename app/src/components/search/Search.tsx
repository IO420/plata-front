"use client";
import React, { useState } from "react";
import Kind from "../kind/Kind";
import "./search.css";
import Mapeo from "../Mapeo/Mapeo";
import { useFetch } from '../../services/productService';

export default function Search() {
  const [filters, setFilters] = useState({});
  const { data: kinds, error } = useFetch("/kind");
  const notfountimg:string = 'https://static.vecteezy.com/system/resources/previews/023/911/566/original/jewel-icon-jewelry-illustration-sign-bijouterie-symbol-or-logo-vector.jpg';

  const handleKindClick = (kind: string) => {
    console.log({ kind });
    setFilters({ kind });
  };

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      <h1 className="title">Categorias</h1>
      <div className="searchContainer">
        {kinds.map((kind: any) => (
          <Kind 
            key={kind.id_kind}
            kind={{
              ...kind,
              url: kind.url || notfountimg,
              onClick: handleKindClick,
            }}
          />
        ))}
      </div>
      <Mapeo filters={filters} />
    </>
  );
}
