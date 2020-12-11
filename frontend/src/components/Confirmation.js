import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Confirmation = ({ userReservation }) => {
  return (
    <Wrapper>
      <Container>
        <H1>Your flight is confirmed!</H1>
        <P>
          <Span>Reservation #: </Span>
          {userReservation.id}
        </P>
        <P>
          <Span>Flight #: </Span>
          {userReservation.flight}
        </P>
        <P>
          <Span>Seat #: </Span>
          {userReservation.seat}
        </P>
        <P>
          <Span>Name: </Span>
          {userReservation.givenName + " " + userReservation.surname}
        </P>
        <P>
          <Span>Email: </Span>
          {userReservation.email}
        </P>
      </Container>
      <Img src={tombstone}></Img>
    </Wrapper>
  );
};

const P = styled.p`
  color: black;
  margin-top: 0.5rem;
`;

const Span = styled.span`
  font-weight: bolder;
  color: black;
`;

const H1 = styled.h4`
  color: ${themeVars.alabamaCrimson};
  font-size: 1.2rem;
  padding-bottom: 0.7rem;
  border-bottom: 2px solid ${themeVars.alabamaCrimson};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  border: 2px solid ${themeVars.cadmiumRed};
  margin-top: 20%;
  margin-bottom: 5%;
  color: ${themeVars.cadmiumRed};
  padding: 2rem;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
`;

export default Confirmation;
