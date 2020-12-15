import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import ReservationInfo from "./ReservationInfo";

const Update = ({ userReservation }) => {
  console.log('confirmation',userReservation );
  return (
    <Wrapper>
     {Object.keys(userReservation).length !== 0 ?
      <ConfirmationBox>
        <Title>Your reservation is updated!</Title>
        <ReservationInfo reservation={userReservation} />             
      </ConfirmationBox>  :
           <Title2>Your reservation is deleted!</Title2>}
    </Wrapper>);
};

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${themeVars.alabamaCrimson};
  border-bottom: solid 2px ${themeVars.alabamaCrimson};
  margin-bottom: 15px;
`;

const Title2 = styled(Title)`  
  border-bottom: none; 
  margin: 30px;
`;

const Image = styled.img`
  width: 200px;
`;

const ConfirmationBox = styled.div`  
  border: solid 2px ${themeVars.alabamaCrimson};
  padding: ${themeVars.pagePadding};
  line-height: 2;
  margin: 30px;
`;

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default Update;
