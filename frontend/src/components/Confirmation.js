import React from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";


const Confirmation = ({userReservation}) => {
  console.log(userReservation);
  return (
    <Wrapper>

      <Container>
        <ConfirmationHeader>Your flight is confirmed!</ConfirmationHeader>
        <FlightDetails>{`Reservation #: ${localStorage.id}`}</FlightDetails>
        <FlightDetails>{`Flight #: ${userReservation.flight}`}</FlightDetails>
        <FlightDetails>{`Seat #: ${userReservation.seat}`}</FlightDetails>
        <FlightDetails>{`Name: ${userReservation.givenName} ${userReservation.surname}`}</FlightDetails>
        <FlightDetails>{`Email: ${userReservation.email}`}</FlightDetails>
      </Container>

      <Img src={tombstone} alt="Tombstone"/>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: 200px;
  width: 200px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid ${themeVars.alabamaCrimson};
  border-radius: 5px;
  width: 500px;
  height: 250px;
  margin: 100px;
`

const ConfirmationHeader = styled.h2`
  color: ${themeVars.alabamaCrimson};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 300;
  border-bottom: 2px solid ${themeVars.alabamaCrimson};
  width: 450px;
  margin: 0px 0px 20px 25px;
  text-align: left;
  line-height: 50px;
`

const FlightDetails = styled.p` 
  font-size: 16px;
  margin-left: 25px;
  line-height: 30px;
  font-weight: 600;
`

export default Confirmation;
