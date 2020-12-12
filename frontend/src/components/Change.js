import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "./SeatSelect/Form";

const initialState = JSON.parse(window.localStorage.getItem('myDatas'));


const Change = () => {
    const history = useHistory();
    const [flightNumber, setFlightNumber] = useState(null);
    const [formData, setFormData] = useState(initialState);
    const [disabled, setDisabled] = useState(true);
    const [subStatus, setSubStatus] = useState("idle");

    useEffect(() => {
        Object.values(formData).includes("") || flightNumber === ""
        ? setDisabled(true)
        : setDisabled(false);
    }, [flightNumber, formData, setDisabled]);

        console.log(JSON.parse(window.localStorage.getItem('myDatas')).flight)

    const handleSeatSelect = (seatId) => {
        setFormData({ ...formData, seat: seatId });
    };

    const handleChange = (val, item) => {
        setFormData({ ...formData, [item]: val });
    };

    const validateEmail = () => {
        const emailParts = formData.email.split("@");
        return (
        emailParts.length === 2 &&
        emailParts[0].length > 0 &&
        emailParts[1].length > 0
        );
    };

    

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (validateEmail()) {
        formData.flight = JSON.parse(window.localStorage.getItem('myDatas')).flight;
        formData.id = JSON.parse(window.localStorage.getItem('myDatas')).id;      
        fetch(`http://localhost:8000/change/${formData.id}`, {
            method: "PATCH",
            body: JSON.stringify(formData),
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((json) => {
            const { status, message, data } = json;
            if (status === 201) {
                console.log(message);
                setSubStatus("confirmed");
                formData.id = data.id;
                history.push("/confirmed");
            } else {
                console.log(status, message, data);
                setSubStatus("error");
            }
        });
    }
    };
    window.localStorage.setItem('myData', JSON.stringify(formData));
    return (
        <>
            <h2>Select your seat and Confirm your information!</h2>
            <Form
            flightNumber={JSON.parse(window.localStorage.getItem('myDatas')).flight}
            formData={formData}
            handleChange={handleChange}
            handleSeatSelect={handleSeatSelect}
            handleSubmit={handleSubmit}
            disabled={disabled}
            subStatus={subStatus}
            />
        </>
    );
};

export default Change;