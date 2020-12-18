import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "../GlobalStyles";

const FlightSelect = ({ handleFlightSelect, flightNumber }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch("/flights", {
      method: "GET",
    })
    .then((res) => res.json())
    .then((res) => setFlights(res.data))
  }, []);



  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>

      <div>
          <FlightSelection value={flightNumber} onChange={(e) => handleFlightSelect(e.target.value)}>
            <Flight disable selected>Select a flight</Flight>
            {flights.map((flight) => {
                return (
                  <Flight value={flight}>{flight}</Flight>
                );
            })}
          </FlightSelection>
        
      </div>

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
 
const Button = styled.button` 
  margin-left: 20px;
  border-radius: 3px;
  border: none;
  background-color: white;
  width: 130px;
`;

const FlightSelection = styled.select` 
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: black;
  padding: 5px;
  margin-left: 15px;
`

const DropdownContainer = styled.div` 
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-left: 20px;
  border: 1px solid black;
  position: absolute;
  width: 130px;
`;

const Flight = styled.option`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  padding: 5px;
`;


export default FlightSelect;
