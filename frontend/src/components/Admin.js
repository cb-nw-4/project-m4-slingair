import React, { useState, useEffect } from 'react';
import ReservationInfo from './ReservationInfo';
import { themeVars } from "./GlobalStyles";
import styled from 'styled-components';

const Admin = ()=>{
    const [reservations, setReservations] = useState([]); 
    
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

    return (
        <Wrapper>
            <h1>All reservations</h1>
            {reservations.map((reservation)=>{
                return(
                    <ReservationContainer key={reservation.id}>
                        <ReservationInfo  reservation={reservation} />
                    </ReservationContainer>
                );
            })}

        </Wrapper>
    );

};

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;   
height: 100vh;
line-height: 1.6;
padding: 20px;

h1 {
    margin-bottom: 15px;
}
`;

const ReservationContainer = styled.div`
    margin: 10px;
    border-bottom: solid 2px ${themeVars.alabamaCrimson};
`;

export default Admin;