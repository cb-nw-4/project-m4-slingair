import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FlightSelect from "./FlightSelect";
import Form from "./Form";
// import localStorage from 'local-storage';

const initialState = { seat: "", givenName: "", surname: "", email: "" };

const SeatSelect = ({ updateUserReservation }) => {
  const history = useHistory();
  const [flightNumber, setFlightNumber] = useState(null);
  const [formData, setFormData] = useState(initialState);
  const [disabled, setDisabled] = useState(true);
  const [subStatus, setSubStatus] = useState("idle");

  useEffect(() => {
    // This hook is listening to state changes and verifying whether or not all
    // of the form data is filled out.
    Object.values(formData).includes("") || flightNumber === ""
      ? setDisabled(true)
      : setDisabled(false);
}, [flightNumber, formData, setDisabled]);

  // in FlightSelect, onChange function is set to handleFlightSelect for select/Menu Container
  const handleFlightSelect = (event) => {
    setFlightNumber(event.target.value);
  };

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
    setSubStatus("pending");
    if (validateEmail()) {
      fetch('/confirm', {
        method: 'POST',
        body: JSON.stringify({...formData, flight: flightNumber}),
        headers: {
          Accept: 'application/json',
          "Content-Type": "application/json",
        }
      })
      .then((res) => res.json())
      .then((response) => {
        // response: Object { status: 201, data: "17d88c15-8754-441b-bc34-6756960c3ee4" }
        const { status, data } = response;
        if (status === 201) {
          setSubStatus("confirmed");
          localStorage.setItem("reservationId", `${data}`);
          updateUserReservation();
          history.push("/confirmed");
        } else { 
          setSubStatus("error");
        }
      })
    }
  }
      // TODO: Send data to the server for validation/submission
      // TODO: if 201, add reservation id (received from server) to localStorage
      // TODO: if 201, redirect to /confirmed (push)
      // TODO: if error from server, show error to user (stretch goal)

  return (
    <>
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
    </>
  );
};

export default SeatSelect;