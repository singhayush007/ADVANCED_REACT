import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ColorBox from "./components/ColorBox";

function App() {
  const colors = ["Red", "Blue", "Yellow", "Green", "Pink"];

  const [selectedColor, setSelectedColor] = useState("");
  return (
    <>
      <h1>COLOR SWITCHER 🎨</h1>
      <div className="flex gap-4 my-7">
        {colors.map((item) => (
          <Button key={item} color={item} selection={setSelectedColor}>
            {item}
          </Button>
        ))}
      </div>
      <ColorBox color={selectedColor} />
    </>
  );
}

export default App;
