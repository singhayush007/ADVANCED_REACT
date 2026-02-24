import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Not Selected');
  const [serch, setSearch] = useState("");


  const filteredPrducts = products.filter((p) =>
    p.name.toLowerCase().includes(serch.toLowerCase())
  )

  const handelClick = (item) => {
    const message = `${item} is selected...`
    setMessage(message);
  };


  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br /><br />


      <input value={serch} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..." />

      <ProductList products={filteredPrducts} onClick={handelClick} />

      <h1>{message}</h1>
      
    </>


  )
}

export default App
