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

const App = () => {
  const [userReservation, setUserReservation] = useState({});
  const [subStatus, setSubStatus] = useState("idle");

  const updateUserReservation = (newData) => {
    setUserReservation({ ...userReservation, ...newData });
    console.log({ ...userReservation, ...newData }, 'datta')
  };

  useEffect(() => {
    // TODO: check localStorage for an id

    if(localStorage.length !== 0){
      console.log('app', localStorage)
      fetch(`/reservations/${localStorage.id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json, 'app')
        updateUserReservation(json.data);
      })
    }

    // if yes, get data from server and add it to state
  }, [setUserReservation, subStatus]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <SeatSelect setSubStatus={setSubStatus} subStatus={subStatus}/>
          </Route>
          <Route exact path="/confirmed">
            <Confirmation userReservation={userReservation} />
          </Route>
          <Route exact path="/reservation">
            <Reservation  />
          </Route>
          <Route exact path="/profile">
            <Profile  />
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
