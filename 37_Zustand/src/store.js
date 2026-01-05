// import { create } from 'zustand'
// import { createJSONStorage, devtools, persist } from 'zustand/middleware'

// const store = (set, get) => ({
//     count: 1,
//     name: 'manas kumar lal',
//     increment: () => {
//         set((state) => ({
//             count: state.count + 1
//         }))
//     },
//     capitalizeName: () => {
//         const { name } = get();
//         set({
//             name: name.charAt(0).toUpperCase() + name.slice(1)
//         })
//     }
// })

// const useMyStore = create(
//     devtools(
//         persist(store, {
//             name: 'My Store'
//         })
//     )
// )
// export default useMyStore;


// ZUSTAND TOOLKIT
// 1: First Step : Create a store 
// 2 :Use the store in yoour Components 
// While in Context API we have to create , Provide and then Update.



import { create } from 'zustand'

const useMyStore = create ((set)=>({
    // SET ek function hai jo merge karta hai naye state ko purane state ke saath
    name : 'Ayush Singh',
    count : 1,
    increment : ()=>{
        set({
            count : 2
        })
    }
}))

export default useMyStore;