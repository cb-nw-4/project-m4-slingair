import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const ViewReservation = (props) => {
  if (Object.keys(props.userReservation).length !== 0) {
    return (
      <Wrapper>
        <DetailBox>
          <Heading>Your Reservation</Heading>
          <p><StyleBold>Reservation #:</StyleBold> {props.userReservation.id}</p>
          <p><StyleBold>Flight #:</StyleBold> {props.userReservation.flight}</p>
          <p><StyleBold>Seat #:</StyleBold> {props.userReservation.seat}</p>
          <p><StyleBold>Name #:</StyleBold> {props.userReservation.givenName} {props.userReservation.surname}</p>
          <p><StyleBold>Email #:</StyleBold> {props.userReservation.email}</p>
        </DetailBox>
        <TombStone />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <DetailBox>You have no reservations.</DetailBox>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  margin: 0 auto;
`;

const DetailBox = styled.div`
  margin-top: 150px;
  width: 450px;
  border: 2px solid ${themeVars.alabamaCrimson};
  border-radius: 5px;
  padding: 15px;
  line-height: 2.2;
  font-size: 0.9rem;
`;

const Heading = styled.div`
  color: ${themeVars.alabamaCrimson};
  border-bottom: 2px solid ${themeVars.alabamaCrimson};
  padding-bottom: 5px;
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

const TombStone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 450px;
  height: 132px;
  background-image: url(${tombstone});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const StyleBold = styled.span`
  font-weight: bold;
`;

export default ViewReservation;
