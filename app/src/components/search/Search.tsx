"use client";
import React, { useState } from "react";
import Kind from "../kind/Kind";
import "./search.css";
import Mapeo from "../Mapeo/Mapeo";

export default function Search() {
  const [filters, setFilters] = useState({});

  const handleKindClick = (kind: string) => {
    console.log({kind})
    setFilters({
      kind,
    });
  };

  return (
    <>
      <div className="searchContainer">
        <Kind
          img="https://via.placeholder.com/150"
          title="Anillos"
          onClick={handleKindClick}
        />
        <Kind
          img="https://via.placeholder.com/150"
          title="Collares"
          onClick={handleKindClick}
        />
        <Kind
          img="https://via.placeholder.com/150"
          title="Pulceras"
          onClick={handleKindClick}
        />
      </div>
      <Mapeo filters={filters} />
    </>
  );
}
