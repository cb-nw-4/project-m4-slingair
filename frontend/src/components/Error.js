import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const ErrorPage = () => {
  return (
    <>
      <Text>There was a problem with your reservation!</Text>
      <ParentWrapper>
        <Wrapper>
          <Text>{localStorage.getItem("message")}</Text>
        </Wrapper>
      </ParentWrapper>
    </>
  );
};

const ParentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  border: 3px;
  border-style: solid;
  border-color: red;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  z-index: 4;
  padding: 20px;
`;

export default ErrorPage;
