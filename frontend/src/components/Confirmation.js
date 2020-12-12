import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Confirmation = () => {

  const [confirm, setConfirm] = useState([]);
  useEffect(() => {
    fetch("/confirmed")
      .then((res) => res.json())
      .then((json) => {
        const result = JSON.parse(localStorage.getItem("data"))
        console.log(result);
          console.log(json.data);
          setConfirm(result);
        console.log(json.data);
      })
  }, []);
  console.log(confirm);
  return (<Wrapper>
  <Title>Confirmation</Title>
  <Div>
  <List>
    <Item><Span>First Name:</Span> {confirm.givenName}</Item>
    <Item><Span>Last Name:</Span>  {confirm.surname}</Item>
    <Item><Span>Email:</Span>  {confirm.email}</Item>
    <Item><Span>Seat Number:</Span>  {confirm.seat}</Item>
    <Item><Span>Flight Number:</Span>  {confirm.flightNumber}</Item>
    <Item><Span>Reservation ID:</Span>  {confirm.id}</Item>
  </List>
  </Div>
  <Tombstone src="../assets/tombstone.png" />
</Wrapper>);
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

const Tombstone = styled.image`

`;

export default Confirmation;
