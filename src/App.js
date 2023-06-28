import "./App.css";
import { useState } from "react";
function App() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <div>number state: {number}</div>
      <button
        onClick={() => {
          // setNumber(number+1);
          // setNumber(number+2);
          // setNumber(number+3);
          setNumber((curNum) => curNum + 1);
          setNumber((curNum) => curNum + 1);
          setNumber((curNum) => curNum + 1);
        }}
      >
        누르면 up
      </button>
    </>
  );
}

export default App;
