import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const ViewReservation = (userReservation) => {
  return (
    <>
      <Text>Reservation Summary</Text>
      <GrandParentWrapper>
        <ParentWrapper>
          <Wrapper>
            <Text>Reservation ID:</Text>
            <Text>Email:</Text>
            <Text>First name:</Text>
            <Text>Last name:</Text>
            <Text>Flight:</Text>
            <Text>Seat:</Text>
            <Text>Meal:</Text>
          </Wrapper>
          <Wrapper>
            <Text>{userReservation.userReservation.id}</Text>
            <Text>{userReservation.userReservation.email}</Text>
            <Text>{userReservation.userReservation.givenName}</Text>
            <Text>{userReservation.userReservation.surname}</Text>
            <Text>{userReservation.userReservation.flight}</Text>
            <Text>{userReservation.userReservation.seat}</Text>
            <Text>Not Included</Text>
          </Wrapper>
        </ParentWrapper>
      </GrandParentWrapper>
    </>
  );
};

const GrandParentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`;

const ParentWrapper = styled.div`
  width: 1200px;
  display: flex;
  border: 3px;
  border-style: solid;
  border-color: red;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Text = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  z-index: 4;
  padding: 20px;
`;

export default ViewReservation;
