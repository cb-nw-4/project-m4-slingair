import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FlightSelect from "./FlightSelect";
import Form from "./Form";

const SeatSelect = ({ updateUserReservation, userReservation, updateMode }) => {
  const initialState = { seat: "", givenName: "", surname: "", email: "" };
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

  useEffect(() => {
    if (updateMode === true) {
      setFormData({ seat: '', givenName: userReservation.givenName, surname: userReservation.surname, email: userReservation.email });
    }
  }, [updateMode, userReservation, userReservation.email, userReservation.givenName, userReservation.surname]) 

  const handleFlightSelect = (ev) => {
    setFlightNumber(ev.target.value);
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
    if (validateEmail()) {
      fetch('/reservations', {
        method: 'POST',
        body: JSON.stringify(
          {
            flight: flightNumber,
            ...formData
          }
        ),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 201 ) {
          function createLocalStorage(key, value) {
            return Promise.resolve().then(function () {
            localStorage.setItem(key, value);
            });
          }
          createLocalStorage('reservationId', json.data.id).then(() => {
            setSubStatus("pending");
            updateUserReservation(json.data);
            history.push('/confirmed');
          });
        }
        if (json.status === 400) {
          console.log(json.data); // for debugging
          alert('Bad request'); // for user 
        };
      });
    }
  };

  const handleUpdate = (ev) => {
    ev.preventDefault();
    const reservationId = localStorage.getItem('reservationId');
    fetch(`/reservation/${reservationId}`, {
      method: 'PUT',
      body: JSON.stringify(
        {
          flight: flightNumber,
          ...formData
        }
      ),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((json) => {
      setSubStatus("pending");
      updateUserReservation(json.data);
      history.push('/confirmed');
    })
  };

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
        handleUpdate={handleUpdate}
        disabled={disabled}
        subStatus={subStatus}
        updateMode={updateMode}
      />
    </>
  );
};

export default SeatSelect;
