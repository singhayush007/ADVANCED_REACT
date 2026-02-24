import React, { useState } from 'react'
import Child from './components/Child'
import { useCallback } from 'react'
const App = () => {

  const [count , setCount] = useState(0);
  const [data , setData] = useState('Ayush Singh');

  console.log("Parent Rendering...")

  // Normal Function (Recreated on every re-render)

  const handleClick1 = () => {
    console.log("Handle Click 1 Called")
  }

  // Memoized Function (use Same referecne between renders unless dependencies change)

  const handleClick2 = useCallback(()=>{
    console.log("Handle Click 2 Called")
  }
  ,[count])
  return (
    <div>
      Parent Component
      <button onClick={()=> setCount(count+ 1)}>Count: {count} </button>
      <Child handleClick2={handleClick2}/>
    </div>
  )
}

export default App
