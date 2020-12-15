import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SeatSelect from "./SeatSelect";
import Confirmation from "./Confirmation";
import Reservation from "./Reservation";
import Profile from "./Profile";
import Update from "./Update";
import GlobalStyles, { themeVars } from "./GlobalStyles";

const App = () => {
  const [userReservation, setUserReservation] = useState({});

  const updateUserReservation = (newData) => {
    setUserReservation({ ...userReservation, ...newData });
  };

  const deleteUserReservation = () => {
    setUserReservation({});
  };

  useEffect(() => {
    const reservationID = window.localStorage.getItem('id');
    console.log('reservationID',reservationID);
    if (reservationID ) {    
      fetch(`/reservation/${reservationID}`)
      .then((res) => res.json())
      .then((json) => {
        const { status, data, message } = json; 
        if (status === 200)
          updateUserReservation(data);
        else
          console.log(message);
      });
    }
    // TODO: check localStorage for an id
    // if yes, get data from server and add it to state
  }, [setUserReservation]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header userReservation={userReservation} />
      <Main>
        <Switch>
          <Route exact path="/">
            <SeatSelect updateUserReservation={updateUserReservation}/>
          </Route>
          <Route exact path="/confirmed">
            <Confirmation userReservation={ userReservation }/>
          </Route>
          <Route exact path="/view-reservation">
            <Reservation />
          </Route>
          <Route exact path="/profile">
            <Profile userReservation={ userReservation } updateUserReservation={updateUserReservation} deleteUserReservation={deleteUserReservation}/>
          </Route>
          <Route exact path="/update">
            <Update userReservation={ userReservation }/>
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
