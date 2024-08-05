import React from 'react';
import Mapeo from './src/components/Mapeo/Mapeo'
import Header from "./src/components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <Mapeo/>
      </div>
    </>
  );
}
