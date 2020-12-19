import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SeatSelect from "./SeatSelect";
import ErrorPage from "./Error";
import ViewReservation from "./ViewReservation";

import Confirmation from "./Confirmation";
import GlobalStyles, { themeVars } from "./GlobalStyles";

const App = () => {
  const [userReservation, setUserReservation] = useState({});

  const updateUserReservation = (newData) => {
    setUserReservation({ ...userReservation, ...newData });
  };
  console.log("Use EffecT!", userReservation);
  useEffect(() => {
    console.log("Use EffecT!", userReservation);

    if (localStorage.getItem("reservationId")) {
      let reservationId = localStorage.getItem("reservationId");
      fetch(`/reservation/${reservationId}`)
        .then((res) => res.json())
        .then((json) => {
          updateUserReservation(json.data);
          console.log(`JSON data:`, json);
        });
    }
    // TODO: check localStorage for an id
    // if yes, get data from server and add it to state
  }, [setUserReservation]);

  useEffect(() => {
    console.log("uSE eFFECT # 2", userReservation);
  }, [userReservation]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header userReservation={userReservation}/>
      <Main>
        <Switch>
          <Route exact path="/">
            <SeatSelect updateUserReservation={updateUserReservation} />
          </Route>
          <Route exact path="/confirmed">
            <Confirmation userReservation={userReservation} />
          </Route>
          <Route exact path="/error">
            <ErrorPage />
          </Route>
          <Route exact path="/view-reservation">
            <ViewReservation userReservation={userReservation} />
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
