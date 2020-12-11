import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "../GlobalStyles";

const FlightSelect = ({ handleFlightSelect }) => {
  const [flights, setFlights] = useState([]);
  
  useEffect(() => {
    // TODO: fetch the flight numbers
    fetch("http://localhost:8000/")
      .then((res) => {
        return res.json();
      })
      .then(({ data }) => {
        setFlights(Object.values(data.flightsID));
      });
  }, []);

  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>
      {/* TODO: Create a dropdown from the flight numbers */}
      <Dropdown onChange={(element) => handleFlightSelect(element)}>
        <option value="FlightNumber">Please select a flight</option>
        {flights.map((flightNumber, i) => (
          <option key={i}>{flightNumber}</option>
        ))}
      </Dropdown>
    </Wrapper>

    
  );
};

const Dropdown = styled.select`
  margin: 6px 0 0 20px;
  padding: 5px;
  border-radius: 15px;
`;

const Wrapper = styled.div`
  background: ${themeVars.cadmiumRed};
  height: 80px;
  display: flex;
  align-items: center;
  padding: ${themeVars.pagePadding};
  margin-bottom: ${themeVars.pagePadding};
`;

export default FlightSelect;
