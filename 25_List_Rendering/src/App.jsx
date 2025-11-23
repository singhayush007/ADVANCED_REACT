// import React from 'react'

// const App = () => {
//   const array = ["Ayush" , "Mandeep" , "Snehank"]
//   return (
//     <div>
//       <h1>My list Rendering</h1>
//       {
//         array.map((item)=>{
//           return <h1 key={item}>{item}</h1>
//         })
//       }
//     </div>
//   )
// }

// export default App

// import React from "react";

// const App = () => {
//   const array = ["Ayush", "Mandeep", "Snehank"];
//   return (
//     <>
//       <h1>List Rendering</h1>
//       {array.map((item, index) => {
//         console.log(index);
//         return <h1 key={item}>{item}</h1>;
//       })}
//     </>
//   );
// };

// export default App;

// import React from "react";

// const App = () => {
//   const arr = [
//     { id: 1, name: "Ayush", age: 23 },
//     { id: 2, name: "Mandeep", age: 30 },
//     { id: 3, name: "Vansh", age: 21 },
//   ];
//   return (
//     <>
//       <h1>Array of an Object Rendering</h1>
//       {arr.map((user) => {
//         console.log(user);
//         return (
//           <div>
//             <p>{user.id}</p>
//             <p>{user.name}</p>
//             <p>{user.age}</p>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default App;

// import React from "react";

// const App = () => {
//   const array = [
//     ["HTML", "CSS", "JAVASCRIPT", "REACTJS"],
//     ["NEXTJS", "TYPESCRIPT", "MONGODB"],
//   ];
//   return (
//     <>
//       {array.map((item) => {
//         return (
//           <>
//             {item.map((nestedItem, index) => {
//               return <h1 key={index}>{nestedItem}</h1>;
//             })}
//           </>
//         );
//       })}
//     </>
//   );
// };

// export default App;

// import React from "react";
// import UserCard from "./UserCard";

// const App = () => {
//   const array = [
//     { id: 1, name: "Ayush", age: 21 },
//     { id: 2, name: "Arush", age: 23 },
//     { id: 3, name: "Alex", age: 24 },
//     { id: 4, name: "Vansh", age: 21 },
//     { id: 5, name: "Mandeep", age: 31 },
//   ];
//   return (
//    <>
//     <h1>Array Rendering Through Props</h1>
//      {array.map((user) => {
//       return (
//         <UserCard key={user.id} userInfo={user} />
//       );
//      })}
//    </>
//   );
// };

// export default App;


// import React from 'react'

// const App = () => {
//     const array = [
//     { id: 1, name: "Ayush", age: 21 },
//     { id: 2, name: "Arush", age: 23 },
//     { id: 3, name: "Alex", age: 24 },
//     { id: 4, name: "Vansh", age: 21 },
//     { id: 5, name: "Mandeep", age: 31 },
//   ];
//   return (
//     <div>
//       {
//         array.map((user)=>{
//           return user.age > 21 && <p key={user.id}>{user.name}</p>
//         })
//       }
//     </div>
//   )
// }

// export default App






