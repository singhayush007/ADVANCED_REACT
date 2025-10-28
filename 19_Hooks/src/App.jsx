import { useState } from "react";

import "./App.css";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [decVal, setDecVal] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("Hello Welcome to side effect of useEffect Hook");
  }, [decVal]);
  return (
    <>
      <p>Hello useEffect Hook</p>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment Count</button>

      <p>Hello useEffect Hook</p>
      <h1>{decVal}</h1>
      <button
        onClick={() => {
          setDecVal(decVal - 1);
        }}
      >
        Decrement Count
      </button>
    </>
  );
}

export default App;
