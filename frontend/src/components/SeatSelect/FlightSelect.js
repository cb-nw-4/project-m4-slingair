import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "../GlobalStyles";

const FlightSelect = ({ handleFlightSelect, flightNumber }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // TODO: fetch the flight numbers

    // handleFlightSelect()
    fetch(`/flights`)
      .then((res) => res.json())
      .then((res) => res.data)
      .then((data) => setFlights(data));
  }, []);

  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>
      <Select id="flight" value={flightNumber} onChange={handleFlightSelect}>
        <option disabled selected value="select a flight">
          select a flight
        </option>
        {flights.map((flight) => {
          return <option key={flight} value={flight}>{flight}</option>;
        })}
      </Select>
    </Wrapper>
  );
};

const Select = styled.select`
  border-radius: 5px;
  border: 1px red solid;
  padding-right: 0.4rem;
  padding-top: 0.3rem;
  padding-bottom: 0.4rem;
  margin-left: 1rem;
  text-align: left;
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
