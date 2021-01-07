import React from "react";
import styled from "styled-components";
import SeatSelect from "./SeatSelect";
import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

<<<<<<< HEAD
const Confirmation = ({ userReservation }) => {
  console.log(userReservation)
        return (
      <div>
        <h1>Your flight is confirmed!</h1>
        <p>Reservation #: {`${userReservation.id}`}</p>
        <p>Flight #: {`${userReservation.flight}`}</p>
        <p>Seat #: {`${userReservation.seat}`}</p>
        <p>Name: {`${userReservation.givenName} ${userReservation.surname}`}</p>
        <p>Email: {`${userReservation.email}`}</p>
        <img src={tombstone} alt='tombstone' height='150' width='170' />
      </div>
      )
=======
const Confirmation = ({ updateUserReservation }) => {
  return <Wrapper></Wrapper>;
>>>>>>> 0bcdb9dbcf0ba4200613d1207429ebe91294a535
};

export default Confirmation;
