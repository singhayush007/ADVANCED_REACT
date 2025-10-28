// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   const isLogin = true

//   if(isLogin){
//     return (
//       <div>
//         <h1>Welcome back ! You are loggedin !</h1>
//       </div>
//     )
//   }

//   return (
//     <>
//       <h1>PLease Login</h1>
//     </>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {

//   const isLogin = false;
//   return (
//     <div>
//       {isLogin ? <h1>Logged In</h1> : <h1>Please Logged In</h1>}
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   const hasMessage  = "Hi"
//   return (
//     <div>
//       {
//         hasMessage ? <h1>{hasMessage}</h1> : null
//       }
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {

//   const hasMessage = "Hello"
//   return (
//     <div>
//       {
//         hasMessage && <h1>{hasMessage}</h1> && <h1>No Mesaage</h1>
//       }
//     </div>
//   )
// }

// export default App

// import React from "react";
// import ComponentA from "./component/ComponentA";
// import ComponentB from "./component/ComponentB";
// import ComponentC from "./component/ComponentC";

// const App = () => {
//   const option = "a";
//   let content = <h1>Hello Condition ! How are you? </h1>;

//   if (option === "a") {
//     content = <ComponentA />;
//   } else if (option === "b") {
//     content = <ComponentB />;
//   } else {
//     content = <ComponentC />;
//   }
//   return <div>{content}</div>;
// };

// export default App;

// import React from "react";

// const App = () => {
//   let isActive = true;

//   return (
//     <div>
//       <button className={isActive ? "btn-active" : "btn-inactive"}>
//         Button
//       </button>
//     </div>
//   );
// };

// export default App;

// import React from 'react'

// const App = () => {
//   const color = "green";

//   return (
//     <div className={`${color === 'green' ? 'bg-green-500' : 'bg-red-500'}`}>
//       {/* content yahan aa sakta hai */}
//       <h1 className="text-white p-4">Color Box</h1>
//     </div>
//   )
// }

// export default App








// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [toggle, setToggle] = useState(true);
//   if(!toggle) return null;
//   return (
//     <div>
//       {toggle ? <h1>Toggle True</h1> : <h1>Toggle False</h1>}

//       <button
//         onClick={() => {
//           setToggle(!toggle);
//         }}
//       >Toggle Button</button>
//     </div>
//   );
// };

// export default App;




// import React from 'react'
// import ComponentA from "./component/ComponentA";
// import ComponentB from "./component/ComponentB";
// import ComponentC from "./component/ComponentC";
// const App = () => {
  
//   const option = 'a'
//   const Comp = option === 'a' ? ComponentA : ComponentB
//   return (
//     <div>
//       <Comp/>
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {

//   function StatusMesaage({status}){
//     switch(status){
//       case "loading" : 
//       return <p>Loadig</p>
//       case "success":
//         return <p>Data Loaded Successfully</p>
//         case "errro":
//           return <p>Something went Wrogn</p>
//           deafult : 
//           return <p>Idle State...</p>
//     }
//   }

//   const status = "success"
//   return (
//     <div>
//       {
//         <StatusMesaage status={status}/>
//       }
//     </div>
//   )
// }

// export default App




import React, { useState } from 'react';

const App = () => {
  // State to store current status
  const [statusOption, setStatusOption] = useState('Loading');

  // Mapping object
  const status = {
    Loading: <h1>Loading...</h1>,
    Error: <h1>Error has Come</h1>,
    Success: <h1>Success Full</h1>
  };

  return (
    <div className="text-center mt-10">
      {/* Display current status */}
      {status[statusOption]}

      <div className="flex gap-4 mt-4 justify-center">
        <button onClick={() => setStatusOption('Loading')}>Loading</button>
        <button onClick={() => setStatusOption('Error')}>Error</button>
        <button onClick={() => setStatusOption('Success')}>Success</button>
      </div>
    </div>
  );
};

export default App;

