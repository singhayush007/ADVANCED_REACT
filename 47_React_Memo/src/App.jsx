import { useEffect, useState } from 'react'
import './App.css'
import Alpha from './components/Alpha'
function App() {
  const [count, setCount] = useState(0)
  const [name , setName] = useState("")


  useEffect(() => {
    console.log("Parent Rendering : App")
  },)

  const Object = {
    name: "Ayush Singh"
  }

  return (
    <>
      {/* <Alpha count={count}/> */}
      <Alpha data={Object.name}/>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Name'/>
    </>
  )
}

export default App
