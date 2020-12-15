import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import Admin from "./Admin";

const AllReservations = () => {
  return (
    <Wrapper>
      <Title>Reservations</Title>
      <Admin />
    </Wrapper>
  )
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;
const Title = styled.h1``;
export default AllReservations;
