import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SeatSelect from "./SeatSelect";
import Confirmation from "./Confirmation";
import Profile from "./Profile";
import GlobalStyles, { themeVars } from "./GlobalStyles";
import ViewReservation from "./ViewReservation";


const App = () => {
  const [userReservation, setUserReservation] = useState({});

  const updateUserReservation = (newData) => {
    setUserReservation({ ...userReservation, ...newData });
  };

  useEffect(() => {
    const reservationId = window.localStorage.getItem("reservationId");
    if (reservationId) {
      fetch(`/reservation/${reservationId}`)
        .then((res) => res.json())
        .then((json) => {
          setUserReservation(json.data);
        });
    }
  }, [setUserReservation]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header userReservation={userReservation}/>
      <Main>
        <Switch>
          <Route exact path="/">
            <SeatSelect updateUserReservation={updateUserReservation} />
          </Route>
          <Route exact path="/update-reservation">
            <SeatSelect updateUserReservation={updateUserReservation} update />
          </Route>
          <Route exact path="/confirmed">
            <Confirmation userReservation={userReservation} />
          </Route>
          <Route exact path="/profile">
            <Profile
              updateUserReservation={updateUserReservation}
              userReservation={userReservation}
            />
          </Route>
          <Route exact path='/view-reservation'>
            <ViewReservation userReservation={userReservation}></ViewReservation>
          </Route>
          <Route exact path="/error">
            404: Oops!
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
  min-height: calc(100vh - 110px);
`;

export default App;
