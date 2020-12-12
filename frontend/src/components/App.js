import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SeatSelect from "./SeatSelect/index";
import Search from "./SeatSelect/Search";
import Confirmation from "./Confirmation";
import GlobalStyles, { themeVars } from "./GlobalStyles";
import Admin from "./Admin";
import Delete from "./Delete";
import Change from "./Change";


const App = () => {
  

  useEffect(() => {
    // TODO: check localStorage for an id
    // if yes, get data from server and add it to state
    
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <SeatSelect />
          </Route>
          <Route exact path="/view-reservation">
            <Search />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/confirmed">
            <Confirmation />
          </Route>
          <Route exact path="/delete">
            <Delete />
          </Route>
          <Route exact path="/profile">
            <Change />
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
