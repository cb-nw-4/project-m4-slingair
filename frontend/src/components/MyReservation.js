import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const MyReservation = ({ userReservation={} }) => {

  useEffect(() => {
   if(userReservation.id) {
    // console.log(userReservation.id);
    fetch(`/reservations/${userReservation.id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)    
      })
    }
  }, []);
   
return (
  <RegistrationText>
    <Title>This is your reservation</Title>
    <p><Bold>Registration Number</Bold>: {userReservation.id}</p>
    <p><Bold>Name:</Bold> {userReservation.surname} {userReservation.givenName}</p>
    <p><Bold>Email:</Bold> {userReservation.email}</p>
    <p><Bold>Flight Number:</Bold>{userReservation.flight}</p>
    <p><Bold>Seat:</Bold> {userReservation.seat}</p>
  </RegistrationText>
  )
};

const RegistrationText = styled.div`
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

export default MyReservation;