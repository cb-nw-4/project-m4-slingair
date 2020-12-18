import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import raccoon from "../assets/transdeadraccoon.png";

const ErrorPage = (props) => {
  return (
    <Wrapper>
      <Raccoon />
      <Message>
        Sorry, but something seems to have gone horribly wrong. The following
        error has occured: <StyleBold>{props.location.state}</StyleBold>
        <br />Please try again later.
      </Message>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Raccoon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  width: 450px;
  height: 132px;
  background-image: url(${raccoon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Message = styled.div`
  margin-top: 50px;
  width: 450px;
  border: 2px solid ${themeVars.alabamaCrimson};
  border-radius: 5px;
  padding: 15px;
  line-height: 1.6;
  font-size: 0.9rem;
`;

const StyleBold = styled.span`
  font-weight: bold;
`;

export default ErrorPage;
