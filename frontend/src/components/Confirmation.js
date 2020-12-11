import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Confirmation = ({ userReservation }) => {
  return (
    <BigWrapper>
      <Wrapper>
        <Confirmed>Your flight is confirmed!</Confirmed>
        <Id><span><b>Reservation #: </b></span>{`${userReservation.id}`}</Id>
        <Flight><span><b>Flight #: </b></span>{`${userReservation.flight}`}</Flight>
        <Seat><span><b>Seat #: </b></span>{`${userReservation.seat}`}</Seat>
        <Name><span><b>Name: </b></span>{`${userReservation.givenName} ${userReservation.surname}`}</Name>
        <Email><span><b>Email: </b></span>{`${userReservation.email}`}</Email>
      </Wrapper>
      <img src={tombstone} alt='tombstone' height='150' width='170' />
    </BigWrapper>
  );
}

const BigWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 500px;
  border: 2px solid ${themeVars.alabamaCrimson};
  border-radius: 5px;
  margin: 100px 0 30px 0;
  padding-left: 25px;
`;

const Confirmed = styled.h2`
  font-family: ${themeVars.contentFont};
  width: 440px;
  padding: 30px 0 15px 0; 
  margin-bottom: 20px;
  text-align: left;
  font-size: 25px;
  color: ${themeVars.alabamaCrimson};
  border-bottom: 2px solid ${themeVars.alabamaCrimson};
`;

const Id = styled.p`
  margin-bottom: 20px;
`;

const Flight = styled.p`
  margin-bottom: 20px;
`;

const Seat = styled.p`
  margin-bottom: 20px;
`;

const Name = styled.p`
  margin-bottom: 20px;
`;

const Email = styled.p`
  margin-bottom: 30px;
`;

export default Confirmation;
