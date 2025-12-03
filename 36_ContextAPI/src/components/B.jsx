import React from 'react'
import { useMyContext } from '../MyContext'
import E from './E'
import F from './F'
const B = () => {
  const { count, handleIncrement } = useMyContext();
  return (
    <div className='bg-yellow-500 p-10'>B
    <h2>B Component</h2>
    <p>count : {count}</p>
    <button onClick={handleIncrement}>Increment</button>
    <E/>
    <F/>
    </div>
  )
}

export default B