import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function testing(event) {
    console.log(event.target.value);
    console.log("test kar rhe hai");
  }

  function greet() {
    alert("I am an Alert");
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Submit Successfuly")
  }

  function parentHandler(){
    console.log("Click on Parent")
  }

  function childrenHandler(e , name){
    console.log(name)
    e.stopPropagation()
    console.log("Click on Child")
  }
  return (
    <>
      <div className="bg-green-500">Hello Event Handling</div>
      <button onClick={greet}>I am Button Press Me</button>

      <input type="text" placeholder="Enter Name" onChange={testing} />

      <form onSubmit={submitHandler} action="">
        <input type="text" placeholder="Enter Name"/>
        <button type="submit">Submit</button>
      </form>

    <div>
  <button onClick={parentHandler}>Parent</button>
  <button onClick={(e)=>{childrenHandler(e , "Ayush")}}>Child</button>
</div>

    </>
  );
}

export default App;