import React from "react";

const Button = ({ handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}></button>
    </div>
  );
};

export default Button;
