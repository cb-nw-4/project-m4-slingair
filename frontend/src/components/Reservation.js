import React, { useState } from 'react';

import styled from "styled-components";
import { themeVars } from "./GlobalStyles";


const Reservation = ()=>{
    const [flightId, setFlightId] = useState("");
    const [reservation, setReservation] = useState({});

    const handleChanged = (value)=>{
        setFlightId(value);
    };

    const handledClick = ()=>{
        fetch(`/reservation/${flightId}`)
          .then((res) => res.json())
          .then((json) => {       
            const { status, data, message } = json;
            if (status === 200) {
               setReservation(data);               
            }        
          }); 
    };    

    return (
        <Wrapper>
            <FindContainer>
                <label htmlFor="id">Find your reservation:</label>
                <Input
                    type="text"
                    name="id"
                    placeholder="Reservation id"
                    onChange={(ev) => handleChanged(ev.target.value)}
                    value={flightId}
                />
                <Button onClick={handledClick}>Find</Button>
            </FindContainer>
            {Object.keys(reservation).length !== 0 &&
            <ReservationContainer>
                <Title>Your Reservation: </Title>
                <p><strong>Reservation #: </strong>{reservation.id}</p>
                <p><strong>Flight #: </strong>{reservation.flight}</p>
                <p><strong>Seat #: </strong>{reservation.seat}</p>
                <p><strong>Name: </strong>{`${reservation.givenName} ${reservation.surname}`}</p>
                <p><strong>Email: </strong>{reservation.email}</p>  
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
`;

const FindContainer = styled.div`
    margin: 40px;
`;

const ReservationContainer = styled.div`
    margin-top: 50px;  
`;

const Button = styled.button`
    background-color: ${themeVars.alabamaCrimson};
    color: ${themeVars.selectiveYellow};
    border: none;
    padding: 8px 20px;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;
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