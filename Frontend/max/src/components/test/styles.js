import styled from "styled-components";

export const Common = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Home = styled.a`
  display: flex;
  align-items: center;
  font-size: 30px;
  margin: 10px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
export const ContlorBox = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-end;
    display: none;
  }
`;

export const Menubar = styled.a`
  display: flex;
  align-items: center;
  font-size: 30px;
  position: absolute;
  right: 32px;
  height: 97px;
  @media screen and (min-width: 500px) {
    display: none;
  }
`;
