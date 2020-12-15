import React, { useEffect } from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Confirmation = ({userReservation}) => {
  console.log(userReservation)
  let resID=userReservation.id;
  let givenName=userReservation.givenName;
  let surname=userReservation.surname;
  let flight=userReservation.flight;
  let seat=userReservation.seat;
  let email=userReservation.email;
    return (
      <>
        <Wrapper>
          <Para>
            Your flight is confirmed!
          </Para>
          <Section>
            <Div><Span1>Reservation#: </Span1><span>{resID}</span></Div>
            <Div><Span1>First Name: </Span1><span>{givenName}</span></Div>
            <Div><Span1>Surname: </Span1><span>{surname}</span></Div>
            <Div><Span1>Flight#: </Span1><span>{flight}</span></Div>
            <Div><Span1>Seat#: </Span1><span>{seat}</span></Div>
          </Section>
        </Wrapper>
        <Img src={tombstone}/>
      </>
    );
};

const Img=styled.img`
  height:200px;
  width:200px;
  align-self:center;
  margin:15px;
`;

const Wrapper = styled.div`
  margin:auto;
  margin-top:43px;
  padding:40px;
  border: 2px solid ${themeVars.alabamaCrimson};
  border-radius:4px;
`;

const Span1=styled.span`
  font-weight: 650;
`;

const Para=styled.h1`
  font-family:"'Kosugi', Arial, Helvetica, sans-serif";
  color:${themeVars.alabamaCrimson};
  margin-bottom:15px;
  text-align:left;
`;

const Div=styled.div`
  margin-top:15px;
`;

const Section=styled.section`
  border-top:3px solid ${themeVars.alabamaCrimson};
`;

export default Confirmation;
