import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Plane from "./Plane";

import { themeVars } from "../GlobalStyles";

const FlightSelect = ({ handleFlightSelect }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch("/flights", {
      method: "GET",
    })
    .then((res) => res.json())
    .then((res) => setFlights(res.flights))
  }, []);

  let [showMenu, setShowMenu] = useState(false);

  const renderFlights = () => {
    let renderedFlights = []
    flights.forEach((flight) => {
      renderedFlights.push(<Flight onClick={() => handleFlightSelect(flight)}>{flight}</Flight>);
    });
    if (flights.length > 0) {
      showMenu = false;
    }
    return renderedFlights;
  }

  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>

      <div>
        <Button onClick={() => setShowMenu(showMenu = true)}>
          <FlightSelection>Select a flight ▼</FlightSelection>
        </Button>

        { showMenu === true
          ? (
            <DropdownContainer>
              <Flight>Select a flight</Flight>
              <Flight onClick={() => setShowMenu(showMenu = false)}>{renderFlights()}</Flight>
            </DropdownContainer>
          )
          : (
            null
          )
        }
        
      </div>

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
 
const Button = styled.button` 
  margin-left: 20px;
  border-radius: 3px;
  border: none;
  background-color: white;
  width: 130px;
`;

const FlightSelection = styled.p` 
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: black;
  padding: 5px;
`

const DropdownContainer = styled.div` 
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-left: 20px;
  border: 1px solid black;
  position: absolute;
  width: 130px;
`;

const Flight = styled.a`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  padding: 5px;
`;


export default FlightSelect;
