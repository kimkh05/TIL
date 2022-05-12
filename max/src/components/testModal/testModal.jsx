import React, { useState, useEffect } from "react";
import * as S from "./styles";

const TestModal = () => {
  const [open, setOpen] = useState(false);

  const click = () => {
    setOpen(!open);
  };

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <>
      <S.Wrapper>
        <S.ModalBtn onClick={click}>
          {!setOpen ? "OpenModal" : "Opened"}
        </S.ModalBtn>

        {!open ? null : (
          <S.Background>
            <S.Modal>
              <span>Hello World!</span>
              <S.btn onClick={click}>Go home</S.btn>
            </S.Modal>
          </S.Background>
        )}
      </S.Wrapper>
    </>
  );
};

export default TestModal;
