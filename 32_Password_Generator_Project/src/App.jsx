import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [savedPasswords, setSavedPassword] = useState([]);

  const maxLength = 100;
  const passwordRef = useRef(null);
  const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(password);
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, maxLength);
  };

  const changeHandler = (e) => {
    setLength(e.target.value);
    console.log(e.target.value);
  };

  const generatePassword = () => {
    let pass = " ";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumberAllowed) str = str + "0123456789";
    if (isCharacterAllowed) str = str + "~!@#$%^&*|?";

    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length);
      let characterPicked = str.charAt(randomIndex);
      pass = pass + characterPicked;
    }
    console.log(pass);
    setPassword(pass);
  };

  useEffect(() => {
    generatePassword();
  }, [length, isNumberAllowed, isCharacterAllowed]);
  return (
    <div className="flex flex-col gap-5 max-w-[30rem] m-auto mt-25">
      <h1 className="text-center mt-5 font-bold">PASSWORD GENERATOR</h1>
      <input
        className="outline-none border-none bg-gray-200 px-5 py-1 rounded-lg text-black"
        type="text"
        placeholder="Password"
        value={password}
        ref={passwordRef}
        readOnly={true}
      />

      <input
        type="range"
        min={0}
        max={maxLength}
        value={length}
        onChange={changeHandler}
      />
      <label htmlFor="numberAllowed">
        <input
          className="cursor-pointer"
          type="checkbox"
          id="numberAllowed"
          checked={isNumberAllowed}
          onChange={(e) => setIsNumberAllowed(e.target.checked)}
        />
        Number Allowed
      </label>

      <label htmlFor="characterAllowed">
        <input
          className="cursor-pointer"
          type="checkbox"
          id="characterAllowed"
          checked={isCharacterAllowed}
          onChange={(e) => setIsCharacterAllowed(e.target.checked)}
        />
        Character Allowed
      </label>

      <button
        onClick={copyPasswordToClipboard}
        className="bg-blue-500 px-3 py-2 rounded-lg"
      >
        Copy Password
      </button>
      <button
        onClick={() => {
          setLength(8);
          setIsCharacterAllowed(false);
          setIsNumberAllowed(false);
        }}
        className="bg-red-500 px-3 py-2 rounded-lg"
      >
        Reset Password
      </button>
      <button
        onClick={() => {
          setSavedPassword((prevPass) => [...prevPass, password]);
        }}
        className="bg-green-500 px-3 py-2 rounded-lg"
      >
        Save Password
      </button>

      {savedPasswords.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </div>
  );
}

export default App;
