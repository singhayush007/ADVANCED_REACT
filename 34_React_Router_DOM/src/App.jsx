import { useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Help from "./components/Help";
import Service from "./components/Service";
import UserDetails from "./components/UserDetails";
import A1 from "./components/A1";
import B1 from "./components/B1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />}>
          <Route path="a1" element={<A1 />} />
          <Route path="b1" element={<B1 />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:id" element={<UserDetails />} />

        <Route path="/help" element={<Navigate to="/" replace />} />

        <Route path="/service" element={<Service />} />
      </Routes>
    </>
  );
}

export default App;
