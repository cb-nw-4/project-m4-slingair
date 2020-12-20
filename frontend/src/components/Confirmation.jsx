import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Confirmation = (props) => {
  return (
    <Wrapper>
      <Wrapper1>
        <Wrapper2>
          <ConfirmationPage>
            <h4>Your flight is confirmed!</h4>
          </ConfirmationPage>
        </Wrapper2>
        <Wrapper4>
          <Id>
            <h4>Reservation #:&nbsp; </h4>
            {props.userReservation.id}
          </Id>
          <Flightnumber>
            <h4>Flight #: &nbsp;</h4>
            {props.userReservation.flight}
          </Flightnumber>
          <Seat>
            <h4>Seat #: &nbsp;</h4>
            {props.userReservation.seat}{" "}
          </Seat>
          <Name>
            <h4>Name: &nbsp;</h4>
            {props.userReservation.givenName}&nbsp;
            {props.userReservation.surname}
          </Name>
          <Email>
            <h4>Email: &nbsp;</h4>
            {props.userReservation.email}
          </Email>
        </Wrapper4>
      </Wrapper1>
      <Wrapper3>
        <img alt="Tombstone" src={tombstone} />
      </Wrapper3>
    </Wrapper>
  );
};
const Wrapper4 = styled.span`
  margin-left: 30px;
`;
const Wrapper = styled.span`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`;
const Wrapper1 = styled.span`
  height: 320px;
  width: 600px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  box-sizing: border-box;
  border: solid ${themeVars.cadmiumRed} 2px;
`;

const Wrapper2 = styled.span`
  justify-content: center;
  align-items: center;
  color: ${themeVars.cadmiumRed};

  margin-left: 30px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-bottom: 2px solid ${themeVars.cadmiumRed};
  margin-right: 30px;
`;
const Wrapper3 = styled.span`
  img {
    width: 150px;
    padding-top: 50px;
    justify-content: center;
    align-items: center;
  }
`;
const ConfirmationPage = styled.span`
  font-size: 22px;
  font-weight: 700;
  margin: 40px;
`;
const Id = styled.span`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;
const Email = styled.span`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;
const Seat = styled.span`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;
const Name = styled.span`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;
const Flightnumber = styled.span`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

export default Confirmation;
