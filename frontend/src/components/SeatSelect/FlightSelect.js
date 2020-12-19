import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "../GlobalStyles";

const FlightSelect = ({ handleFlightSelect, flightNumber }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch('/flights')
      .then(res => res.json())
      .then((json) => {
        //console.log(json)
        setFlights(json.data)
  })}, [])

  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>
        <select value={flightNumber} onChange={(ev) => handleFlightSelect(ev)}>
          <option value="" disabled hidden>Select a Flight</option>
            {flights.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
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

  & select {
    margin: 15px;
    padding: 10px 20px;
    border-radius: 3px;
  }
`;

export default FlightSelect;
