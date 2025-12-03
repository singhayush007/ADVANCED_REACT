import React from 'react'
import C from './C'
import D from './D'

import { useMyContext } from '../MyContext'
const A = () => {

  const { count, handleIncrement } = useMyContext();
  return (
    <div className='bg-blue-500 p-10 text-black'>
      <h2>A Component</h2>
      <p>count : {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <C/>
      <D/>
      </div>
  )
}

export default A