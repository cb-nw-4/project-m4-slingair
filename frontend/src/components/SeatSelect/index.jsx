import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import FlightSelect from "./FlightSelect";
//import Button from "./Button";
//import Confirmation from "../Confirmation";
import Form from "./Form";

const initialState = { seat: "", givenName: "", surname: "", email: "" };
// setting form data and submitting the form and setting data to local storage
const SeatSelect = ({ updateUserReservation }) => {
  const history = useHistory();

  const [flightNumber, setFlightNumber] = useState(null);
  const [formData, setFormData] = useState(initialState);
  const [disabled, setDisabled] = useState(true);
  const [subStatus, setSubStatus] = useState("idle");

  useEffect(() => {
    // This hook is listening to state changes and verifying whether or not all
    // of the form data is filled out.
    // formData is from initialState(above)
    Object.values(formData).includes("") || flightNumber === ""
      ? setDisabled(true)
      : setDisabled(false);
  }, [flightNumber, formData, setDisabled]);
  //
  const handleFlightSelect = (ev) => {
    setFlightNumber(ev.target.value);
  };
  // handleSeatSelect is used in Form and Plane - chooses the seat
  const handleSeatSelect = (seatId) => {
    setFormData({ ...formData, seat: seatId });
  };
  // handleChange is used in Form and Input - sets the data in each part of the form
  const handleChange = (val, item) => {
    setFormData({ ...formData, [item]: val });
  };
  // validate email address
  const validateEmail = () => {
    const emailParts = formData.email.split("@");
    return (
      emailParts.length === 2 &&
      emailParts[0].length > 0 &&
      emailParts[1].length > 0
    );
  };
  // Send data to the server for validation/submission
  const handleSubmit = (ev) => {
    ev.preventDefault();

    setSubStatus("pending");
    if (validateEmail()) {
      fetch("/reservation", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, flight: flightNumber }),
      })
        .then((response) => response.json())
        .then((response) => {
          const { status, error } = response;
          if (status === 200) {
            const id = response.data;
            localStorage.setItem("id", response.data);
            updateUserReservation({ id, ...formData, flight: flightNumber });
            history.push("/confirmed");

            // fetch a reservation id from the server
          } else if (error) {
            setSubStatus("error");
          }
          console.log("hey", response.data, status);
        });

      // TODO: if 201, add reservation id (received from server) to localStorage
      // TODO: if 201, redirect to /confirmed (push)
      // TODO: if error from server, show error to user (stretch goal)
    }
  };
  return (
    <Wrapper>
      <FlightSelect
        flightNumber={flightNumber}
        handleFlightSelect={handleFlightSelect}
      />
      <h2>Select your seat and Provide your information!</h2>
      <Form
        flightNumber={flightNumber}
        formData={formData}
        handleChange={handleChange}
        handleSeatSelect={handleSeatSelect}
        handleSubmit={handleSubmit}
        disabled={disabled}
        subStatus={subStatus}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default SeatSelect;
