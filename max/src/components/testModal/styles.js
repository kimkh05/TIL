import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1800px;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const ModalBtn = styled.button`
  height: 70px;
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const Modal = styled.div`
  width: 800px;
  height: 500px;
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  span {
    padding-left: 20px;
  }
`;

export const btn = styled.button`
  width: 300px;
  height: 40px;
`;

export const Background = styled.div`
  width: 1800px;
  height: 1000px;
  background-color: black;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    opacity: 0.5;
  }
`;
