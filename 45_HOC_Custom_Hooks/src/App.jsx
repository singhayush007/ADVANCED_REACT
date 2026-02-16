// This is for HOC

// import withCardLook from './HOC/withCardLook'
// import Alpha from './components/Alpha';
// import Beta from './components/Beta';
// import './App.css'

// function App() {
//   const AlphaCardLook = withCardLook(Alpha);
//   const BetaCardLook = withCardLook(Beta)
//   return (
//     <>
//       <AlphaCardLook />
//       <BetaCardLook/>
//     </>
//   )
// }

// export default App



// import React from 'react'
// import Alpha from './components/Alpha';
// import Beta from './components/Beta';
// import withBorder from './HOC/withBorder';
// const App = () => {
//   const AlphaWithborder = withBorder(Alpha);
//   const BetaWithborder = withBorder(Beta)
//   withBorder(Beta);
//   return (
    
//     <>
//     <AlphaWithborder/>
//     <BetaWithborder/>
//     </>
//   )
// }

// export default App




// This is For Custom Hooks


import { useState } from 'react'
import './App.css'
import { useCounter } from './Custom Hook/useCounter'
import { useCardLook } from './Custom Hook/useCardLook'
import Alpha from './components/Alpha'

// complex logic & complex ui reuse

function App() {

  const [inputValue, setInputValue] = useState('');
  const { count, increment, decrement, setByValue } = useCounter(0)

  const AlphaWithCardLook = useCardLook(Alpha)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <input
        type= 'number'
        value={inputValue}
        placeholder='Enter Value'
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => setByValue(inputValue)}>Set Value</button>

      <AlphaWithCardLook user="Ayush Singh"/>
    </>
  )
}

export default App