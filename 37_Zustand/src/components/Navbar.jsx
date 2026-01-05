// import React, { useEffect } from 'react'
// import useMyStore from '../store'

// const Navbar = () => {

//     // choose subscription of state carefully
//     // const { count, increment, capitalizeName } = useMyStore();
//     const count = useMyStore(state => state.count)
//     const increment = useMyStore(state => state.increment)
//     const capitalizeName = useMyStore(state => state.capitalizeName)

//     useEffect(() => {
//         console.log("re render hua kya", count)
//     })

//     return (
//         <div>
//             <p>{count}</p>
//             <button onClick={increment}>Increment</button>
//             <button onClick={capitalizeName}>Capitalize</button>
//         </div>
//     )
// }

// export default Navbar


import useMyStore from "../store";

const Navbar = () => {

    const state = useMyStore();
    console.log(state);
    const handleClick = ()=>{
        state.increment();
    }

    return (
        <div className="bg-green-500 p-4">
            Navbar - {state.name} - {state.count}
            <button onClick={handleClick}>INCREMENT</button>
        </div>
    )
}

export default Navbar;