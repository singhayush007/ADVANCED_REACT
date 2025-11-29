// import "./App.css";
// import axios from "axios";
// function App() {
// const fetchData = async ()=>{
//   const response = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
//   console.log(response)
//   const data = await response.json()
//   console.log(data)
// }

// const fetchData = async () => {
//   const data = await axios.get(
//     "https://jsonplaceholder.typicode.com/todos/1"
//   );
//   console.log(data);
// };

//   const fetchData = async () => {
//     const data = await axios.get(
//       "https://692a7be37615a15ff24cca1c.mockapi.io/users/users"
//     );
//     console.log(data);
//   };

//   return (
//     <>
//       <h1 className=" mb-10 bg-red-500">Fetch Data from Fetch Method</h1>
//       <button onClick={fetchData}>Fetch Data</button>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import axios from "axios";
const App = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await axios({
      url: "https://692a7be37615a15ff24cca1c.mockapi.io/users/users",
    });
    setUsers(response.data);
    console.log(response.data);
  };

  const fetchDataPost = async ()=>{
    const response = await axios ({
      url : "https://692a7be37615a15ff24cca1c.mockapi.io/users/users",
      method : 'post',
      data :{
        name : 'Ayush',
        age : 23
      }
    })
    console.log(response)
  }
  return (
    <div>
      <button onClick={fetchData}>FETCH DATA BY GET</button>
      <button onClick={fetchDataPost}>FETCH DATA BY POST</button>
      {
        users.map((user)=>{
          return (
            <p key={user.id}> Name : {user.name} - Age : {user.age}</p>
          )
        })
      }
    </div>
  );
};

export default App;
