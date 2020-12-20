import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "../GlobalStyles";

const FlightSelect = ({ handleFlightSelect, flightNumber }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch(`/flights`)
      .then((res) => res.json())
      .then((json) => json.data)
      .then((data) => setFlights(data))
    
  }, []);


  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>

    
        <Dropdown id="flight" value={flightNumber} onChange={handleFlightSelect}>
          <Option value="Select">Select your flight</Option>
        {flights.map((flight) => {
            return <Option key={flight} value={flight}> {flight} </Option>;
          })}
        </Dropdown>
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
  height: 30px;
  margin-left:15px;
  border: none;
  border-radius: 5px;
  width:150px;
  font-weight:bold;
  color: ${themeVars.alabamaCrimson};
  
`;
const Option = styled.option`
 color: ${themeVars.alabamaCrimson};
  
`;

export default FlightSelect;
