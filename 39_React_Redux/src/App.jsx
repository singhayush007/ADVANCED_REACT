import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addToProduct, increment } from "./redux/action/productAction";
import Products from "../Products";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const handleAddToProduct = () => {
    dispatch(
      addToProduct({
        id: 1,
        name: "samsung",
      }),
    );
  };

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <>
      <h1>React Redux</h1>
      <button onClick={handleAddToProduct}>CLICK</button>
      <button onClick={handleIncrement}>INCREMENT</button>
      <Products />
    </>
  );
}

export default App;
