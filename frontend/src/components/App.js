import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SeatSelect from "./SeatSelect";
import Confirmation from "./Confirmation";
import Reservation from "./Reservation";
import GlobalStyles, { themeVars } from "./GlobalStyles";

const App = () => {
  const [userReservation, setUserReservation] = useState({});
  const [isConfirmed, setConfirmation] = useState(false);

  const updateUserReservation = (newData) => {
    setUserReservation({ ...userReservation, ...newData });
  };

  useEffect(() => {
    let id = localStorage.getItem("reservationId");
    if (localStorage.length !== 0) {
      fetch(`/getReservation/${id}`)
        .then((res) => res.json())
        .then((response) => {
          if (response.status === 200) {
            updateUserReservation(response.data);
            setConfirmation(true);
          }
        })
        .catch((response) => {
          window.alert(response.message);
        })
    }
    // TODO: check localStorage for an id
    // if yes, get data from server and add it to state
  }, [setUserReservation]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header 
        isConfirmed={isConfirmed}
        />
      <Main>
        <Switch>
          <Route exact path="/">
            <SeatSelect 
              updateUserReservation={updateUserReservation}
            />
          </Route>
          <Route exact path="/confirmed">
            <Confirmation 
              userReservation={userReservation}
            />
          </Route>
          <Route exact path="/view-reservation">
            <Reservation />
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