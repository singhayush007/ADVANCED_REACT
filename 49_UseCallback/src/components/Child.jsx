import React, {memo} from 'react'

const Child = ({handleClick2}) => {
    console.log("Child Rendering...")
  return (
    <h1 className='child'>Child</h1>
  )
}

export default memo(Child)