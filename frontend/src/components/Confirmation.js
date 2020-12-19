import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Confirmation = ({ userReservation }) => {
  console.log(userReservation, 'reservation');
  console.log(userReservation.data, 'DATA');
  // console.log(userReservation.data[0], 'OBJECT')
  if(userReservation.data){
    const userInfo = userReservation.data[0];
    console.log(userInfo);
    return <Wrapper>
    <div className='reservationBox'>
        <div className='header'>Your flight is confirmed!</div>
        <p>Reservation #: {userInfo.id}</p>
        <p>Flight: {userInfo.flight}</p>
        <p>Seat #: {userInfo.seat}</p>
        <p>Name: {userInfo.givenName} {userInfo.surname}</p>
        <p>Email: {userInfo.email}</p>
    </div>
    <img className='tombstone' src={tombstone}/>
    </Wrapper>;
  } else {
    return <div>Loading...</div>
  }
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 150px;
  flex-direction: column;

  .reservationBox {
    width: 50vw;
    border: 2px red solid;
    display: flex;
    align-self: center;
    flex-direction: column;
    padding: 40px 35px;
  }
  .header {
    font-size: 30px;
    color: red;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid red;
    margin-bottom: 8px;
    padding-bottom: 8px;
  }

  p {
    font-size: 20px;
    margin: 7px 0;
    color: black;
  }

  .tombstone{
    width: 15vw;
    display: flex;
    /* border: 1px black solid; */
    margin-top: 50px;
  }
`;

export default Confirmation;
