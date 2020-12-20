import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SeatSelect from "./SeatSelect";
import Confirmation from "./Confirmation";
import Reservations from "./Reservations";
import Profile from "./Profile";
import GlobalStyles, { themeVars } from "./GlobalStyles";

const App = () => {
  const [userReservation, setUserReservation] = useState({});

  const updateUserReservation = (newData) => {
    setUserReservation({ ...userReservation, ...newData });
  };

  // TODO: check localStorage for an id
  // if yes, get data from server and add it to state
  useEffect(() => {
    const reservationId = localStorage.getItem("id");
    console.log(reservationId);

    if (reservationId) {
      fetch(`/reservation/${reservationId}`)
        .then((res) => res.json())
        .then((response) => {
          updateUserReservation(response.data);
          console.log("resId", response.data);
        });
    }
  }, [setUserReservation]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <SeatSelect updateUserReservation={updateUserReservation} />
          </Route>
          <Route exact path="/confirmed">
            <Confirmation userReservation={userReservation} />
          </Route>
          <Route exact path="/view-reservation">
            <Reservations userReservation={userReservation} />
          </Route>
          <Route exact path="/profile">
            <Profile userReservation={userReservation} />
          </Route>
          <Route path="">404: Oops!</Route>
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
