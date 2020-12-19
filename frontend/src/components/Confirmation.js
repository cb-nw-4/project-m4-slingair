import React from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const Confirmation = ({ userReservation={} }) => {
  // if(!userReservation.id){
  //    return (<div></div>)
  // }
  return (
      <ConfirmationText>
        <Title>Your flight is confirmed</Title>
        <p><Bold>Name:</Bold> {userReservation.givenName} {userReservation.surname}</p>
        <p><Bold>Email:</Bold> {userReservation.email}</p>
        <p><Bold>Reservation Number: </Bold>{userReservation.id}</p>
        <p><Bold>Flight Number:</Bold> {userReservation.flight}</p>
        <p><Bold>Seat: </Bold> {userReservation.seat}</p>
      </ConfirmationText>
  );
};

const ConfirmationText = styled.div`
  border: 3px solid  ${themeVars.alabamaCrimson};
  width: 40%;
  margin: auto;
  line-height: 35px;
  padding: 30px;
  border-radius: 5px;
`;

const Title = styled.p`
  font-size: 25px;
  font-weight: bold;
  color:  ${themeVars.alabamaCrimson};
  border-bottom: solid;
`;

const Bold = styled.span`
  font-weight: bold;
`;

export default Confirmation;
