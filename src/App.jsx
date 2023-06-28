import React, { useCallback } from "react";
import { useState } from "react";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";
// import { memo } from 'react'

function App() {
  console.log("app컴포넌트 렌더링");
  const [count, setCount] = useState(0);

  const plusCountBtn = () => {
    setCount(count + 1);
  };
  const minusCountBtn = () => {
    setCount(count - 1);
  };
  const initCount = useCallback(()=>{
    console.log(`${count}에서 0으로 변경되었습니다.`)
    setCount(0);
  }, [count])
  return (
    <>
      <h3>count예제입니다</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={plusCountBtn}>+</button>
      <button onClick={minusCountBtn}>-</button>
      <div style={{ display: "flex", margin: '10px' }}>
        <Box1 initCount={initCount} />
        <Box2 />
        <Box3 />
      </div>
    </>
  );
}

export default App;
