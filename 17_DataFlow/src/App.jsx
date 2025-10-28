import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
function App() {
  const [data, setData] = useState("John Doe");
  const [name, setName] = useState("Alice");

  function handleDataFromChild(newName) {
    console.log("Date from child:", newName);
    setName(newName);
  }
  console.log(data);
  return (
    <>
      <h1>Parent Component (APP)</h1>
      <p>Current Name: {name}</p>
      <Header data={data} />
      <Layout data={data} />
      <Footer data={data} sendData={handleDataFromChild} />
    </>
  );
}

export default App;
