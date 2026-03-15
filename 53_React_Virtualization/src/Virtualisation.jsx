import React, { useState } from "react";

const Virtualisation = ({ list, height, itemHeight }) => {

  const numberOfVisibleItems = Math.ceil(height / itemHeight) + 2;

  const [indices, setIndices] = useState([0, numberOfVisibleItems]);

  const visibleList = list.slice(indices[0], indices[1]);

  const handleScroll = (event) => {

    const { scrollTop } = event.target;

    const newStartingIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = newStartingIndex + numberOfVisibleItems;

    setIndices([newStartingIndex, endIndex]);
  };

  return (
    <div
      style={{
        height: height,
        overflowY: "auto",
        border: "1px solid black"
      }}
      onScroll={handleScroll}
    >
      <div
        style={{
          height: list.length * itemHeight,
          position: "relative"
        }}
      >
        <div
          style={{
            transform: `translateY(${indices[0] * itemHeight}px)`
          }}
        >
          {visibleList.map((item) => (
            <div
              key={item}
              style={{
                height: itemHeight,
                borderBottom: "1px solid gray",
                padding: "10px"
              }}
            >
              Item {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Virtualisation;