import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";


const Confirmation = ({  }) => {
  const { id, flight, seat, email, givenName, surname } = JSON.parse(window.localStorage.getItem('myData'));
  return (
    <Wrapper>
      <ConfirmationCard>
        <ConfirmationTitle> Your flight is confirmed.</ConfirmationTitle>
        <ConfirmationContainer>
          <ConfirmationDetails>
            <span><strong>Reservation #:</strong></span> {id}
          </ConfirmationDetails>
          <ConfirmationDetails>
            <span><strong>Flight #:</strong></span> {flight}
          </ConfirmationDetails>
          <ConfirmationDetails>
            <span><strong>Seat #:</strong></span> {seat}
          </ConfirmationDetails>
          <ConfirmationDetails>
            <span><strong>Name:</strong></span> {givenName} {surname}
          </ConfirmationDetails>
          <ConfirmationDetails>
            <span><strong>Email:</strong></span> {email}
          </ConfirmationDetails>
        </ConfirmationContainer>
      </ConfirmationCard>
      <RIP src={tombstone} alt='tombstone' />
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const ConfirmationCard = styled.div`
  border: 3px solid ${themeVars.alabamaCrimson};
  border-radius: 5px;
  margin: auto;
  padding: 30px;
  width: 550px;
`;

const ConfirmationTitle = styled.h1`
color: ${themeVars.alabamaCrimson};
border-bottom: 3px solid ${themeVars.alabamaCrimson};
padding: 8px 12px 10px 12px;
`;

const ConfirmationContainer = styled.ul`
  padding: 8px 12px 10px 12px;
`;

const ConfirmationDetails = styled.li`
  padding: 10px;
`;

const RIP = styled.img`
  width: 200px;
  padding-top: 100px;
`;

export default Confirmation;
