import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import FlightSelect from "./FlightSelect";
import Form from "./Form";

const SeatSelect = ({
  updateUserReservation,
  update,
  userReservation,
  isDeleting,
  setIsDeleting
}) => {
  const initialState = userReservation || {
    seat: "",
    givenName: "",
    surname: "",
    email: "",
  };
  const history = useHistory();
  const [flightNumber, setFlightNumber] = useState(
    userReservation && userReservation.flight
  );
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
    if (isDeleting == true) {
      setFormData({
        seat: "",
        givenName: "",
        surname: "",
        email: "",
      });
      setIsDeleting(false)
    }
  }, [isDeleting]);


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
      fetch(
        update && userReservation
          ? `/reservation/${userReservation.id}`
          : "/reservation",
        {
          method: update ? "PUT" : "POST",
          body: JSON.stringify({ ...formData, flight: flightNumber }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((json) => {
          if (json.status == 200 || json.status == 201) {
            updateUserReservation(json.data);
            if (!update) {
              window.localStorage.setItem("reservationId", json.data.id);
            }
            history.push("/confirmed");
          } else if (json.status == 400) {
            history.push("/error");
          }
          
        });

      // TODO: Send data to the server for validation/submission
      // TODO: if 201, add reservation id (received from server) to localStorage
      // TODO: if 201, redirect to /confirmed (push)
      // TODO: if error from server, show error to user (stretch goal)
    }
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
        disabled={disabled}
        subStatus={subStatus}
      />
    </>
  );
};

export default SeatSelect;
