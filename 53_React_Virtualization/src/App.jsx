import React from "react";
import Virtualisation from "./Virtualisation";
import VirtuosoList from "./Virtuoso";

function App() {

  const list = Array.from({ length: 1000 }, (_, i) => i + 1);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Virtualization Demo</h1>

      <h2>Manual Virtualisation</h2>
      <Virtualisation list={list} height={300} itemHeight={50} />

      <hr />

      <h2>React Virtuoso Library</h2>
      <VirtuosoList list={list} />

    </div>
  );
}

export default App;