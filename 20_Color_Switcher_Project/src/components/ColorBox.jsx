import React from "react";

const ColorBox = ({ color }) => {
  return (
    <div
      className="m-auto w-[300px] h-[300px] rounded-2xl font-extrabold flex items-center justify-center text-white text-2xl transition-colors duration-300"
      style={{ backgroundColor: color }}
    >
      {color.toUpperCase()}
    </div>
  );
};

export default ColorBox;
