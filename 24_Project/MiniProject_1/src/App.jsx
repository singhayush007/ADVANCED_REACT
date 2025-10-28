import { useState } from "react";
import "./App.css";
import Popup from "./Popup";

function App() {
  const [popup, setPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  return (
    <>
      <button
        className="bg-black text-white p-2 m-2"
        onClick={() => setPopup(true)}
      >
        Delete
      </button>

      <Popup
        popup={popup}
        setPopup={setPopup}
        title="Delete"
        description="Are you sure you want to delete this?"
      />

      <button
        className="bg-black text-white p-2 m-2"
        onClick={() => setEditPopup(true)}
      >
        Edit
      </button>

      <Popup
        popup={editPopup}
        setPopup={setEditPopup}
        title="Edit"
        description="Are you sure you want to edit this?"
      />
    </>
  );
}

export default App;
