// import React from "react";
// import { useState } from "react";
// const Card = () => {
//   let [count, setCount] = useState(0);

//   function Increment() {
//     // setCount(count + 1)
//     setCount((prev) => prev + 1);
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={Increment}>Increment Button</button>
//     </div>
//   );
// };

// export default Card;

import React from "react";
import { useState } from "react";
const Card = () => {
  const [count, setCount] = useState(0);

  //   function Increment() {
  //     setCount((prevCount) => {
  //       prevCount = prevCount + 1;
  //       console.log(prevCount);
  //       return prevCount;
  //     });

  // Functiional update works on current state value:
  function Increment() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment Button</button>
    </div>
  );
};

export default Card;
