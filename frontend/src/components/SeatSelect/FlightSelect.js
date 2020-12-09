import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "../GlobalStyles";

const FlightSelect = ({ handleFlightSelect }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // TODO: fetch the flight numbers
    fetch('/flights')
      .then((res) => res.json())
      .then((json) => {
        setFlights(json.data);
      })

  }, []);

  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>
      {/* TODO: Create a dropdown from the flight numbers */}

      <select id='flight' name='flight' onChange={handleFlightSelect}>
        <option>Select flight</option>
          {flights.map(flight => 
            <option key={flight} value={flight}>{flight}</option>
            
            )}
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
