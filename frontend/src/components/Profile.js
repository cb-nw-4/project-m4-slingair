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
        <Item><Span>First Name:</Span>  {profile.givenName}</Item>
        <Item><Span>Last Name:</Span>  {profile.surname}</Item>
        <Item><Span>Email:</Span>  {profile.email}</Item>
        <Item><Span>Seat Number:</Span>  {profile.seat}</Item>
        <Item><Span>Flight Number:</Span>  {profile.flight}</Item>
        <Item><Span>Reservation ID:</Span>  {profile.id}</Item>
      </List>
      </Div>
      <Button>Edit</Button>
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
const Title = styled.h1`
font-size:250%;
`;

const Span = styled.span`
text-decoration:underline;
font-weight:bold;
color:black;
`;
const List = styled.ul`
padding:10px;
border: 3px #AA001E solid;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
border-radius:10px;


`;

const Item = styled.li`
padding:5px;
font-family: ${themeVars.contentFont};
font-size:150%;

`;

const Button = styled.button`
border:none;
margin-top:30px;
width:200px;
height:50px;
background-color: #AA001E;
border-radius:10px;
`;


export default Profile