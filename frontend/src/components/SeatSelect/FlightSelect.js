import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "../GlobalStyles";





const FlightSelect = ({ handleFlightSelect, flightNumber }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch("/flights")
    .then(res => res.json())
    .then(res => setFlights(res.data))
    
  }, []);

  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>
      <Select
      value = {flightNumber}
      onChange = {handleFlightSelect}
      >
    <option disabled selected value="select a flight">
          Select a flight
        </option>
        {flights.map((flight) =>{
          return(
            <option value={flight} key={flight}>
              {flight}
            </option>
          )
        })}
      </Select>
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
const Select = styled.select`
  height:30px;
  border-radius: 5px;
  border: 2px red solid;
  margin-left: 15px;
  padding-right:10px;
  text-align: left;
`;
export default FlightSelect;
