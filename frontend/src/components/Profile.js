import React from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const Profile = ({userReservation}) => {
const history = useHistory();
const id = userReservation.id;

    const handleDelete = () => {
    // ev.preventDefault();
    fetch(`/reservations/${id}`, {
        method: 'DELETE', 
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        }})
        .then(res => res.json())
        .then((json) => {
            console.log(json)
            localStorage.removeItem("id", id)})
        .then(() => {
            history.push('/delete')
        })          
    };

    const handleUpdate = () => {}
    
    return (
        <>
            <ProfileText>
                <Title>Welcome to your profile page, {userReservation.givenName}!</Title>
                <p>What would you like to do today?</p>
            </ProfileText>
            <ProfileOptions>
                <Button onClick={handleUpdate}>Modify My Reservation</Button>
                <Button onClick={handleDelete}>Delete My Reservation</Button>
            </ProfileOptions>
        </>
    )
}

const ProfileText = styled.div`
    margin: 25px;
    color: ${themeVars.alabamaCrimson};
    
    & p {
        font-size: 20px;
    }
`;


const Title = styled.h4`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const ProfileOptions = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 50px;
`;

const Button = styled.button`
    color: white;   
    background-color: ${themeVars.alabamaCrimson};
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 15px;
    font-size: 25px;
`;

export default Profile;