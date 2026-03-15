import React from "react";
import { Virtuoso } from "react-virtuoso";

const VirtuosoList = ({ list }) => {

  return (
    <Virtuoso
      style={{ height: "300px", border: "1px solid black" }}
      totalCount={list.length}
      itemContent={(index) => (
        <div
          style={{
            padding: "10px",
            borderBottom: "1px solid gray"
          }}
        >
          Item {list[index]}
        </div>
      )}
    />
  );
};

export default VirtuosoList;