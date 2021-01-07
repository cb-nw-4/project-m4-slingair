import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "../GlobalStyles";

const FlightSelect = ({ handleFlightSelect }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // TODO: fetch the flight numbers
<<<<<<< HEAD
    fetch('/flights')
    .then((res) => res.json())
    .then((json) => {
      setFlights(json.data);
    })
=======
    fetch("/flights")
      .then((res) => res.json())
      .then((json) => {
        setFlights(json.data);
      });
>>>>>>> 0bcdb9dbcf0ba4200613d1207429ebe91294a535
  }, []);

  console.log(flights);

  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>
      <select name="flights" id="flights" onChange={handleFlightSelect}>
<<<<<<< HEAD
        <option>Select flight:</option>
      {/* TODO: Create a dropdown from the flight numbers */
      flights.map((flight) => {
        return <option value={flight}>{flight}</option>
      })
=======
      {/* TODO: Create a dropdown from the flight numbers */
        flights.map((flight) => {
          return <option value={flight}>{flight}</option>
        })
>>>>>>> 0bcdb9dbcf0ba4200613d1207429ebe91294a535
      }
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
