import React, { useEffect }from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Form from "./SeatSelect/Form";


const ModifyReservation = ({
    userReservation,
    flightNumber,
    setFlightNumber,
    formData,
    handleChange,
    handleSeatSelect,
    disabled,
    subStatus,
    setSubStatus
}) =>{

    useEffect(() => {
        setFlightNumber(localStorage.flightNumber)
        setSubStatus('idle')
    }, []);

    const history = useHistory();

    const handleUpdate = (ev) => {

        ev.preventDefault();        
    
        fetch(`/reservations/${localStorage.id}`, {
            method: "PATCH",
            body: JSON.stringify(formData),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        
            .then((res) => res.json())
            .then((json) => {
                const { status, error } = json;
                if (status === 200) {
                    //console.log(json.data, 'reservation update')
                    setSubStatus("Update");
                    localStorage.setItem('id', json.data.id)
                    localStorage.setItem('flightNumber', json.data.flight)
                    //updateUserReservation(json.data)
                    //console.log(localStorage, 'localStroge update')
                    history.push("/confirmed")
                
            } else if (status===404) {
                setSubStatus("error");
                console.log([error]);
                history.push("/error")
            }
            });
        
    };

    return( 
        <>

            <H1>Make changed before you cofirm </H1>

            <h3> Your Flight flightNumber is #: {userReservation.flight}</h3>
            <Container> 
                <Form
                    flightNumber={flightNumber}
                    formData={formData}
                    handleChange={handleChange}
                    handleSeatSelect={handleSeatSelect}
                    handleSubmit={handleUpdate}
                    disabled={disabled}
                    subStatus={subStatus}
                />
            </Container>
        
        </>
    
    )
}

const H1 = styled.h1`
    margin: 20px;
`


const Container = styled.div`
    display: flex;
    align-items: baseline;
    margin: 50px 30px;
`




export default ModifyReservation;