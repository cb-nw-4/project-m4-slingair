import React, { useEffect } from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Confirmation = ({userReservation}) => {
  console.log(userReservation)
  let resID=userReservation.id;
  let givenName=userReservation.givenName;
  let surname=userReservation.surname;
  let flight=userReservation.flight;
  let seat=userReservation.seat;
  let email=userReservation.email;
    return (
      <Wrapper>
        <p>
          Thank you for booking with Slingshot Airlines! 
        </p>
        <p>
          Below are your booking details.
        </p>
        <div><span>Reservation#: </span><span>{resID}</span></div>
        <div><span>First Name: </span><span>{givenName}</span></div>
        <div><span>Surname: </span><span>{surname}</span></div>
        <div><span>Flight#: </span><span>{flight}</span></div>
        <div><span>Seat#: </span><span>{seat}</span></div>
      </Wrapper>
    );
};

const Wrapper = styled.div`
  margin:auto;
  padding:40px;
  border: 2px solid ${themeVars.alabamaCrimson};
  border-radius:4px;
`;

export default Confirmation;
