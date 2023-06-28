import React, { useEffect, useRef, useState } from "react";

function App() {
  const [id, setId] = useState("");
  const idRef = useRef("");
  const pwRef = useRef("");
  //화면이 렌더링될때 어떤작업을 하고 싶다
  
  useEffect(() => {
    //idRef를 인풋태그와 연결하고 렌더링시 포커스지정
    idRef.current.focus();
  }, []);
  
  useEffect(() => {
    if (id.length >= 10) {
      pwRef.current.focus();
    }
  }, [id]);//아이디라는 스테이트가 바뀔때마다 유즈이펙트 실행
  return (
    <>
      <div>
        아이디 :{" "}
        <input
          value={id}
          type="text"
          ref={idRef}
          onChange={(e) => {
            setId(e.target.value);
            if (id.length >= 10) {
              pwRef.current.focus();
            } //
          }}
        />
      </div>
      <div>
        비밀번호 : <input type="password" ref={pwRef} />
      </div>
    </>
  );
}

export default App;
