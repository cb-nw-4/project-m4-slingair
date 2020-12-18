import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SeatSelect from "./SeatSelect";
import Confirmation from "./Confirmation";
import GlobalStyles, { themeVars } from "./GlobalStyles";
import Reservation from "./Reservation";
import Profile from "./profile";
import ModifyReservation from "./ModifyReservation";
import Page404 from "./Page404";

const initialState = { seat: "", givenName: "", surname: "", email: "" };

const App = () => {
  const [userReservation, setUserReservation] = useState({});
  const [subStatus, setSubStatus] = useState("idle");

  //New Update
  const [formData, setFormData] = useState(initialState);
  const [flightNumber, setFlightNumber] = useState(null);


  const handleFlightSelect = (ev) => {
    setFlightNumber(ev.target.value);
  };

  const validateEmail = () => {
    const emailParts = formData.email.split("@");
    return (
      emailParts.length === 2 &&
      emailParts[0].length > 0 &&
      emailParts[1].length > 0
    );
  };

  const handleChange = (val, item) => {
    setFormData({ ...formData, [item]: val });
  
  };

  const handleSeatSelect = (seatId) => {
    setFormData({ ...formData, seat: seatId });
  };

  //End of Update

  const updateUserReservation = (newData) => {
    setUserReservation({ ...userReservation, ...newData });
  };

  useEffect(() => {
    if(localStorage.length !== 0){

      fetch(`/reservations/${localStorage.id}`)
      .then((res) => res.json())
      .then((json) => {
        updateUserReservation(json.data);
      })
    }
  }, [setUserReservation, subStatus]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <SeatSelect setSubStatus={setSubStatus} 
                        initialState={initialState}
                        setFlightNumber={setFlightNumber}
                        updateUserReservation={updateUserReservation}
                        subStatus={subStatus} 
                        formData={formData}
                        setFormData={setFormData}
                        setUserReservation={setUserReservation}
                        handleChange = {handleChange}
                        flightNumber={flightNumber} 
                        validateEmail={validateEmail}
                        handleFlightSelect={handleFlightSelect} 
                        setFlightNumber={setFlightNumber}
                        handleSeatSelect= {handleSeatSelect}
            />
          </Route>
          <Route exact path="/confirmed">
            <Confirmation userReservation={userReservation}
                        />
          </Route>
          <Route exact path="/reservation">
            <Reservation  userReservation={userReservation}
                          setSubStatus={setSubStatus}
                          subStatus={subStatus}           
            />
          </Route>
          <Route exact path="/profile">
            <Profile  setSubStatus={setSubStatus} 
                      subStatus={subStatus}
            />
          </Route>

          <Route exact path='/modifyReservation'>
            <ModifyReservation  userReservation={userReservation}
                                setSubStatus={setSubStatus} 
                                subStatus={subStatus} 
                                formData={formData}
                                setFormData={setFormData}
                                handleChange = {handleChange}
                                flightNumber={flightNumber}
                                setFlightNumber={setFlightNumber}
                                handleSeatSelect= {handleSeatSelect} 
            />
          </Route>

          <Route path="/error">
            <Page404 />
          </Route>

        </Switch>
        <Footer />
      </Main>
    </BrowserRouter>
  );
};

const Main = styled.div`
  background: ${themeVars.background};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 110px);
`;

export default App;
