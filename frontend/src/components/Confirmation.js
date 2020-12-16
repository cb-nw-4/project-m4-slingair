import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";
import ReservationInfo from "./ReservationInfo";

const Confirmation = ({ userReservation }) => {
  return (
    <Wrapper>
      <ConfirmationBox>
        <Title>Your flight is confirmed!</Title>
        <ReservationInfo reservation={userReservation} />             
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
