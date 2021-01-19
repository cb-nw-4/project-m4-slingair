import React from 'react';
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { useHistory } from "react-router-dom";

const ModifyReservation = ({ userReservation, setUserReservation, id }) => {
    const history = useHistory();

    const handleUpdate = (event) => {
        event.preventDefault()
        //console.log(userReservation)
        fetch(`/reservations/${id}`, {
        method: 'PUT', 
        body: JSON.stringify(userReservation),
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        }})
        .then(res => res.json())
        .then((json) => {
            console.log(json)
            json.status === 400 || json.status === 404 ? window.alert(`Status: ${json.status}, message: ${json.message}`) 
            : history.push("/update")
        })
    };

    const handleGivenNameChange = (event) => {
        const givenName2 = event.target.value;
		setUserReservation((userReservation) => ({
			...userReservation,
			givenName: givenName2
		}))
    };

    const handleSurnameChange = (event) => {
        const surname2 = event.target.value;
		setUserReservation((userReservation) => ({
			...userReservation,
			surname: surname2
		}))
    };

    const handleEmailChange = (event) => {
        const email2 = event.target.value;
		setUserReservation((userReservation) => ({
			...userReservation,
			email: email2
		}))
    };

    const handleFlightChange = (event) => {
        const flight2 = event.target.value;
		setUserReservation((userReservation) => ({
			...userReservation,
			flight: flight2
		}))
    };

    const handleSeatChange = (event) => {
        const seat2 = event.target.value;
        const seating = seat2.toUpperCase();
		setUserReservation((userReservation) => ({
			...userReservation,
			seat: seating
		}))
    };

    return (
        <Form onSubmit={(event) => handleUpdate(event)}>
            <InputFields>
                <Name>                    
                    <input
                    placeholder={userReservation.givenName}
                    value={userReservation.givenName}
                    onChange={(event)=>handleGivenNameChange(event)}
                    minLength = "2"
                    required
                    />                  
                    <input
                    placeholder={userReservation.surname}
                    value={userReservation.surname}
                    onChange={(event)=>handleSurnameChange(event)}
                    minLength = "2"
                    required
                    />
                </Name>
                <input
                type="email"
                placeholder={userReservation.email}
                value={userReservation.email}
                onChange={(event)=>handleEmailChange(event)}
                required
                />
                <select onChange={(event) => handleFlightChange(event)}>
                    <option value="SA231">
                        SA231
                    </option>
                    <option value="SA235">
                        SA235
                    </option>
                </select>	
                <input
                placeholder={userReservation.seat}
                value={userReservation.seat}
                onChange={(event)=> handleSeatChange(event)}
                maxLength="3"
                required
                /> 
            </InputFields>
            <InputSubmit>
                <Button type="submit">Modify My Reservation</Button>
            </InputSubmit>
        </Form>
    )
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
    background-color:  ${themeVars.orange};

    & input {
        width: 100%;
        height: 35px;
        margin: 4px 0;
        padding: 5px;
        font-size: 18px;
        border-radius: 3px;
    }
`;

const InputFields = styled.div`
    padding: 15px;
`;

const Name = styled.div`
    display: flex;
    justify-content: space-between;

    & input {
        width: 49%;
    }
`;

const InputSubmit = styled.div`
    background-color: ${themeVars.alabamaCrimson};
    text-align: center;
`;

const Button = styled.button`
    color: ${themeVars.selectiveYellow};   
    background-color: ${themeVars.alabamaCrimson};
    outline: none;
    border: 1px solid ${themeVars.selectiveYellow};
    border-radius: 5px;
    padding: 15px;
    font-size: 18px;
    width: 275px;
    margin: 15px auto;

    &:hover {
    background: ${themeVars.selectiveYellow};
    color: ${themeVars.alabamaCrimson};
    }
`;


export default ModifyReservation;