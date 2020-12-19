import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { getFlights } from "../../../../backend/handlers"; 

import { themeVars } from "../GlobalStyles";

// gets flightnumber and handleFlightSelect from FE index.js

const FlightSelect = ({ handleFlightSelect }) => {
  // const [menu, setMenu] = useState(false);
  const [flights, setFlights] = useState([]);

  useEffect(() => {
  // sets flights to result of getFlights, which returns all flights in data file
    fetch('/flights')
      .then(response => response.json())
      .then(data => setFlights(data["data"][0]))
  }, []);

  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>
      <MenuContainer onChange={(event) => handleFlightSelect(event)}>
        <MenuItem>Select a flight</MenuItem>
        <MenuItem>{flights}</MenuItem>
      </MenuContainer>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  background: ${themeVars.cadmiumRed};
  height: 80px;
  display: flex;
  align-items: center;
  padding: ${themeVars.pagePadding};
  margin-bottom: ${themeVars.pagePadding};
`;

const MenuContainer = styled.select`
  background-color: ${themeVars.orange};
  position: relative;
  left: 10px;
  top: 5px;
  width: 125px;
  height: 25px;
  padding: 2px;
  border-style: none;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }

`;

const MenuItem = styled.option`

  &:hover {
    cursor: pointer;
  }
`;

// FIRST ATTEMPT: not sure why this code didn't work?
//   return (
//     <Wrapper>
//       <label htmlFor="flight">Flight Number :</label>
//       {/* <div> */}
//       <Button onClick={() => setMenu(!menu)}>Select a flight</Button>
//         <MenuContainer className={`${menu ? 'active' : 'inactive'}`}>
//           <MenuItemsContainer>
//             <MenuItem 
//               onClick={() => handleFlightSelect}
//               className={`${menu ? 'active' : 'inactive'}`}>{flights}</MenuItem>
//           </MenuItemsContainer>
//         </MenuContainer>
//       {/* </div> */}
//     </Wrapper>
//   );
// };

// const MenuContainer = styled.div`
//   position: relative;
//   display: none;
//   background-color: ${themeVars.orange};
//   min-width: 150px;
//   z-index: 100;

// &:active {
//   display: block;
// }
// `;

// try number two
// return (
//   <Wrapper>
//     <label htmlFor="flight">Flight Number :</label>
//       {menu
//       ? (
//         <MenuContainer onClick={() => setMenu(!menu)}>
//           <MenuItemsContainer onChange={handleFlightSelect}>
//             <MenuItem>Select a flight</MenuItem>
//             <MenuItem>{flights}</MenuItem>
//           </MenuItemsContainer>
//         </MenuContainer>
//       )
//       : (
//         null
//       )
//       }
//   </Wrapper>
// )
// };

// const Button = styled.button`
//   width: 150px;
//   height:  25px;
//   font-size: 12px;
//   color: black;
//   margin: 5px;
//   position: relative;
//   top: 5px;

//   &:hover {
//     cursor: pointer;
//   }
// `;

export default FlightSelect;
