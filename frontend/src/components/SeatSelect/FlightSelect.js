import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "../GlobalStyles";

const FlightSelect = ({ handleFlightSelect }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // TODO: fetch the flight numbers
    fetch("/getflights")
    .then(res=>res.json())
    .then(data=>setFlights(data.data))
  }, []);
  return (
    <Wrapper>
      <span>
        <label htmlFor="flight">Flight Number :</label>
      </span>
      <span>
        <Select id="flight" onChange={(ev)=> handleFlightSelect(ev)}>
          <option>Select the flight</option>
          {flights.map(elem=>{
            return (
              <>
                <option value={elem}>{elem}</option>
              </>
            )
          })}
        </Select>
      </span>
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

const Select=styled.select`
  height:30px;
  margin-left:10px;
  border-radius:4px;
`;

export default FlightSelect;
