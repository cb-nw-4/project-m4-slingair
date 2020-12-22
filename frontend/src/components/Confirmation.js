import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";


const Confirmation = ({userReservation}) => {
  return (
    <Wrapper>
    <Container>
    <H3>Your flight is confirmed!</H3>
    <Info>
    <span>Reservation #:</span> {userReservation.id}
    </Info>
    <Info>
    <span>Flight #:</span> {userReservation.flight}
    </Info>
    <Info>
    <span>Seat #:</span> {userReservation.seat}
    </Info>
    <Info>
  <span>Name:</span> {userReservation.givenName}{" "}{userReservation.surname}
    </Info>
    <Info>
    <span>Email:</span> {userReservation.email}
    </Info>
    </Container>
    <Tomb src={tombstone}/>
    </Wrapper>
  )  
};


const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`;

const Container = styled.div`
display:flex;
flex-direction:column;
width:500px;
height:300px;
margin-top:150px;
margin-bottom:50px;
border-radius: 5px;
padding:30px;
border: 2px ${themeVars.alabamaCrimson} solid;
`;

const H3 = styled.h3`
font-size:25px;
font-weight:bold;
border-bottom: 2px ${themeVars.alabamaCrimson} solid;
padding-bottom:20px;
text-align:left;
color:${themeVars.alabamaCrimson};
`;

const Info = styled.p`
margin-top:18px;

span{
  font-weight:bold;
}
`;

const Tomb = styled.img`
  width:200px;
`;


export default Confirmation;
