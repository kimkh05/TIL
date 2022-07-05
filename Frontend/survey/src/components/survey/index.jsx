import React, { useState } from "react";

const Survey = () => {
  const [boyCheck, setBoyCheck] = useState(false);
  const [girlCheck, setGirlCheck] = useState(false);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>학교와 학번, 이름을 입력하세요.</span>
        <input
          type="input"
          placeholder="ex) 대덕소프트웨어마이스터고등학교 20102 김경호"
          style={{ width: "20vw" }}
        />
        <span>성별을 입력하세요.</span>
        <div>
          <span>남자</span>
          <input
            type="radio"
            onClick={() => {
              setBoyCheck(true);
              setGirlCheck(false);
            }}
          />
          <span>여자</span>
          <input
            type="radio"
            onClick={() => {
              setBoyCheck(false);
              setGirlCheck(true);
            }}
          />
        </div>
        {boyCheck && <div>안녕</div>}
        {girlCheck && <div>잘가</div>}
      </div>
    </>
  );
};

export default Survey;
