import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const Profile = () => {
 
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        fetch("/profile")
        .then((res) => res.json())
        .then((json) => {
            console.log(json.data[0]);
            setProfile(json.data[0]);
        })
    }, []);

    console.log(profile.id);
  return (
    <Wrapper>
      <Title>Profile</Title>
      <Div>
      <List>
        <Item>First Name :  {profile.givenName}</Item>
        <Item>Last Name:  {profile.surname}</Item>
        <Item>Email:  {profile.email}</Item>
        <Item>Seat Number:  {profile.seat}</Item>
        <Item>Flight Number:  {profile.flight}</Item>
        <Item>Reservation ID:  {profile.id}</Item>
      </List>
      </Div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin:20px;

`;
const Div = styled.div`
display:flex;

margin-top:30px;

`;
const Title = styled.h1``;

const List = styled.ul`
padding:10px;
background-color:white;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
border-radius:10px;


`;

const Item = styled.li`
padding:5px;
font-family: ${themeVars.contentFont};
`;


export default Profile