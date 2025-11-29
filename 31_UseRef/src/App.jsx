// import {useRef } from 'react'
// import './App.css'

// function App() {
//    const inputRef  = useRef()

//    const focusHandler = ()=>{
//     inputRef.current.focus()
//    }

//   return (
//     <>
//      <input ref={inputRef} type="text" placeholder='Enter Name' />
//      <button onClick={focusHandler}>CLICK</button>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import { useRef } from 'react'
// const App = () => {
//   const divRef = useRef()

//   const handleClick = ()=>{
//     divRef.current.style.backgroundColor = 'blue'
//     divRef.current.style.borderRadius = "100%"
//   }
//   return (
//     <>
//     <div ref={divRef} className='bg-red-500 h-40 w-40 '></div>
//     <button onClick={handleClick}>CLICK</button>
//     </>
//   )
// }

// export default App






// import React, { useState, useRef } from "react";

// const App = () => {
//   // 1️⃣ Normal Variable (NOT persistent)
//   let normalCount = 0;

//   // 2️⃣ useState (Persistent + Re-render)
//   const [stateCount, setStateCount] = useState(0);

//   // 3️⃣ useRef (Persistent + No Re-render)
//   const refCount = useRef(0);

//   return (
//     <div style={{ padding: "20px" }}>
//       {/* Normal variable */}
//       <h2>Normal Variable: {normalCount}</h2>
//       <button
//         onClick={() => {
//           normalCount++;
//           console.log("Normal variable:", normalCount);
//         }}
//       >
//         Increment Normal Variable
//       </button>

//       <br /><br />

//       {/* useState */}
//       <h2>useState: {stateCount}</h2>
//       <button onClick={() => setStateCount(stateCount + 1)}>
//         Increment useState
//       </button>

//       <br /><br />

//       {/* useRef */}
//       <h2>useRef: {refCount.current}</h2>
//       <button
//         onClick={() => {
//           refCount.current++;
//           console.log("useRef:", refCount.current);
//         }}
//       >
//         Increment useRef
//       </button>
//     </div>
//   );
// };

// export default App;





// 🔴 Example: Normal Variable se “state update” karna (Ghalat Approach)
/*
import React from 'react'

const App = () => {
   const handleIncrement = ()=>{
      count = count + 1;
      console.log("Count" , count);
    }
  let count = 0;
  return (
    <>
    <h1>Count : {count}</h1>
    <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default App
*/

// 🟢 Example: useState se state update karna (Sahi approach)
/*
import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count , setCount] = useState(0);
  const handleIncrement = ()=>{
    setCount(count + 1);
  }
  return (
    <>
    <h1>Count : {count}</h1>
    <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default App
*/


// 🟣 Example: useRef se value update karna (NO re-render)

// import React from 'react'
// import { useRef , useState } from 'react';

// const App = () => {
//   const countRef = useRef(0);
//   const [uiCount , setUiCount] = useState(0);

//   const handleIncrement = ()=>{
//       countRef.current = countRef.current + 1;
//       console.log("Ref Count: " , countRef.current)
//       setUiCount(uiCount + 1);
//   }
//   return (
//     <>
//     <h1>UI Count (useState) : {uiCount}</h1>
//     <h2>Ref Count (useRef - no re-render) : {countRef.current}</h2>
//     <button onClick={handleIncrement}>Increment</button>
//     </>
//   )
// }

// export default App



import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [randomNumber, setRandomNumber] = useState(0);
  const renderCountRef = useRef(0);

  const generateRandomNumber = () => {
    const no = Math.floor(Math.random()*100);
    setRandomNumber(no)
  }

  useEffect(()=>{
    console.log("re render trigger hua hai")
    renderCountRef.current += 1
  })

  return (
    <>
      <h1>{randomNumber}</h1>
      <h1>Re-render Count : {renderCountRef.current}</h1>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
    </>
  )
}

export default App