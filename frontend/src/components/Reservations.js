import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const Reservations = () => {
    const [reservations, setReservations] = useState([]);
    useEffect(() => {
        fetch("/reservations")
        .then((res) => res.json())
        .then((json) => {
            console.log(json.data[0]);
            setReservations(json.data[0]);
        })
    }, []);

    console.log(reservations.id);
  return (
    <Wrapper>
      <Title>Reservations</Title>
      <Div>
      <List>
        <Item><Span>First Name:</Span> {reservations.givenName}</Item>
        <Item><Span>Last Name:</Span>  {reservations.surname}</Item>
        <Item><Span>Email:</Span>  {reservations.email}</Item>
        <Item><Span>Seat Number:</Span>  {reservations.seat}</Item>
        <Item><Span>Flight Number:</Span>  {reservations.flight}</Item>
        <Item><Span>Reservation ID:</Span>  {reservations.id}</Item>
      </List>
      </Div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin:20px;

`;
const Div = styled.div`
display:flex;

margin-top:30px;

`;
const Title = styled.h1``;

const Span = styled.span`
text-decoration:underline;
font-weight:bold;
color:black;
`;

const List = styled.ul`
padding:10px;
border: 3px #AA001E solid;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
border-radius:10px;


`;

const Item = styled.li`
padding:5px;
font-family: ${themeVars.contentFont};
font-size:150%;
`;
export default Reservations;
