import { useSelector } from "react-redux";
import React, { useEffect } from "react";
const Products = () => {
  const products = useSelector((state) => state.productReducer.products);
  // console.log(state);

  // useEffect(() => {
  //   console.log("Re Render Done");
  // });
  return <div>{JSON.stringify(products)}</div>;
};

export default Products;
