import React from "react";
import Hero from "./Hero";
import About from "./About";
const Layout = ({ data , sendData }) => {
  function handleClick() {
    sendData("Ayush Singh");
  }
  return (
    <div className=" p-[2rem] h-[30vh] bg-yellow-500">
      Layout
      <h2>Child Component (LAYOUT)</h2>
      <button onClick={handleClick}>Send Data to Parent</button>
      <Hero data={data} />
      <About data={data} />
    </div>
  );
};

export default Layout;
