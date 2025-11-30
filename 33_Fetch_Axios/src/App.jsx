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

import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [formDetails, setFormDetails] = useState({
    name: "",
    age: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  useEffect(() => {
    // axios.interceptors.request.use((config) => {
    //   // console.log(config.headers)
    //   config.headers.Authorization = "Bearer alsdjflksajdflkj"
    //   console.log(config.headers)
    //   return config
    // },(err)=>{
    //   console.log('Global err:', err)
    //   return Promise.reject(err)
    // })

    // axios.interceptors.response.use((response)=>{
    //   console.log(response)
    //   return response
    // })
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await axios({
      url: "https://692a7be37615a15ff24cca1c.mockapi.io/users/users",
      method: "get",
    });
    setUsers(response.data);
  };

  const fetchDataPost = async () => {
    if (!formDetails.name || !formDetails.age) {
      alert("Please fill all fields");
      return;
    }

    await axios({
      url: "https://692a7be37615a15ff24cca1c.mockapi.io/users/users",
      method: "post",
      data: formDetails,
    });

    setFormDetails({ name: "", age: "" });
    fetchData();
  };

  const editData = async () => {
    await axios({
      url: `https://692a7be37615a15ff24cca1c.mockapi.io/users/users/${formDetails.id}`,
      method: "put",
      data: formDetails,
    });

    setFormDetails({ name: "", age: "", editMode: false });
    fetchData();
  };

  const deleteUser = async (id) => {
    await axios({
      url: `https://692a7be37615a15ff24cca1c.mockapi.io/users/users/${id}`,
      method: "delete",
    });

    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center flex-col p-6">
      {/* Form */}
      <h1 className="text-3xl font-bold mb-6">CRUD App</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          className="w-full p-3 rounded bg-gray-700 mb-4"
          onChange={handleOnChange}
          value={formDetails.name}
        />

        <input
          type="number"
          placeholder="Enter Age"
          name="age"
          className="w-full p-3 rounded bg-gray-700 mb-4"
          onChange={handleOnChange}
          value={formDetails.age}
        />

        {formDetails.editMode ? (
          <button
            onClick={editData}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded mt-2"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={fetchDataPost}
            className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded mt-2"
          >
            Add User
          </button>
        )}
      </div>

      {/* User Cards */}
      <div className="w-full max-w-xl mt-10">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gray-800 p-5 rounded-lg shadow-lg flex justify-between items-center mb-4"
          >
            <div>
              <p className="text-lg font-semibold">
                {user.name} ({user.age} yrs)
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setFormDetails({ ...user, editMode: true })}
                className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-sm"
              >
                Edit
              </button>

              <button
                onClick={() => deleteUser(user.id)}
                className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
