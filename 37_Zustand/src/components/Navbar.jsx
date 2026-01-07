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


import { useEffect } from "react";
import useMyStore from "../store";

const Navbar = () => {


    // Ynha per sabka subscription le skte ho
    // const {count , increment , capitalizeName} = useMyStore();


    // Ya phir pure state ka le skte ho

    const count  = useMyStore(state => state.count);
   const increment  = useMyStore(state => state.increment);
   const capitalizeName  = useMyStore(state => state.capitalizeName);

    // const state = useMyStore();
    // console.log(state);
    // const handleClick = ()=>{
    //     state.increment();
    // }

    useEffect (()=>{
        console.log("Re Render Done" , count)
    }, [count])

    return (
        <div className="bg-green-500 p-4">

            <p>{count}</p>
            <button onClick={increment}>INCREMENT</button>
            <button onClick={capitalizeName}>CAPITALIZE</button>
        </div>
    )
}

export default Navbar;