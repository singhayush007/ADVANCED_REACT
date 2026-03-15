import React from "react";

const Navbar = () => {
  return (
    <nav>
      <h2>Logo</h2>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>Home</li>
        <li>Courses</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;