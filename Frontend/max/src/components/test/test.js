import React, { useState } from "react";
import * as S from "./styles";
import { IoIosMenu } from "react-icons/io";

const Test = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <S.Common>
        <S.ContlorBox>
          <span>계약</span>
          <span>로그인</span>
          <span>회원가입</span>
        </S.ContlorBox>
        <S.Menubar href="#">
          <IoIosMenu />
        </S.Menubar>
      </S.Common>
    </>
  );
};

export default Test;
