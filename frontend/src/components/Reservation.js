import React, {useEffect, useState} from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";

const Reservation = () =>{
    const [reservData, setReservData] = useState([]);

    useEffect(() => {
        if(window.localStorage.getItem("id")){
          fetch(`/reservation/${localStorage.getItem("id")}`)
          .then((res)=>res.json())
          .then((res)=>setReservData(res.data))
        }
      }, [localStorage.getItem("id")]);

    return (
        <>
    <Box>
      <Confirmed>Reservation details</Confirmed>
      <Info><b>Reservation #:</b> {reservData.id}</Info>
      <Info><b>Flight #:</b> {reservData.flight}</Info>
      <Info><b>Seat #:</b> {reservData.seat}</Info>
      <Info><b>Name:</b> {reservData.givenName} {reservData.surname}</Info>
      <Info><b>Email:</b> {reservData.email}</Info>
    </Box>
        </>

    );

};

const Info = styled.p`
  font-family:${themeVars.contentFont};
  margin-bottom: 15px;
`;

const Confirmed = styled.p`
    color: ${themeVars.alabamaCrimson};
    font-weight: bold;
    font-size: 20px; 
    display: inline-block;
    width: 100%;
    border-bottom: 2px solid ${themeVars.alabamaCrimson};
    padding-bottom: 15px;
    margin-bottom: 15px;
      
`;

const Box = styled.div`
  margin: auto;
  width: fit-content;
  border: ${themeVars.alabamaCrimson} 2px solid;
  border-radius: 4px;
  margin-top: 100px;
  padding: 20px;
`;
export default Reservation;
