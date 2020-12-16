import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "../GlobalStyles";

const FlightSelect = ({ handleFlightSelect }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch('/flights')
      .then((res) => res.json())
      .then((json) => {
        setFlights(json.data);
      });
  }, []);

  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>
      <Select  defaultValue= "" id='flight' onChange={(ev)=>handleFlightSelect(ev)}>
      <option value=""  disabled hidden>Select a flight </option>  
      {flights.map((flightNum)=>( <option key={flightNum} value={flightNum}>{flightNum} </option>))}
      </Select>
    </Wrapper>
  );
};


const Select = styled.select`
  margin-left: 20px;
  height: 35px;
  width: 125px;
  border-radius: 5px;
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
