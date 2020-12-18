import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { themeVars } from "../GlobalStyles";
import RandomKey from '../RandomKey';

const FlightSelect = (props) => {
  const history = useHistory();
  const [flights, setFlights] = useState([]);
  let flightNum = 'Select a flight';

  useEffect(() => {
    fetch('http://localhost:8000/v1/flights')
      .then((res) => res.json())
      .then((json) => {
        if (json.result === 'ok') {
          setFlights(json.data);
        } else {
          history.push({
            pathname: '/error-page',
            state: json.message
          });
        }
      })
      .catch(() => {
        history.push({
          pathname: '/error-page',
          state: 'Component: FlightSelect, Cannot contact server'
        });
      });
  }, []);

  if (props.flightNumber !== null) {
    flightNum = props.flightNumber;
  }

  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>
      <Select onChange={(ev) => props.handleFlightSelect(ev)} value={flightNum} id="flight" name="flight">
        <option disabled>Select a flight</option>
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
