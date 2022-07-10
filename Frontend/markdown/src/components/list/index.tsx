import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "@emotion/styled";

const MarkDownStyle = styled.div`
  font-size: 1rem;
  line-height: 2.5rem;
`;

const markdown = `
    #헤딩
    **굵게**
    일반테스트
    *기울이기*
`;

const List = () => {
  return (
    <>
      <MarkDownStyle>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </MarkDownStyle>
    </>
  );
};

export default List;
