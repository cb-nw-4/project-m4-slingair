import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "../GlobalStyles";

const FlightSelect = ({ handleFlightSelect }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch('/flights')
      .then((res) => res.json())
      .then((json) => {
        setFlights(json.flights);
      })
  }, []);

  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>
      <Dropdown name="flight" id="flight" onChange={handleFlightSelect}>
        <option>Select a flight</option>
        {flights.map((flight) => {
          return (
            <option value={flight} key={flight}>{flight}</option>
          );
        })}
      </Dropdown>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${themeVars.cadmiumRed};
  height: 80px;
  display: flex;
  align-items: center;
  padding: ${themeVars.pagePadding};
  margin-bottom: ${themeVars.pagePadding};
`;

const Dropdown = styled.select`
  position: relative;
  left: 20px;
  height: 30px;
  width: 120px;
  border-radius: 5px;
`;

export default FlightSelect;
