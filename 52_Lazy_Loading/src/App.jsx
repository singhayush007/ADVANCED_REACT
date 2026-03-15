import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy Pages
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const Settings = lazy(() => import("./pages/Settings.jsx"));

// Lazy Components
const Navbar = lazy(() => import("./components/Navbar.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));

function App() {
  return (
    <BrowserRouter>

      {/* Navbar Lazy Load */}
      <Suspense fallback={<h2>Loading Navbar...</h2>}>
        <Navbar />
      </Suspense>

      {/* Routes Lazy Load */}
      <Suspense fallback={<h1>Loading Page...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>

      {/* Footer Lazy Load */}
      <Suspense fallback={<h2>Loading Footer...</h2>}>
        <Footer />
      </Suspense>

    </BrowserRouter>
  );
}

export default App;