import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "../GlobalStyles";
// get all flight numbers available by fetch flights
// setFlights sets the numbers
// create a dropdown with the values (flight)
const FlightSelect = ({ handleFlightSelect, flightNumber }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch("/flights")
      .then((response) => response.json())
      .then((response) => {
        console.log("pfff", response.data);
        setFlights(response.data);
      });
  }, []);

  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>
      {/* TODO: Create a dropdown from the flight numbers */}
      <select value={flightNumber} onChange={handleFlightSelect}>
        <option>Please select a flight</option>
        {flights.map((flight) => {
          return <option value={flight}>{flight}</option>;
        })}
      </select>
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

export default FlightSelect;
