import React from "react";
import styled from "styled-components";
import SeatSelect from "./SeatSelect";
import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

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
        {/* <img src={tombstone} alt='tombstone' height='150' width='170' /> */}
      </div>
      )
}

export default Confirmation
