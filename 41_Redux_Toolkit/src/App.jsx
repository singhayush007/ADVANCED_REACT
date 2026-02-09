import { useState } from "react";
import "./App.css";
import Counter from "./store/components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./store/features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.counter.value);
  console.log(state);

  return (
    <>
      <Counter />
      <input
        type="text"
        onChange={(e) => dispatch(changeName(e.target.value))}
      />
      <Users/>
    </>
  );
}

export default App;
