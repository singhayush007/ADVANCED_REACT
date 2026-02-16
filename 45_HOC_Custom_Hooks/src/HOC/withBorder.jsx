import React from "react";

const withBorder = (WrappedComponent) => {
  return () => {
    return (
      <div
        style={{
          border: "3px solid black",
          padding: "15px",
          margin: "15px",
          borderRadius: "10px",
        }}
      >
        <WrappedComponent />
      </div>
    );
  };
};

export default withBorder;
