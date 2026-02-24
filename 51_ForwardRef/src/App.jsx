import { useState } from 'react'
import './App.css'
import Before19UserInput from './component/BeforeReact19UserInput'
import UserInput from './component/AfterReact19UserInput'
import { useRef } from 'react'
function App() {

  const inputRef = useRef(null);
  const Before19Ref = useRef(null);

  return (
    <>
      <UserInput  inputRef={inputRef}/>
      <Before19UserInput ref={Before19Ref}/>

      <br/>

      <button onClick={()=>{
        inputRef.current.focus();
        inputRef.current.value = "Ayush";
      }}>Click Button 1</button>

      <button onClick={()=>{
        Before19Ref.current.focus();
        Before19Ref.current.value = "Singh";
      }}>Click Button 2</button>
    </>
  )
}

export default App
