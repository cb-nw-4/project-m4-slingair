import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const Admin = ({userReservation}) => {
  const [Admin, setAdmin] = useState([]);
  const [newClient, setNewClient] = useState([])
    useEffect(() => {
    fetch("/admin")
      .then((res) => res.json())
      .then((json) => {
          console.log(json.data)
          
        const arrayData = json.data;
        let localData = JSON.parse(localStorage.getItem("formData"));

        arrayData.push(localData);

     

       setAdmin(arrayData);
      });
  }, []);
console.log(newClient)

const allAdmin = (Admin) => {
  return ( Admin.map((reservation) => {
    //   if (reservation != "") {
    return (
  
   
      <Div key={reservation.id}>
        <List key={reservation.id}>
          <Item>
            <Span>First Name:</Span> {reservation.givenName}
          </Item>
          <Item>
            <Span>Last Name:</Span> {reservation.surname}
          </Item>
          <Item>
            <Span>Email:</Span> {reservation.email}
          </Item>
          <Item>
            <Span>Seat Number:</Span> {reservation.seat}
          </Item>
          <Item>
            <Span>Flight Number:</Span> {reservation.flightNumber || reservation.flight}
          </Item>
          <Item>
            <Span>Reservation ID:</Span> {reservation.id}
          </Item>
        </List>
      </Div>
 
  )

}))}
  return allAdmin(Admin);
};


const Div = styled.div`
  display: flex;

  margin-top: 30px;
`;


const Span = styled.span`
  text-decoration: underline;
  font-weight: bold;
  color: black;
`;

const List = styled.ul`
background-color:white;
  padding: 10px;
  border: 3px #aa001e solid;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
`;

const Item = styled.li`

  padding: 5px;
  font-family: ${themeVars.contentFont};
width:90vw;
font-size:120%;
`;
export default Admin;
