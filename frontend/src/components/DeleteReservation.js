import React from 'react';
import styled from "styled-components";

const DeleteReservation = () => {
    return <DeletedMessage>Your reservation has been deleted.</DeletedMessage>
}

const DeletedMessage = styled.p`
text-align: center;
font-size: 25px;
margin-top: 50px;
`;

export default DeleteReservation;