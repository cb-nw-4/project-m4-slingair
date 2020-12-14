import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Confirmation = ({ userReservation }) => {
  console.log('confirmation',userReservation );
  return (
    <Wrapper>
      <ConfirmationBox>
        <Title>Your flight is confirmed!</Title>
        <p><strong>Reservation #: </strong>{userReservation.id}</p>
        <p><strong>Flight #: </strong>{userReservation.flight}</p>
        <p><strong>Seat #: </strong>{userReservation.seat}</p>
        <p><strong>Name: </strong>{`${userReservation.givenName} ${userReservation.surname}`}</p>
        <p><strong>Email: </strong>{userReservation.email}</p>      
      </ConfirmationBox>
      <Image src={tombstone} alt="tomb"/>
    </Wrapper>);
};

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${themeVars.alabamaCrimson};
  border-bottom: solid 2px ${themeVars.alabamaCrimson};
  margin-bottom: 15px;
`;

const Image = styled.img`
  width: 200px;
`;

const ConfirmationBox = styled.div`  
  border: solid 2px ${themeVars.alabamaCrimson};
  padding: ${themeVars.pagePadding};
  line-height: 2;
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default Confirmation;
