import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SeatSelect from "./SeatSelect";
import Confirmation from "./Confirmation";
import Reservation from "./Reservation";
import Profile from "./Profile";
import GlobalStyles, { themeVars } from "./GlobalStyles";

const App = () => {
  const [userReservation, setUserReservation] = useState({});
  const reservationID = window.localStorage.getItem('reservationId');

  const updateUserReservation = (newData) => {
    setUserReservation({ ...userReservation, ...newData });
    console.log("user reservation:",userReservation);
  };

  useEffect(() => {
    // TODO: check localStorage for an id
    // if yes, get data from server and add it to state
    
    if (reservationID) {
      fetch(`/reservations/${reservationID}`)
      .then(res => res.json())
      .then((json) => {
        updateUserReservation(json.data);
        console.log(userReservation);
      })
    }
  }, [setUserReservation, reservationID]); // I dont think this is working properly because i cant see the reservations from before

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <SeatSelect userReservation={userReservation} updateUserReservation={updateUserReservation}/>
          </Route>
          <Route exact path="/confirmed">
            <Confirmation userReservation={userReservation}/>
          </Route>
          <Route exact path="/view-reservation">
            <Reservation  userReservation={userReservation} />
          </Route>
          <Route exact path="/profile">
            <Profile userReservation={userReservation}/>
          </Route>
          <Route path="/error">404: Oops!</Route>
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
