import React, { useState } from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Reservation =  ({}) => {
    const [reservation, setReservation] = useState({});
    const [id, setId] = useState(null);
    const [showReservation, setShowReservation] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        if (id === localStorage.getItem("reservationId")) {
            fetch(`/reservation/${id}`)
                .then((res) => res.json())
                .then((response) => {
                    setReservation(response.data);
                    setShowReservation(true);
                })
                .catch((error) => window.alert('No reservation found'));
        }
    };
    console.log(reservation);
    return (
        <>
            {showReservation === false && (
            <Form onSubmit={onSubmit}>
                <Input
                name="rezNumber"
                placeholder="Enter Reservation Number"
                // type="text"
                onChange={(event) => setId(event.target.value)}
                value={id}
                />
                <Button>Submit</Button>
            </Form>
            )}
            {reservation && showReservation === true && (
            <ReservationContainer>
                <ReservationInfo><Span>Reservation #: </Span>{reservation.id}</ReservationInfo>
                <ReservationInfo><Span>Flight #: </Span>{reservation.flight}</ReservationInfo>
                <ReservationInfo><Span>Seat #: </Span>{reservation.seat}</ReservationInfo>
                <ReservationInfo><Span>Name: </Span>{reservation.givenName + " " + reservation.surname}</ReservationInfo>
                <ReservationInfo><Span>Email: </Span>{reservation.email}</ReservationInfo>
            </ReservationContainer>
            )}
        </>
    )
}

const Form = styled.form`
    position: relative;
    left: 40%; 
    top: 250px;
`;

const Input = styled.input`
    padding: 5px;
    width: 300px;
`;

const Button = styled.button`
    background-color: ${themeVars.selectiveYellow};
    border-radius: 5px;
    border-style: none;
    padding: 5px;
    margin: 5px;
`;

const ReservationContainer = styled.div`
    position: relative;
    left: 40%;
    top: 20 0px;
`;

const Span = styled.span`
    font-weight: bold;
`;

const ReservationInfo = styled.p`
    padding: 10px;
`;

export default Reservation;

// the above method is proving too difficult so instead:
// add to confirmation page: to view reservation, go to
// /reservation/b2cd15ba-9491-427e-8662-cc6e7b8a394c < ${id}
// have reservation page use  that info to display reservation info
