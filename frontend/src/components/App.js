import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SeatSelect from "./SeatSelect";
import Confirmation from "./Confirmation";
import Reservation from "./Reservation";
import GlobalStyles, { themeVars } from "./GlobalStyles";
import Reservation from "./Reservation";
import Profile from "./Profile";

const App = () => {
  const [userReservation, setUserReservation] = useState({});

  const updateUserReservation = (newData) => {
    setUserReservation({ ...userReservation, ...newData });
  };

  useEffect(() => {
    let reservationId = window.localStorage.getItem("reservationId");
    if (reservationId) {
      fetch(`/reservations/${reservationId}`)
      .then(res => res.json())
      .then((json) => {
        updateUserReservation(json.data);
        console.log(userReservation);
      })
    }
  }, [setUserReservation]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Main>
        <Switch>
          <Route exact path="/view-reservation">
            <Reservation />
          </Route>
          <Route exact path="/">
            <SeatSelect userReservation={userReservation} updateUserReservation={updateUserReservation} />
          </Route>
          <Route exact path="/confirmed">
            <Confirmation userReservation={userReservation} />
          </Route>
          <Route exact path="/view-reservation">
          <Reservation userReservation={userReservation} />
          </Route>
          <Route path="/profile">
            <Profile />
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
