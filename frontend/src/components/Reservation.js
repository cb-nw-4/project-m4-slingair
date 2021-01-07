import React from "react";
import styled from "styled-components";

<<<<<<< HEAD
const Reservation = ({ userReservation }) => {
    
    return (
        <div>
            <h1>Your Reservation Details</h1>
            <h5>Reservation #:</h5>
            <p>{userReservation.id}</p>
            <h5>Flight #:</h5>
            <p>{userReservation.flight}</p>
            <h5>Seat #:</h5>
            <p>{userReservation.seat}</p>
            <h5>Name:</h5>
            <p>{userReservation.givenName} {userReservation.surname}</p>
            <h5>Email:</h5>
            <p>{userReservation.email}</p>
        </div>
    )
}

export default Reservation;
=======
import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Reservation = () => {
  return <Wrapper>reservation page</Wrapper>;
};

const Wrapper = styled.div``;

export default Reservation;
>>>>>>> 0bcdb9dbcf0ba4200613d1207429ebe91294a535
