import React from 'react'

function Box2() {
  const style2 = {
    width: "100px",
    height: "100px",
    backgroundColor: "#4e93ed",
    color: "#fff",
  };
  console.log('box2렌더링')
  return (
    <div style={style2}>Box2</div>
  )
}

export default React.memo(Box2)