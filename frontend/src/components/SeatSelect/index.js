import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FlightSelect from "./FlightSelect";
import Form from "./Form";
import Confirmation from "../Confirmation";
import Header from "../Header";
const initialState = { seat: "", givenName: "", surname: "", email: "", flight: "" };

const SeatSelect = ({ userReservation, updateUserReservation }) => {
  const history = useHistory();
  const [flightNumber, setFlightNumber] = useState('');
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

  const handleFlightSelect = (ev) => {
    const flightNum = ev.target.value;
    setFlightNumber(flightNum);
    setFormData({ ...formData, flight: flightNum});
  };

  const handleSeatSelect = (seatId) => {
    //console.log(seatId)
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
      fetch("/reservations", {
        method: "POST", 
        body: JSON.stringify({...formData, flight: flightNumber}),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        //setFormData(json.data)
        updateUserReservation(json.data)
        const { status, error } = json;
        if(status === 201) {
          console.log("success")
            setSubStatus("confirmed")
            localStorage.setItem("id", json.data.id);
          } else if(status === "error") {
            setSubStatus("error");
            console.log("error")
            console.log(error)
          }     
      })
      .then(()=>{
        history.push('/confirmed')
      })
      // TODO: Send data to the server for validation/submission
      // TODO: if 201, add reservation id (received from server) to localStorage
      // TODO: if 201, redirect to /confirmed (push)
      // TODO: if error from server, show error to user (stretch goal)
    }
  };

  return (
    <div>
      {subStatus !== "confirmed" ? (
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
        userReservation={userReservation}
      />
    </>
      ) : (
        <>
        <Header subStatus={subStatus}/>
        <Confirmation />
        </>
      )}
    </div>
  );
};


export default SeatSelect;
