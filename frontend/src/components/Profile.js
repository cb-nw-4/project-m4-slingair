import React from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import ModifyReservation from './ModifyReservation';

const Profile = ({ userReservation, setUserReservation }) => {
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

    return (
        <>
            <ProfileText>
                <Title>Welcome to your profile page</Title>
                <p>What would you like to do today?</p>
            </ProfileText>
            <ProfileOptions>
                <ProfileOption>
                    <ModifyReservation userReservation={userReservation} setUserReservation={setUserReservation} id={id}/>
                </ProfileOption>
                <ProfileOption>
                    <Button onClick={handleDelete}>Delete My Reservation</Button>
                </ProfileOption>
            </ProfileOptions>
        </>
    )
}

const ProfileText = styled.div`
    margin: 35px;
    color: ${themeVars.alabamaCrimson};

    & p {
        font-size: 18px;
        font-weight: bold;
        text-align: left;
        color: black;
    }
`;

const Title = styled.h4`
    font-size: 35px;
    font-weight: bold;
    padding-bottom: 15px;
    margin-bottom: 20px;
    border-bottom: 3px solid ${themeVars.alabamaCrimson};
`;

const ProfileOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProfileOption = styled.div`
    display: flex;
    width: 30%;
    border: 3px solid  ${themeVars.alabamaCrimson};
    margin-bottom: 25px;
    background-color: ${themeVars.alabamaCrimson};
`;

const Button = styled.button`
    color: ${themeVars.selectiveYellow};   
    background-color: ${themeVars.alabamaCrimson};
    outline: none;
    border: 1px solid ${themeVars.selectiveYellow};
    border-radius: 5px;
    padding: 15px;
    font-size: 18px;
    width: 275px;
    margin: 15px auto;
    
    &:hover {
    background: ${themeVars.selectiveYellow};
    color: ${themeVars.alabamaCrimson};
  }
`;

export default Profile;