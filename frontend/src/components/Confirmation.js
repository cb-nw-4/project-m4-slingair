import React, {useEffect, useState} from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Confirmation = () => {
  const [reservData, setReservData] = useState([]);

  useEffect(() => {
    if(localStorage.getItem("id")!=null){
      fetch(`/reservation/${localStorage.getItem("id")}`)
      .then((res)=>res.json())
      .then((res)=>setReservData(res.data))
    }
  }, [localStorage.getItem("id")]);

  return (
  <Wrapper>
    <Box>
      <Confirmed>Your flight is confirmed!</Confirmed>
      <Info><b>Reservation #:</b> {reservData.id}</Info>
      <Info><b>Flight #:</b> {reservData.flight}</Info>
      <Info><b>Seat #:</b> {reservData.seat}</Info>
      <Info><b>Name:</b> {reservData.givenName} {reservData.surname}</Info>
      <Info><b>Email:</b> {reservData.email}</Info>
    </Box>
    <Img src={tombstone} />
  </Wrapper>);
};

const Wrapper = styled.div``;

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

const Img = styled.img`
  width:180px;
  height: 160px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  display: block;
`;

export default Confirmation;
