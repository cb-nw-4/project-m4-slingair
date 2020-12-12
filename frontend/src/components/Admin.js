import React, { useEffect, useState } from 'react'
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
    
const Admin = () => { 
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/reservations')
            .then(res => {
                return res.json();
            })
            .then((res) => { 
                setReservations(Object.values(res.data.reservations));
            });
    }, []);
    return (
        <Wrapper>
            <ConfirmationCard>
            <thead>
                <tr>
                    <Th>Last name</Th>
                    <Th>First name</Th>
                    <Th>Email</Th>
                    <Th>Flight</Th>
                    <Th>Seat</Th>
                    <Th>Reservation id</Th>
                </tr>
            </thead>
            <tbody>
            { reservations && reservations.length > 0 ? (
                reservations.map((res) => (
                    <tr key={`${res.id}`}>
                        <Td>{res.surname}</Td>
                        <Td>{res.givenName}</Td>
                        <Td>{res.email}</Td>
                        <Td>{res.flight}</Td>
                        <Td>{res.seat}</Td>
                        <Td>{res.id}</Td>
                    </tr>
                ))
                
            ) : (
                <Placeholder>Select a Flight to view seating.</Placeholder>
            )}
            </tbody>
            </ConfirmationCard>
        </Wrapper>
    );
};

const Placeholder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 404px;
    width: 260px;
    text-align: center;
    color: ${themeVars.orange};
    font-family: ${themeVars.headingFont};
    font-size: 32px;
    opacity: 0.5;
`;

const Wrapper = styled.table`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    border-collapse: collapse;
`;

const ConfirmationCard = styled.div`
    border: 3px solid ${themeVars.alabamaCrimson};
    border-radius: 5px;
    margin: auto;
    padding: 30px;
    width: 850px;
`;

const Td = styled.td`
    text-align: left;
    border:1px solid black;
    padding:5px;
`;

const Th = styled.th`
    text-align: center;
    border:1px solid black;
    padding:5px;
`;

export default Admin;