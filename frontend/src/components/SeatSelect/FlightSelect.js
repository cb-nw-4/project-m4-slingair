import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "../GlobalStyles";

const FlightSelect = ({ handleFlightSelect }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch("/flights/")
      .then((res) => res.json())
      .then((json) => {
        setFlights(json.data);
      });
  }, []);

  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>
      {
        <Dropdown onChange={(ev) => handleFlightSelect(ev.target.value)}>
           <DropdownOption hidden defaultValue> -- Available Flights -- </DropdownOption>
          {flights.map((flight) => (
            <DropdownOption key={flight} value={flight}>
              {flight}
            </DropdownOption>
          ))}
        </Dropdown>
      }
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

const Dropdown = styled.select`
  padding: 3px;
  margin: 10px;
  font-family: ${themeVars.headingFont};
  font-size: 25px;
  background: ${themeVars.background};
  border-radius: 6px;
`;

const DropdownOption = styled.option`
  font-family: ${themeVars.headingFont};
  font-size: 25px;
`;


export default FlightSelect;
