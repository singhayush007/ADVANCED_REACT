// React se context banane ka function import kar rahe hain
// import { createContext } from "react";
// Context create kar rahe hain
// const MyContext =  createContext();
// Context ko export kar rahe hain taaki dusre components mein use kar sakein
// export default MyContext;

// import { createContext, useContext } from "react";
// import { useState } from "react";
// export const MyContext = createContext();

// export const MyContextProvider = ({ children }) => {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount((prev) => prev + 1);
//   };

//   return (
//     <MyContext.Provider value={"Hello from Context API"}>
//       {children}
//     </MyContext.Provider>
//   );
// };

// export const useMyContext = () => {
//   return useContext(MyContext);
// };

import { createContext, useContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  return (
    <MyContext.Provider value={{ count, handleIncrement }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);

