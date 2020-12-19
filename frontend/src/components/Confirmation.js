import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Confirmation = ({ userReservation }) => {
  const { seat, givenName, surname, email, id, flight } = userReservation;
  return (
    <>
    <Wrapper>
      <Heading>Your flight is confirmed!</Heading>
      <Line/>
      <Info><Span>Reservation #: </Span>{id}</Info>
      <Info><Span>Flight #: </Span>{flight}</Info>
      <Info><Span>Seat #: </Span>{seat}</Info>
      <Info><Span>Name: </Span>{givenName + " " + surname}</Info>
      <Info><Span>Email: </Span>{email}</Info>
    </Wrapper>
    <ImageWrapper>
      <Image src={tombstone} alt = "tombstone"/>
    </ImageWrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 450px;
  height: 240px;
  top: 25%;
  left: 35%;
  border: 2px solid ${themeVars.alabamaCrimson};
  margin: 5px;
  padding: 5px;
`;

const Heading = styled.h1`
  color: ${themeVars.alabamaCrimson};
  font-family: sans-serif;
  font-size: 24px;
  text-align: left;
  padding: 10px;
`;

const Line = styled.hr`
  color: ${themeVars.alabamaCrimson};
`;

const Span = styled.span`
  font-weight: bold;
`;

const Info = styled.p`
  padding: 8px;
`;

const ImageWrapper = styled.div`
  position: relative;
  top: 55%;
  left: 45%;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

export default Confirmation;


