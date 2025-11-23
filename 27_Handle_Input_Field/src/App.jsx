// import './App.css'
// import { useState } from 'react'

// import React from 'react'

// const App = () => {
//   const [state  , setState] = useState('')
//   return (
//     <>
//     <input type="text" value={state} placeholder='Enter your name..' onChange={(e)=>{
//       setState(e.target.value)
//     }}/>
//     <h1>{state}</h1>
//     <button onClick={()=> setState('')}>Clear</button>
//     </>
//   )
// }

// export default App

// import React, { useState } from "react";

// const App = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const nameHandler = (e) => {
//     setName(e.target.value);
//   };

//   const emailHandler = (e) => {
//     setEmail(e.target.value);
//   };

//   const clearHandler = () => {
//     setName("");
//     setEmail("");
//   };
//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Enter name"
//         value={name}
//         onChange={nameHandler}
//       />
//       <br />
//       <input
//         type="text"
//         placeholder="Enter email"
//         value={email}
//         onChange={emailHandler}
//       />
//       <br />

//       <button onClick={clearHandler}>Clear</button>
//       <br />

//       <p>{name}</p>
//       <p>{email}</p>
//     </>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     phoneNumber: "",
//   });

//   console.log(data);

//   function inputHandler(e) {
//     const { name, value } = e.target;
//     setData({
//       ...data,
//       [name]: value,
//     });
//   }

//   function clearHandler() {
//     setData({
//       name: "",
//       email: "",
//       phoneNumber: "",
//     });
//   }
//   return (
//     <>
//       <input
//         type="text"
//         name="name"
//         value={data.name}
//         placeholder="Enter Name"
//         onChange={inputHandler}
//       />

//       <br />
//       <br />

//       <input
//         type="text"
//         name="email"
//         value={data.email}
//         placeholder="Enter Email"
//         onChange={inputHandler}
//       />

//       <br />
//       <br />

//       <input
//         type="text"
//         name="phoneNumber"
//         value={data.phoneNumber}
//         placeholder="Enter PhoneNumber"
//         onChange={inputHandler}
//       />

//       <button onClick={clearHandler}>Clear</button>

//       <p>{data.name}</p>
//       <p>{data.email}</p>
//       <p>{data.phoneNumber}</p>
//     </>
//   );
// };

// export default App;



