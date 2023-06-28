import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("안녕이펙트");//첫렌더링시에 의존성 배열이 빈값이면 한번만 실행

    return ()=>{ //컴포넌트가 화면에서 사라졌을때 
      console.log("사라집니다!")
    }
  }, []);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default App;
