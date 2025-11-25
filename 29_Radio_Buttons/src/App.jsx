// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [gender, setGender] = useState ("female")

//   const changeHandler = (e)=>{
//     const {type , name , value} = e.target;
//     setGender(e.target.value);
//     console.log(e.target.value);
//   }

//   return (
//     <>
//       <label htmlFor="male">
//         <input
//         type="radio"
//         id='male'
//         name='group'
//         value='male'
//         onChange={changeHandler}
//         checked={gender === "male"}
//          />
//          Male
//       </label>
//        <label htmlFor="female">
//         <input
//         type="radio"
//         id='female'
//         name='group'
//         value='female'
//         onChange={changeHandler}
//         checked={gender === "female"}
//          />
//          Female
//       </label>
//       <label htmlFor="others">
//         <input
//         type="radio"
//         id='others'
//         name='group'
//         value='others'
//         onChange={changeHandler}
//         checked={gender === "others"}
//          />
//          Others
//       </label>

//       <h3>Selected : {gender}</h3>
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react';
// import './App.css';

// const App = () => {
//   const [gender, setGender] = useState("");

//   const changeHandler = (e) => {
//     setGender(e.target.value);
//   };

//   const options = ["male", "female", "others"];

//   return (
//     <>
//       {options.map((item) => (
//         <label htmlFor={item} key={item}>
//           <input
//             type="radio"
//             id={item}
//             name="gender"
//             value={item}
//             onChange={changeHandler}
//             checked={gender === item}
//           />
//           {item}
//         </label>
//       ))}

//       <h3>Selected: {gender}</h3>
//     </>
//   );
// };

// export default App;

// import React from "react";
// import { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [selectedMode, setSelectedMode] = useState({
//     id: "UPI",
//     info: "Instant transfer via upi apps",
//   });
//   const payments = [
//     { id: "UPI", info: "Instant transfer via upi apps" },
//     { id: "Card", info: "Pay using credit or debit card" },
//     { id: "COD", info: "pay when the order arrives" },
//   ];

//   const changeHandler = (e) => {
//     const selected = payments.find((p) => p.id === e.target.value);
//     setSelectedMode(selected);
//     console.log(selected);
//   };
//   return (
//     <div className="select-none">
//       {payments.map((item) => {
//         return (
//           <label htmlFor="item.id" key={item.id}>
//             <input
//               type="radio"
//               id="item.id"
//               onChange={changeHandler}
//               checked={selectedMode.id === item.id}
//               value={item.id}
//               name="payment"
//             />
//             {item.id}
//           </label>
//         );
//       })}
//       <p>Mode of Payment : {selectedMode.id}</p>
//       <p>Info of Payment: {selectedMode.info}</p>
//     </div>
//   );
// };

// export default App;





import { useState } from 'react'
import './App.css'

function App() {

    const [selectedMode, setSelectedMode] = useState({ id: 'UPI', info: 'Instant transfer via upi apps' });
    console.log(selectedMode)

    const payments = [
        { id: 'UPI', info: 'Instant transfer via upi apps' },
        { id: 'Card', info: 'pay using credit or debit card' },
        { id: 'COD', info: 'pay when the order arrives' },
    ]

    return (
        <div className='select-none'>

            {payments.map(item => {
                return (
                    <label key={item.id} htmlFor={item.id}>
                        <input
                            id={item.id}
                            type="radio"
                            name='payments'
                            value={item.id}
                            checked={selectedMode.id === item.id}
                            onChange={() => setSelectedMode(item)}
                        />
                        {item.id}
                    </label>
                )
            })}

            <p>Mode of payment : {selectedMode.id}</p>
            <p>Details :  {selectedMode.info}</p>

        </div>
    )
}

export default App