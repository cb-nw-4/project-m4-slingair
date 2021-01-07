import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import ReservationInfo from "./ReservationInfo";
import Button from "./SeatSelect/Button";


const Reservation = ()=>{
    const [flightId, setFlightId] = useState("");
    const [reservation, setReservation] = useState({});
    const [disabled, setDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChanged = (value)=>{
        setFlightId(value);        
    };

    useEffect(() => {
        // This hook is listening to state changes and verifying whether or not all
        // of the form data is filled out.
        flightId === ""
          ? setDisabled(true)
          : setDisabled(false);
      }, [flightId, setDisabled]);

    const handledClick = ()=>{       
        fetch(`/reservation/${flightId}`)
          .then((res) => res.json())
          .then((json) => {       
            const { status, data, message } = json;
            if (status === 200) {
               setErrorMessage("");
               setReservation(data);               
            }  
            else {              
                setErrorMessage(message);
                setReservation({}); 
            }      
          }); 
    };    

    return (
        <Wrapper>
            <h1 >Find your reservation</h1>
            <FindContainer>                
                <Input
                    type="text"
                    name="id"
                    placeholder="Reservation id"
                    onChange={(ev) => handleChanged(ev.target.value)}
                    value={flightId}
                />
                <ButtonWrapper>
                    <Button handleClick={handledClick} disabled={disabled} text="Find" />
                </ButtonWrapper>
            </FindContainer>
            {Object.keys(reservation).length !== 0 && 
            <ReservationContainer>
                <Title>Your Reservation: </Title>
                <ReservationInfo reservation={reservation} />                
            </ReservationContainer>}
            { errorMessage !== "" &&
            <ReservationContainer>
                <Title>{ errorMessage} </Title>                    
            </ReservationContainer>}
        </Wrapper>
    );

};

const ButtonWrapper = styled.div`
  width: 125px;
  display: inline-block;
`;

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

const FindContainer = styled.div`
    margin: 40px;
`;

const ReservationContainer = styled.div`
    margin-top: 20px;  
`;

const Input = styled.input`
    margin: 0 30px;
    width: 500px;
    font-size: 20px;
`;
const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${themeVars.alabamaCrimson};
  border-bottom: solid 2px ${themeVars.alabamaCrimson};
  margin-bottom: 15px;
`;

export default Reservation;