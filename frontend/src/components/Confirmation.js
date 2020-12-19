import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Confirmation = ({ userReservation }) => {
  console.log(userReservation, 'reservation');
  console.log(userReservation.data, 'DATA');
  return <Wrapper>
    <div className='reservationBox'>
        <div className='header'>Your flight is confirmed!</div>
        <p>Reservation #: {userReservation.status}</p>
        <p>Flight:</p>
        <p>Seat #:</p>
        <p>Name:</p>
        <p>Email:</p>
    </div>
    <img className='tombstone' src={tombstone}/>
    </Wrapper>;
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
