import React from "react";
import { useContext } from "react";
import { FamilyContext } from "../context/FamilyContext";

function Child() {

  const style = {
    color: "red",
    fontWeight: "900",
  };

  const data = useContext(FamilyContext)
  console.log(data)
  return (
    <div>
      나는 이집안의 막내입니다 <br />
      할아버지가 우리집이름은 <span style={style}>{data.houseName}</span>라고 함{" "}
      <br />
      게다가 용돈도 <span style={style}>{data.poketMoeny}</span>원이나 주셨어요
    </div>
  );
}

export default Child;
