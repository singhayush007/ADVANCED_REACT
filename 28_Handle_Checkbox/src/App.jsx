// import { useState } from "react";

// const App = () => {
//   const [isChecked, setIsChecked] = useState('');

//   const onChange = (e) => {
//     setIsChecked(e.target.checked);
//     console.log(e.target.checked)
//   };
//   return (
//     <>
//       <label htmlFor="terms">
//         <input
//           id="terms"
//           type="checkbox"
//           checked={isChecked}
//           onChange={onChange}
//         />
//         Terms and Condition
//       </label>
//     </>
//   );
// };

// export default App;

// import React from "react";
// import { useSyncExternalStore } from "react";
// import { useState } from "react";

// const App = () => {
//   const [isHtml, setIsHtml] = useState("");
//   const [isCss, setIsCss] = useState("");
//   const [isJavascript, setIsJavascript] = useState("");

//   const onChangeHtml = (e) => {
//     setIsHtml(e.target.checked);
//     console.log(e.target.checked);
//   };

//   const onChangeCss = (e) => {
//     setIsCss(e.target.checked);
//     console.log(e.target.checked)
//   }

//   const onChangeJs = (e) =>{
//     setIsJavascript(e.target.checked);
//     console.log(e.target.checked)
//   }
//   return (
//     <>
//       <label htmlFor="html">
//         <input type="checkbox" id="html" checked={isHtml} onChange={onChangeHtml} />
//         HTML
//       </label>
//       <label htmlFor="css">
//         <input type="checkbox" id="css" checked={isCss} onChange={onChangeCss} />
//         CSS
//       </label>
//       <label htmlFor="js">
//         <input type="checkbox" id="js" checked={isJavascript} onChange={onChangeJs} />
//         JS
//       </label>
//     </>
//   );
// };

// export default App;

// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [languages, setLanguages] = useState({
//     html: false,
//     css: false,
//     js: false,
//   });
//   const handleChange = (e) => {
//     const key = e.target.name;

//     setLanguages({
//       ...languages,
//       [key]: e.target.checked,
//     });
//   };
//   return (
//     <div className="select-none">
//       <label htmlFor="html">
//         <input
//           id="html"
//           type="checkbox"
//           name="html"
//           checked={languages.html}
//           onChange={handleChange}
//         />
//         HTML
//       </label>
//       <label htmlFor="css">
//         <input
//           id="css"
//           type="checkbox"
//           name="css"
//           checked={languages.css}
//           onChange={handleChange}
//         />
//         CSS
//       </label>
//       <label htmlFor="js">
//         <input
//           id="js"
//           type="checkbox"
//           name="js"
//           checked={languages.js}
//           onChange={handleChange}
//         />
//         JAVA SCRIPT
//       </label>

//       {languages.html && "HTML Selected"}
//       <br />
//       {languages.css && "CSS Selected"}
//       <br />
//       {languages.js && "JS Selected"}
//     </div>
//   );
// };

// import React, { useState } from "react";

// const App = () => {
//   const [languages, setLanguages] = useState({
//     html: false,
//     css: false,
//     js: false,
//   });

//   const handleChange = (e) => {
//     const key = e.target.name;

//     if (key === "selectall") {
//       // SELECT ALL clicked
//       const value = e.target.checked;
//       setLanguages({
//         html: value,
//         css: value,
//         js: value,
//       });
//     } else {
//       // Individual checkbox clicked
//       setLanguages({
//         ...languages,
//         [key]: e.target.checked,
//       });
//     }
//   };

//   const isAllChecked = Object.values(languages).every((item) => item === true);

//   return (
//     <div className="select-none">
//       {/* SELECT ALL */}
//       <label>
//         <input
//           type="checkbox"
//           name="selectall"
//           checked={isAllChecked}
//           onChange={handleChange}
//         />
//         SELECT ALL
//       </label>

//       {/* INDIVIDUAL CHECKBOXES */}
//       <label>
//         <input
//           type="checkbox"
//           name="html"
//           checked={languages.html}
//           onChange={handleChange}
//         />
//         HTML
//       </label>

//       <label>
//         <input
//           type="checkbox"
//           name="css"
//           checked={languages.css}
//           onChange={handleChange}
//         />
//         CSS
//       </label>

//       <label>
//         <input
//           type="checkbox"
//           name="js"
//           checked={languages.js}
//           onChange={handleChange}
//         />
//         JAVA SCRIPT
//       </label>

