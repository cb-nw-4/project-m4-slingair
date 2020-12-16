import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SeatSelect from "./SeatSelect";
import Confirmation from "./Confirmation";
import ErrorPage from './ErrorPage';
import GlobalStyles, { themeVars } from "./GlobalStyles";

const App = () => {
  const [userReservation, setUserReservation] = useState({});

  const updateUserReservation = (newData) => {
    setUserReservation({ ...userReservation, ...newData });
  };

  useEffect(() => {
    // Check if there is an existing reservation id in local storage
    const reservationId = localStorage.getItem('reservationId');
    
    if (reservationId !== null) {
      fetch('http://localhost:8000/v1/reservations/' + reservationId)
        .then((res) => res.json())
        .then((json) => {
          if (json.result === 'ok') {
            setUserReservation(json.data);
          }
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
            <SeatSelect updateUserReservation={updateUserReservation}/>
          </Route>
          <Route exact path="/confirmed" render={props => (<Confirmation {...props} />)}></Route>
          <Route exact path="/error-page" render={props => (<ErrorPage {...props} />)}></Route>
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
