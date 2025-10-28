import React from "react";

const Popup = ({ popup, setPopup, title, description }) => {
  if (!popup) return null;
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center">
      <button
        onClick={() => setPopup(false)}
        className="bg-black text-white absolute top-[1rem] right-[1rem] p-2 rounded"
      >
        ❌
      </button>

      <div className="w-full h-full max-w-[40rem] max-h-[20rem] bg-[#242424] rounded-2xl p-5 flex items-center justify-center flex-col text-white">
        <h1 className="text-2xl mb-2">⚠️ {title} Confirmation</h1>
        <p className="my-5">{description}</p>

        <div className="flex gap-10">
          <button className="bg-green-500 px-4 py-2 rounded">Yes</button>
          <button
            className="bg-red-500 px-4 py-2 rounded"
            onClick={() => setPopup(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
