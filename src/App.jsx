import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./App.css";
import data from "./data";

const info = data.map((data) => {
  return (
    <Card
      key={data.id}
      data={data}
      // Possible to use {...data} spread syntax instead of  data={data}
    />
  );
});

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <div className="cards">{info}</div>
      </div>
    </>
  );
}

export default App;
