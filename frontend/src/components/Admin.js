import React, { useState, useEffect } from 'react';
import ReservationInfo from './ReservationInfo';
import { themeVars } from "./GlobalStyles";
import styled from 'styled-components';

const Admin = ()=>{
    const [reservations, setReservations] = useState([]); 
    const [singleReservation, setSingleReservation] = useState({}); 
    const [errorMessage, setErrorMessage] = useState("");

    
    useEffect(() => {       
        fetch('/reservations')
        .then((res) => res.json())
        .then((json) => {
            const { status, data, message } = json; 
            if (status === 200) {
              setReservations([...data]);              
            }
            else {                      
              console.log(message)
            };
          });
         
      }, []);

      const handleReservation = (ev)=>{
        fetch(`/reservation/${ev.target.value}`)
        .then((res) => res.json())
        .then((json) => {       
          const { status, data, message } = json;
          if (status === 200) {
             setErrorMessage("");
             setSingleReservation(data);               
          }  
          else {              
              setErrorMessage(message);
              setSingleReservation({}); 
          }      
        });

      }

    return (
        <Wrapper>
            <h1>All reservations</h1>
            <Select  defaultValue= "" id='reservation' onChange={(ev)=>handleReservation(ev)}>
            <option value=""  disabled hidden>Select a reservation id </option>  
            {reservations.map((reservation)=>( <option key={reservation.id} value={reservation.id}>{reservation.id} </option>))}
            </Select>
            {Object.keys(singleReservation).length !== 0 &&
                <ReservationContainer>
                <ReservationInfo  reservation={singleReservation} />
            </ReservationContainer>
            }
           { errorMessage !== "" &&
            <ReservationContainer>
                <Error>{`Error: ${errorMessage}`} </Error>                    
            </ReservationContainer>}
        </Wrapper>
    );

};

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;   
height: 100vh;
line-height: 1.6;

h1 {
    margin-bottom: 15px;
    background-color: ${themeVars.cadmiumRed}; 
    width: 100%;
    padding: 15px;
}
`;

const Error = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${themeVars.alabamaCrimson}; 
  margin-bottom: 15px;
`;
const Select = styled.select`  
  height: 35px;
  width: 300px;
  border-radius: 5px;
  margin-bottom: 30px;
`;

const ReservationContainer = styled.div`
    margin: 40px;   
`;

export default Admin;