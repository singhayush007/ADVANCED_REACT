import React from 'react'

const withCardLook = (WrappedComponent) => {
  return (
    // <div>withCardLook</div>

  )=> {
    return (
        <div className='bg-red-700'>
         <WrappedComponent/>
        </div>

    )
  }
}

export default withCardLook