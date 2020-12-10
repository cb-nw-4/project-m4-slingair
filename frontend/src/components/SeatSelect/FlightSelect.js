import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "../GlobalStyles";
import RandomKey from '../RandomKey';

const FlightSelect = ({ handleFlightSelect }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/flights')
    .then((res) => res.json())
    .then((json) => {
      setFlights(json.data);
    });
  }, []);

  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>
      <Select onChange={(ev) => handleFlightSelect(ev)} name="flight">
        <option value="" disabled selected>Select a flight</option>
        {flights.map(flight => (
          <option key={RandomKey()} value={flight}>{flight}</option>
        ))}
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
  width: 125px;
  height: 30px;
  border-radius: 5px;
  background-color: white;
  margin-left: 10px;
`;

export default FlightSelect;
