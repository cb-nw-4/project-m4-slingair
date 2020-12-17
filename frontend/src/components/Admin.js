import React, {useEffect , useState} from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";

function Admin({ userReservation }) {

  const [allReservations, setAllReservations] = useState([])

  useEffect(() => {
      fetch(`https://journeyedu.herokuapp.com/slingair/users?limit=25`)
      .then(res => res.json())
      .then(json => setAllReservations(json))
  },[])

  console.log(allReservations)
  return (
    <>
    <H1>All Reservations</H1>
    <Div>
      {allReservations.map((reservation) => {
        return( 
        <Wrapper>
          <p>{reservation.id}</p>
          <p>{reservation.givenName}</p>
          <p>{reservation.surname}</p>
          <p>{reservation.flight}</p>
          <p>{reservation.seat}</p>
          <p>{reservation.surname}</p>
          <p>{reservation.email}</p>
        </Wrapper>)
      })}
    </Div>
  </>
  )
}

const H1 = styled.h1`
margin-top: 2rem;
margin-bottom: 5rem;
`;

const Div = styled.div`
height: 500px;
width: 500px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-self: center;

  align-items: center;
  align-self: center;
`;

const Wrapper = styled.div`
  border: ${themeVars.cadmiumRed} 1px solid;
  padding: 1rem;
  margin-bottom: 1rem;
`;



export default Admin
