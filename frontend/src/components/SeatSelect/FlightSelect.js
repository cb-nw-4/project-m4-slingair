import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "../GlobalStyles";

const FlightSelect = ({ handleFlightSelect,flightNumber }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // TODO: fetch the flight numbers
    fetch("/flights") 
      .then((res) => res.json())
      .then((json) => {
        setFlights(json.data);
      });
  }, []);

  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>
      {/* TODO: Create a dropdown from the flight numbers */}
      <Select value={flightNumber} onChange={handleFlightSelect}>
        <option disabled value="">Select a flight</option>
        {flights.map((flight,index)=>{
          return <option value={flight} key={flight}>{flight}</option>
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
margin: 5px; 
padding: 5px;
font-size:15px;
border-radius:5px;
font-family:${themeVars.contentFont};
`;

export default FlightSelect;