//       {/* OUTPUT */}
//       {languages.html && "HTML Selected"} <br />
//       {languages.css && "CSS Selected"} <br />
//       {languages.js && "JS Selected"}
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [fruits, setFruits] = useState({
//     oranges: false,
//     apples: false,
//     grapes: false,
//   });

//   const handleChange = (e) => {
//     const key = e.target.name;

//     if (key === "selectall") {
//       const value = e.target.checked;
//       setFruits({
//         oranges: value,
//         apples: value,
//         grapes: value,
//       });
//     } else {
//       setFruits({
//         ...fruits,
//         [key]: e.target.checked,
//       });
//     }
//   };
//   const isAllChecked = Object.values(fruits).every((item) => item === true);

//   return (
//     <div className="select-none">
//       <label htmlFor="">
//         <input
//           type="checkbox"
//           name="selectall"
//           checked={isAllChecked}
//           onChange={handleChange}
//         />
//         SELECT ALL
//       </label>
//       <label htmlFor="">
//         <input
//           type="checkbox"
//           name="oranges"
//           checked={fruits.oranges}
//           onChange={handleChange}
//         />
//         ORANGES
//       </label>
//       <label htmlFor="">
//         <input
//           type="checkbox"
//           name="grapes"
//           checked={fruits.grapes}
//           onChange={handleChange}
//         />
//         GRAPES
//       </label>
//       <label htmlFor="">
//         <input
//           type="checkbox"
//           name="apples"
//           checked={fruits.apples}
//           onChange={handleChange}
//         />
//         APPLES
//       </label>
//       {/* OUTPUT */}
//       {fruits.oranges && "ORANGES Selected"} <br />
//       {fruits.apples && "APPLES Selected"} <br />
//       {fruits.grapes && "GRAPES Selected"}
//     </div>
//   );
// };

// export default App;

// import { useState } from 'react'
// import './App.css'

// function App() {

//   const [formData, setFormData] = useState({
//     email: '',
//     tc: false,
//   })

//   const handleChange = (e) => {
//     const { name, value, checked, type } = e.target;

//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value
//     })
//   }

//   function submitHandler(e){
//     e.preventDefault()
//     console.log(formData)
//   }

//   return (
//     <div className='select-none'>

//       <form onSubmit={submitHandler}>

//         <input
//           type="email"
//           placeholder='Enter email'
//           name='email'
//           value={formData.email}
//           onChange={handleChange}
//         />

//         {/* terms and conditions */}
//         <label htmlFor='tc'>
//           <input
//             id='tc'
//             type="checkbox"
//             name={'tc'}
//             checked={formData.tc}
//             onChange={handleChange}
//           />
//           Terms and conditions
//         </label>

//         <button type="submit">Submit</button>
//       </form>

//     </div>
//   )
// }

// export default App;

// import React, { useState } from 'react';

// const App = () => {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     termsCondition: false
//   });

//   const handleChange = (e) => {
//     const { type, name, value, checked } = e.target;

//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value
//     });
//   }

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   }

//   return (
//     <div>
//       <form onSubmit={submitHandler}>

//         <input
//           type="text"
//           placeholder='Enter name...'
//           name='name'
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <input
//           type="email"
//           placeholder='Enter email...'
//           name='email'
//           value={formData.email}
//           onChange={handleChange}
//         />

//         <input
//           type="password"
//           placeholder='Enter password...'
//           name='password'
//           value={formData.password}
//           onChange={handleChange}
//         />

//         <input
//           type="checkbox"
//           name="termsCondition"
//           checked={formData.termsCondition}
//           onChange={handleChange}
//         /> I agree

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [formData, setFormData] = useState([
//     {
//       name: "",
//       email: "",
//       password: "",
//       termsCondition: false,
//     },
//   ]);

//   const handleChange = (index, e) => {
//     const { name, type, value, checked } = e.target;

//     const updated = [...formData]; // array copy
//     updated[index][name] = type === "checkbox" ? checked : value; // update object

//     setFormData(updated); // set array
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <h2>Dynamic Array Form</h2>

//         {formData.map((user, index) => (
//           <div key={index}>
//             <input
//               type="text"
//               placeholder="Name"
//               name="name"
//               value={user.name}
//               onChange={(e) => handleChange(index, e)}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               value={user.email}
//               onChange={(e) => handleChange(index, e)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={user.password}
//               onChange={(e) => handleChange(index, e)}
//             />
//             <input
//               type="checkbox"
//               name="termsCondition"
//               checked={user.termsCondition}
//               onChange={(e) => handleChange(index, e)}
//             />
//             I agree
//             <button>Submit</button>
//           </div>
//         ))}
//       </form>
//     </div>
//   );
// };

// export default App;
