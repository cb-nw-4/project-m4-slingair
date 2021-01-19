import React from 'react';
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";


const ModifiedReservationSuccess = ({ userReservation }) => {
    return (
        <>
            <ModifiedMessage>Update Successful</ModifiedMessage>
            <RegistrationText>
                <Title>This is your new reservation:</Title>
                <p><Bold>Name:</Bold> {userReservation.surname} {userReservation.givenName}</p>
                <p><Bold>Email:</Bold> {userReservation.email}</p>
                <FlightData><p><Bold>Flight Number:</Bold>{userReservation.flight}</p>
                <p><Bold>Seat:</Bold> {userReservation.seat}</p>
                </FlightData>
                
            </RegistrationText>
        </>
    )
}

const ModifiedMessage = styled.h4`
    margin: 25px 20px;
    font-size: 35px;
    font-weight: bold;
    color:  ${themeVars.alabamaCrimson};
    border-bottom: 3px solid  ${themeVars.alabamaCrimson};
    padding-bottom: 15px;
`;

const RegistrationText = styled.div`
    border: 3px solid  ${themeVars.alabamaCrimson};
    width: 40%;
    margin: auto;
    line-height: 35px;
    padding: 25px;
    border-radius: 5px;
`;
const Title = styled.p`
    font-size: 22px;
    font-weight: bold;
    color:  ${themeVars.alabamaCrimson};
    border-bottom: 3px solid ${themeVars.alabamaCrimson};
`;

const FlightData = styled.div`
    display: flex;

    & p {
        margin-right: 20px;
    }
`;

const Bold = styled.span`
    font-weight: bold;
`;

export default ModifiedReservationSuccess;