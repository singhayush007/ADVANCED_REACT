import React from 'react'

const Button = ({color , selection , children}) => {
    console.log(color);

    function setColor(){
       selection(color)
    }
  return (
    <div>
      <button onClick={setColor} style={{backgroundColor: color}}>{children}</button>
    </div>
  )
}

export default Button
