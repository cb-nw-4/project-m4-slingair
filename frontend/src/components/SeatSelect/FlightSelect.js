import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "../GlobalStyles";

const FlightSelect = ({ handleFlightSelect }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // TODO: fetch the flight numbers
    fetch("/flights")
    .then((res)=>res.json())
    .then((res)=>setFlights(Object.keys(res.data)))
    .catch((error)=>console.log(error))

  }, []);

  let key =1;
  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>
      <DropDown name="flightNum" onChange ={handleFlightSelect}> Select a flight 
      <option hidden>Select a flight</option>
        { flights.map((flight)=>
        <option value={flight} key={key++}>{flight}</option>)}
      </DropDown>      
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${themeVars.cadmiumRed};
  height: 80px;
  display: flex;
  align-items: center;
  padding: ${themeVars.pagePadding};
  margin-bottom: ${themeVars.pagePadding};
`;

const DropDown = styled.select`
  background-color: white;
  margin-left: 20px;
  padding: 8px 5px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  width: 140px;
`;

export default FlightSelect;
