// import { useState } from 'react'
// import './App.css'

// function App() {
//   const array = ["John" , "Alex" , "Royce"]

//   return (
//     <>
//     <h1>List Rendering</h1>
//       {
//         array.map((item)=>{
//           return <h1>{item}</h1>
//         })
//       }
//     </>
//   )
// }

// export default App

// import React from "react";

// const App = () => {
  // const array = [
  //   { id: 1, name: "Alex", age: 22 },
  //   { id: 2, name: "John", age: 33 },
  //   { id: 3, name: "Roy", age: 32 },
  //   { id: 4, name: "Martin", age: 23 },
  // ];
//   return (
//     <div>
//       {array.map((user) => {
//         return (
//           <div className="bg-[lightseagreen] mt-5">
//             <p> id= {user.id}</p>
//             <p> name={user.name}</p>
//             <p> age={user.age}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default App;




// import React from 'react'

// const App = () => {

//   const array = [["html" , "css" , "react" , "javascript"],['mongodb' , 'node js' , 'express js' , 'aws']]

//   return (
//     <div>
//       {
//         array.map((arrItem , index)=>(
//           <div key={index}>{arrItem.map((item, index)=>{
//             return (
//               <h1 key={index}>{item}</h1>
//             )
//           })}</div>
//         ))
//       }
//     </div>
//   )
// }

// export default App








// import React from "react";

// const App = () => {
  // const person = [
  //   { id: 1, name: "Alex", age: 22 },
  //   { id: 2, name: "John", age: 33 },
  //   { id: 3, name: "Roy", age: 32 },
  //   { id: 4, name: "Martin", age: 23 },
  // ];

//   return (
//     <div>
//       <ul>
//         {person.map((item, index) => {
//           return (
//             <li key={item.id}>
//               Name: {item.name} | Age: {item.age}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default App;




// import React from 'react';
// import UserCard from './UserCard';

// const App = () => {
//   const person = [
//     { id: 1, name: "Alex", age: 22 },
//     { id: 2, name: "John", age: 33 },
//     { id: 3, name: "Roy", age: 32 },
//     { id: 4, name: "Martin", age: 23 },
//   ];

//   return (
//     <div>
//       {person.map((p) => (
//         <UserCard key={p.id} personDetails={p} />
//       ))}
//     </div>
//   );
// };

// export default App;



import React from 'react'
import UserCard from './UserCard';

const App = () => {

  const arr = [
    { id: 1, name: "Alex", age: 16 },
    { id: 2, name: "John", age: 33 },
    { id: 3, name: "Roy", age: 32 },
    { id: 4, name: "Martin", age: 23 },
  ];
  return (
    <div>
      {
        arr.map((user)=>{
          return (
          user.age > 18 && <UserCard key={user.id} userDetails={user}/>
        )})
      }
    </div>
  )
}

export default App
