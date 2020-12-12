import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";


const Confirmation = () => {
  const { id, flight, seat, email, givenName, surname } = JSON.parse(window.localStorage.getItem('myData'));
  window.localStorage.setItem('myDatas', JSON.stringify(JSON.parse(window.localStorage.getItem('myData'))));
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
      <MenuContainer>
        <StyledNavLink to="/profile">Change</StyledNavLink>
        <StyledNavLink to="/delete">Delete</StyledNavLink>
      </MenuContainer>
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

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`;


const StyledNavLink = styled(NavLink)`
  background: ${themeVars.selectiveYellow};
  border: 1px solid transparent;
  border-radius: 4px;
  color: ${themeVars.alabamaCrimson};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${themeVars.headingFont};
  font-size: 18px;
  height: 42px;
  margin: 0 0 0 8px;
  padding: 0 14px;
  width: 100%;
  text-decoration: none;
  transition: all ease 400ms;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover {
    background: ${themeVars.alabamaCrimson};
    color: ${themeVars.selectiveYellow};
    border-color: ${themeVars.selectiveYellow};
  }
`;

export default Confirmation;
