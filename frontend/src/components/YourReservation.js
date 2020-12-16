import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { themeVars } from "./GlobalStyles";

const YourReservation = ({ userReservation, handleCancel, handleChangeFlight }) => {
    return (
        <>{userReservation.id && (
        <BigWrapper>
            <Wrapper>
                <Message1>Your reservation:</Message1>
                <Id><span><b>Reservation #: </b></span>{`${userReservation.id}`}</Id>
                <Flight><span><b>Flight #: </b></span>{`${userReservation.flight}`}</Flight>
                <Seat><span><b>Seat #: </b></span>{`${userReservation.seat}`}</Seat>
                <Name><span><b>Name: </b></span>{`${userReservation.givenName} ${userReservation.surname}`}</Name>
                <Email><span><b>Email: </b></span>{`${userReservation.email}`}</Email>
            </Wrapper>
            <Links>
                <StyledLink to='/change-flight' onClick={handleChangeFlight}>Change flight</StyledLink>
                <StyledLink to='/cancel-flight' onClick={handleCancel}>Cancel flight</StyledLink>
            </Links>
        </BigWrapper>
        )}
        {userReservation.id === undefined && (
        <BigWrapper>
            <Wrapper>
                <Message2>No reservation found.</Message2>
            </Wrapper>
        </BigWrapper>
        )}
        </>
    );
}

const BigWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 500px;
    border: 2px solid ${themeVars.alabamaCrimson};
    border-radius: 5px;
    margin: 100px 0 30px 0;
    padding-left: 25px;
`;

const messageStyles = css`
    font-family: ${themeVars.contentFont};
    width: 440px;
    padding: 30px 0 15px 0; 
    margin-bottom: 20px;
    font-size: 25px;
    color: ${themeVars.alabamaCrimson};
`;

const Message1 = styled.h2`
    ${messageStyles};
    text-align: left;
    border-bottom: 2px solid ${themeVars.alabamaCrimson};
`;

const Message2 = styled.h2`
    ${messageStyles};   
    text-align: center;
`;

const Id = styled.p`
    margin-bottom: 20px;
`;

const Flight = styled.p`
    margin-bottom: 20px;
`;

const Seat = styled.p`
    margin-bottom: 20px;
`;

const Name = styled.p`
    margin-bottom: 20px;
`;

const Email = styled.p`
    margin-bottom: 30px;
`;

const Links = styled.div`
    display: flex;
`;

const StyledLink = styled(Link)`
    font-size: 20px;
    font-family: ${themeVars.headingFont};
    text-decoration: none;
    text-align: center;
    color: ${themeVars.orange};
    background-color: ${themeVars.alabamaCrimson};
    width: 180px;   
    border-radius: 5px;
    margin: 10px;
    padding: 15px 0;

    &:hover {
        color: ${themeVars.alabamaCrimson};
        background-color: ${themeVars.orange};
        border: 1px solid ${themeVars.alabamaCrimson};
    }
`;

export default YourReservation;