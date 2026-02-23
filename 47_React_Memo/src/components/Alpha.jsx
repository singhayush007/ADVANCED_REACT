import { useEffect } from 'react'
import { memo } from 'react'
function Alpha({ data }) {

    useEffect(() => {
        console.log("Rendering Alpha")
    })
    return (
        <div>
            {data}
            <h1>Alpha</h1>
        </div>

    )
}

export default memo(Alpha, (prevProp, nextProp) => {
    return prevProp.data === nextProp.data
})