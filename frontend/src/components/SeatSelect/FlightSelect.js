import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "../GlobalStyles";

const FlightSelect = ({ handleFlightSelect }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch("/flight")
      .then((res) => res.json())
      .then((json) => {
        setFlights(json.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  const handleChange = (e) => {
    handleFlightSelect(e);
  };

  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>

      <Form>
        <Dropdown onChange={handleChange}>
          <Option value="Select">Select your flight</Option>
          <Option value={flights}>{flights}</Option>
        </Dropdown>
      </Form>
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

const Form = styled.div`
  margin-left: 10px;
`;
const Dropdown = styled.select`
  height: 30px;
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
