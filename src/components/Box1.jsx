import React from "react";

function Box1({initCount}) {
  console.log("box1렌더링");
  const style1 = {
    width: "100px",
    height: "100px",
    backgroundColor: "#01c49f",
    color: "#fff",
  };
  return (
    <div style={style1}>
      <button onClick={initCount}>초기화</button>
    </div>
  );
}

export default React.memo(Box1);
