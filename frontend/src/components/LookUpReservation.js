import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const LookUpReservation = () => {
  const [reservation, setReservation] = useState({});
  const {id} = useParams();
  
  useEffect(() => {
    fetch(`/reservations/${id}`)
      .then(res => res.json())
      .then((json) => {
        //console.log(json)
  setReservation(json)
  })}, [])

    const status = reservation.status;
    const data = reservation.data;

  return (
    <Wrapper> {status === 200 ? 
      <>
        <Title>Reservation found</Title>
          <Reservation>
            <p><Bold>Registration Number: </Bold> {data.id}</p>
            <p><Bold>Name: </Bold> {data.surname}, {data.name}</p>
            <p><Bold>Email: </Bold> {data.email}</p>
            <p><Bold>Flight Number: </Bold> {data.flight}</p>
            <p><Bold>Seat: </Bold>{data.seat}</p>
          </Reservation>
      </>
    : <Title>{reservation.message}</Title>
    } </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${themeVars.selectiveYellow};
  height: 100vh;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  color:  white;
  text-align: center;
`;

const Reservation = styled.div`
  font-size: 20px;
  border: 3px solid  ${themeVars.alabamaCrimson};
  width: 75%;
  border-radius: 5px;
  margin: 15px auto;
  line-height: 35px;
  padding: 15px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

export default LookUpReservation;