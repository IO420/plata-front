import React from "react";
import Mapeo from "./src/components/Mapeo/Mapeo";
import Header from "./src/components/Header/Header";
import Slider from "./src/components/Slider/Slider";
import Footer from "./src/components/Footer/Footer";
import Search from "./src/components/search/Search";
import Websocket from "./src/components/ws/Websocket";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <Search/>
        <Websocket/>
      </main>
      <Footer/>
    </>
  );
}
