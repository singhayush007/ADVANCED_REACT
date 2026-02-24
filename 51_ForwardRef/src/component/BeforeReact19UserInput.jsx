import React from 'react'
import { forwardRef } from 'react'
import UserInput from './AfterReact19UserInput'
const Before19UserInput = (props, ref) => {
    return (
        <div>
            <input ref={ref} type='text' />
        </div>
    )
}

export default forwardRef(Before19UserInput)