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

// export default App;





