import React from 'react';
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const DeleteReservation = () => {
    return <DeletedMessage>Your reservation has been deleted.</DeletedMessage>
}

const DeletedMessage = styled.p`
    margin: auto;
    font-size: 25px;
    font-weight: bold;
    color:  ${themeVars.alabamaCrimson};
    text-align: center;
    padding: 50px;
`;

export default DeleteReservation;