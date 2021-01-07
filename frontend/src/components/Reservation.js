import React from "react";
import styled from "styled-components";

const Reservation = ({ userReservation }) => {
console.log(userReservation)
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