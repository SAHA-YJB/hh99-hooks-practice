import React from "react";

function Box3() {
  const style3 = {
    width: "100px",
    height: "100px",
    backgroundColor: "#c491be",
    color: "#fff",
  };
  console.log("box3렌더링");
  return <div style={style3}>Box3</div>;
}

export default React.memo(Box3);
