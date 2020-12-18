import React from "react";
import styled from "styled-components";

import GlobalStyles, { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Confirmation = (props) => {
  console.log("Confirmation props",props);
  return (
    <Wrapper>
      <GlobalStyles /> 
      <RedBorder>
        <h1>Your flight is confirmed!</h1>
        <p><b>Reservation ID:</b> {props.userReservation.id}</p>
        <p><b>Flight:</b> {props.userReservation.flightNumber}</p>
        <p><b>Seat:</b> {props.userReservation.seat}</p>
        <p><b>Name:</b> {props.userReservation.givenName}  {props.userReservation.surname}</p>
        <p><b>Email:</b> {props.userReservation.email}</p>
      </RedBorder>
      <ImgDiv><img src={tombstone} alt="tombstone"/></ImgDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
background: ${themeVars.background};
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
height: calc(100vh - 110px);
`;

const RedBorder = styled.div`
border: 3px solid ${themeVars.alabamaCrimson};
border-radius: 5px;
margin: 10px;
padding: 30px;
width: 800px;
& p , h1 {
  font-family:${themeVars.contentFont}; 
  padding: 10px;
  font-size: 24px;
};
&p {
  color:black;
};
& h1 { 
  color:${themeVars.alabamaCrimson};
  font-size: 30px;
  border-bottom:3px solid ${themeVars.alabamaCrimson};
};
`;

const ImgDiv = styled.div`
height: 30%;
margin:15px;
& img {
  height:100%; 
}; 
`;

export default Confirmation;
