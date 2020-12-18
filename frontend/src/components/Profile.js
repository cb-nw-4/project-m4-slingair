import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";

const Profile =(props)=>{
    return(
        <Wrapper>
            <RedBorder>
            <h1>Profile</h1>
            <p><b>Name:</b> {props.userReservation.givenName}  {props.userReservation.surname}</p>
            <p><b>Email:</b> {props.userReservation.email}</p>
            </RedBorder>
        </Wrapper>
    );
};

const Wrapper = styled.div`
background: ${themeVars.background};
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
height: calc(100vh - 110px);
`;

const RedBorder = styled.div`
border: 3px solid ${themeVars.alabamaCrimson};
border-radius: 5px;
margin: 10px;
padding: 30px;
width: 800px;
& p,
h1 {
    font-family: ${themeVars.contentFont};
    padding: 10px;
    font-size: 24px;
}
&p {
    color: black;
}
& h1 {
    color: ${themeVars.alabamaCrimson};
    font-size: 30px;
    border-bottom: 3px solid ${themeVars.alabamaCrimson};
}
`;

export default Profile;