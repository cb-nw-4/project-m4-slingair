import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const Admin = () => {
  const [Admin, setAdmin] = useState([]);
  useEffect(() => {
    fetch("/Admin")
      .then((res) => res.json())
      .then((json) => {
        let arrayData = json.data;
        let result = JSON.parse(localStorage.getItem("data"));
        arrayData.push(result);

        let filteredId = (array) => {
          let arrayId = array.filter((arr) => {
            if (arr.id !== undefined) {
              return arr;
            }
          });
          return arrayId;
        };

       let filteredData = filteredId(arrayData);
       setAdmin(filteredData);
      });
  }, []);

const allAdmin = (Admin) => {
  return ( Admin.map((reservation) => { 
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
            <Span>Flight Number:</Span> {reservation.flightNumber}
          </Item>
          <Item>
            <Span>Reservation ID:</Span> {reservation.id}
          </Item>
        </List>
      </Div>
 
  )}))}
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
  padding: 10px;
  border: 3px #aa001e solid;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
`;

const Item = styled.li`
  padding: 5px;
  font-family: ${themeVars.contentFont};
  font-size: 150%;
`;
export default Admin;
