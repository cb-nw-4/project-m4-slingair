import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { themeVars } from "./GlobalStyles";

const SingleReservation = () => {
    const [reservations, setReservations] = useState([]);
    const { id } = useParams();
   
    useEffect(() => {
      fetch(`/reservations/:${id}`)
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
          let arrayData = json.data;
          console.log({id});
          console.log(arrayData)
          setReservations(arrayData);
        //   let result = JSON.parse(localStorage.getItem("data"));
        //   arrayData.push(result);
        //   setReservations(arrayData);
        //     console.log(reservations)
      
   
         
        });
    }, []);
  
    console.log(reservations);
  const allReservations = (reservations) => {
    return ( reservations.map((reservation) => { 
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
    return allReservations(reservations);
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
export default SingleReservation;