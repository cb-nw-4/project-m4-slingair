import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SeatSelect from "./SeatSelect";
import Confirmation from "./Confirmation";
import YourReservation from "./YourReservation";
import ChangeFlight from "./ChangeFlight";
import CancelFlight from "./CancelFlight";
import Admin from "./Admin";
import AdminLogin from "./AdminLogin";
import GlobalStyles, { themeVars } from "./GlobalStyles";

const App = () => {
  const [userReservation, setUserReservation] = useState({});
  const [message, setMessage] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  const updateUserReservation = (newData) => {
    setUserReservation({ ...userReservation, ...newData });
  };

  const handleCancel = () => {
    const reservationId = localStorage.getItem('reservationId');
    fetch(`/reservation/${reservationId}`, {
        method: 'DELETE',
    })
      .then((res) => res.json())
      .then((json) => setMessage(json.message))
      .then(() => setUserReservation({}));
  };

  const handleChangeFlight = () => {
    setUpdateMode(true);
  }

  const handleBackToHome = () => {
    setUpdateMode(false);
  }

  useEffect(() => {
    const reservationId = localStorage.getItem('reservationId');
    if (reservationId) {
      fetch(`/reservation/${reservationId}`)
        .then((res) => res.json())
        .then((json) => {
          updateUserReservation(json.data);
        })
    }
  }, [setUserReservation]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header 
      handleBackToHome={handleBackToHome}
      />
      <Main>
        <Switch>
          <Route exact path="/">
            <SeatSelect 
            updateUserReservation={updateUserReservation}
            userReservation={userReservation}
            updateMode={updateMode}
            />
          </Route>
          <Route exact path="/confirmed">
            <Confirmation 
            userReservation={userReservation}
            />
          </Route>
          <Route exact path="/view-reservation">
            <YourReservation 
            userReservation={userReservation}
            handleCancel={handleCancel}
            handleChangeFlight={handleChangeFlight}
            />
          </Route>
          <Route exact path="/change-flight">
            <ChangeFlight
            updateUserReservation={updateUserReservation}
            userReservation={userReservation}
            updateMode={updateMode}
            />
          </Route>
          <Route exact path="/cancel-flight">
            <CancelFlight
            message={message}
            />
          </Route>
          <Route expact path="/admin-login">
            <AdminLogin />
          </Route>
          <Route expact path="/admin">
            <Admin />
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
