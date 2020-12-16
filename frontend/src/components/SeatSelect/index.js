import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FlightSelect from "./FlightSelect";
import Form from "./Form";


const SeatSelect = ({ 
  initialState,
  setSubStatus , 
  subStatus, 
  handleFlightSelect, 
  setFlightNumber,
  flightNumber, 
  validateEmail,
  formData,
  setFormData,
  handleChange,
  handleSeatSelect,
  setUserReservation,
}) => {
  const history = useHistory();
  
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if(localStorage.length === 0){
      setFormData(initialState)
      setUserReservation({})
      setFlightNumber(null)
      
    }
  }, []);
  
  useEffect(() => {
    // This hook is listening to state changes and verifying whether or not all
    // of the form data is filled out.
    Object.values(formData).includes("") || flightNumber === ""
      ? setDisabled(true)
      : setDisabled(false);
  }, [flightNumber, formData, setDisabled]);


  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (validateEmail()) {
      // TODO: Send data to the server for validation/submission
      formData.flight = flightNumber;

      fetch("/reservations", {
        method: "POST",
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
            setSubStatus("confirmed");
            localStorage.setItem('id', json.data.id)
            localStorage.setItem('flightNumber', json.data.flight)
            history.push("/confirmed")
            
          } else if (status===404) {
            setSubStatus("error");
            console.log([error]);
            history.push("/error")
          }
        });

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
