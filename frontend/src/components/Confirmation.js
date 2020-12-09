import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Confirmation = () => {
  return (
    <Wrapper>
      <Container>
        <H1>Your flight is confirmed!</H1>
        {/* create a map that goes over the data and makes a UUID etc */}
      </Container>
      <Img src={tombstone}></Img>
    </Wrapper>
  );
};

const H1 = styled.h4`
  color: ${themeVars.alabamaCrimson};
  font-size: 1.2rem;
  padding-bottom: 0.7rem;
  border-bottom: 2px solid ${themeVars.alabamaCrimson}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 450px;
  height: 250px;
  border: 2px solid ${themeVars.cadmiumRed};
  margin-top: 25%;
  margin-bottom: 3rem;
  color: ${themeVars.cadmiumRed};
  padding: 2rem;
`;

const Img = styled.img`
  width: 180px;
  height: 180px;
`;

export default Confirmation;
