// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [paymentSelected, setPaymentSelected] = useState('')
   
//   const changeHandler = (e)=>{
//       setPaymentSelected(e.target.value);
//       console.log(e.target.value);
//     }
//   return (
    
//     <>
//       <select value={paymentSelected} onChange={changeHandler}>
//         <option value="">Selected Below</option>
//        <option value="UPI">UPI</option>
//        <option value="CARD">CARD</option>
//        <option value="COD">COD</option>
//       </select>
//     </>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {

//   const [country , setCountry] = useState("");
//   const countries = ["India" , "USA" , "Japan" , "China"];

//   const changeHandler = (e)=>{
//     setCountry(e.target.value);
//     console.log(e.target.value);
//   }
//   return (
//     <select value={country} onChange={changeHandler}>
//       <option value="">Select Country</option>
//     {countries.map(c =>
//       <option key={c} value={c}>{c}</option>
//     )}
//     </select>
//   )
// }

// export default App

// import { useState } from 'react'
// import './App.css'
// import data from '../data/countrydata';

// function App() {

//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');

//   console.log(selectedCountry, selectedCity)

//   return (
//     <>
//       <select value={selectedCountry} onChange={(e) => {
//         setSelectedCountry(e.target.value)
//         setSelectedCity('')
//       }}>
//         <option value="">---Select country---</option>
//         {Object.keys(data).map((item) => {
//           return (
//             <option key={item} value={item}>{item.toUpperCase()}</option>
//           )
//         })}
//       </select>


//       {selectedCountry && (
//         <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
//           <option value="">---Select city---</option>
//           {data[selectedCountry].map((item) => {
//             return (
//               <option key={item} value={item}>{item.toUpperCase()}</option>
//             )
//           })}
//         </select>
//       )}

//       <p>Country: {selectedCountry}, city: {selectedCity}</p>
//     </>
//   )
// }

// export default App


import React, { useState } from 'react'
import './App.css'
import data from '../data/languagedata';

const App = () => {
  const [selectedLanguage , setSelectedLanguage] = useState('')
  const [selectedSkill , setSelectedSkill] = useState('')

  console.log(selectedLanguage , selectedSkill);

  const changeHandler = (e)=>{
    setSelectedLanguage(e.target.value)
    setSelectedSkill('')   // reset skill on language change
  }

  return (
    <div>
      {/* Language Dropdown */}
      <select value={selectedLanguage} onChange={changeHandler}>
        <option value="">---Select Languages----</option>
        {Object.keys(data).map((lang)=>(
          <option key={lang} value={lang}>{lang.toUpperCase()}</option>
        ))}
      </select>

      {/* Skill Dropdown */}
      {selectedLanguage && (
        <select 
          value={selectedSkill} 
          onChange={(e)=> setSelectedSkill(e.target.value)}
        >
          <option value="">---Select Skill---</option>
          {data[selectedLanguage].map((skill)=>(
            <option key={skill} value={skill}>{skill.toUpperCase()}</option>
          ))}
        </select>
      )}

      <p>Language: {selectedLanguage} , Skill: {selectedSkill}</p>
    </div>
  )
}

export default App
