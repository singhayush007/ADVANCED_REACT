import React from "react";
import Wrapper from "./Wrapper";

const Category = () => {
  const categories = [
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];
  return (
    <Wrapper>
      <div className="max-w-full w-fit m-auto flex overflow-x-auto px-4 scrollbar-none gap-5 mt-4">
        {categories.map((category) => {
          return (
            <button key={category} className="btn btn-primary">
              {category}
            </button>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Category;
