import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles, { themeVars } from "./GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";
import SeatSelect from "./SeatSelect/index";
import Confirmation from "./Confirmation";
import MyReservation from "./MyReservation";   
import Profile from "./Profile";
import Admin from "./Admin";
import LookUpReservation from "./LookUpReservation";
import DeleteReservation from "./DeleteReservation";
import ModifyReservation from "./ModifyReservation";

const App = () => {
  const [userReservation, setUserReservation] = useState({});

  const updateUserReservation = (newData) => {
    setUserReservation({ ...userReservation, ...newData });
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
      console.log(id + " WE HAVE ID");

    if(id) {
      fetch(`/reservations/${id}`)
        .then((res) => res.json())
        .then((json) => {
          //console.log(json.data)
          setUserReservation({ ...userReservation, ...json.data });
          //updateUserReservation(json.data)
        })
        .catch((err) => console.log(err))
    }
    // TODO: check localStorage for an id
    // if yes, get data from server and add it to state
  }, [setUserReservation]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header userReservation={userReservation}/>
      <Main>
        <Switch>
          <Route exact path="/">
            <SeatSelect userReservation={userReservation} updateUserReservation={updateUserReservation} />
          </Route>
          <Route exact path="/confirmed"> 
            <Confirmation userReservation={userReservation}/>
          </Route>
          <Route exact path="/view-reservation">
            <MyReservation userReservation={userReservation}/>
          </Route>
          <Route exact path="/profile">
            <Profile userReservation={userReservation}/>
          </Route>
          <Route exact path="/delete">
            <DeleteReservation userReservation={userReservation}/>
            </Route>
          {/* <Route exact path="/update">
            <ModifyReservation />
          </Route> */}
          <Route exact path="/reservations/:id">
            <LookUpReservation />
          </Route>
          <Route exact path="/admin" >
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
