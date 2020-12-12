import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Confirmation = ({userReservation}) => {

 
  return <Wrapper>
    <Container>
      <Head>Your Flight is confirmed!</Head>
      <p>
        <b>Reservation #:</b>{userReservation.id}
      </p>

      <p>
        <b>Flight #:</b>{userReservation.flight}
      </p>
      <p>
        <b>seat #:</b>{userReservation.seat}
      </p>
      <p>
        <b>Name:</b>{userReservation.givenName} {userReservation.surname}
      </p>

      <p>
        <b>Email:</b>{userReservation.email}
      </p>

    </Container>

    <img src={tombstone} alt='img logo'/>
  </Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  padding: ${themeVars.pagePadding};
  margin-bottom: ${themeVars.pagePadding};
  align-items: center;
  flex-direction: column;
  max-height: 100%;

  & img{
    margin: 20px;
    height: 250px;
  }
`;

const Container = styled.div`
  border: solid 2px ${themeVars.alabamaCrimson};
  padding: 20px;

  & p{
    padding: 10px;
  }


`

const Head = styled.h4`

  font-size: 24px;
  border-bottom: solid 1px ${themeVars.alabamaCrimson};
  padding: 10px;
  margin: 10px;
  color: ${themeVars.alabamaCrimson};
`

export default Confirmation;
