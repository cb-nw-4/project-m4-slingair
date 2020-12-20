import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const Profile = ({ updateUserReservation, userReservation }) => {
  const [profile, setProfile] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [updateInfo, setUpdateInfo] = useState(false);
  const [newClient, setNewClient] = useState([]);

  useEffect(() => {
    fetch("/reservations")
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data);
        console.log(userReservation);
        setProfile(JSON.parse(localStorage.getItem("formData")));
      });
  }, []);
  console.log(profile);

  const handleDelete = () => {
    let { id } = JSON.parse(window.localStorage.getItem("formData"));
    fetch(`/reservations/${id}`, {
      method: "DELETE",
    });
    setDeleted(true);
    fetch("/reservations").then((res) => {
      return res.json();
    });
    setProfile([""]);
    localStorage.removeItem("reservationId");
  };

  const handleUpdate = () => {
    setUpdateInfo(true);
  };
  return (
    <Wrapper>
      <Title>Profile</Title>
      <Div>
        <List>
          <Item>
            <Span>First Name:</Span> {profile.givenName}
          </Item>
          <Item>
            <Span>Last Name:</Span> {profile.surname}
          </Item>
          <Item>
            <Span>Email:</Span> {profile.email}
          </Item>
          <Item>
            <Span>Seat Number:</Span> {profile.seat}
          </Item>
          <Item>
            <Span>Flight Number:</Span> {profile.flightNumber || profile.flight}
          </Item>
          <Item>
            <Span>Reservation ID:</Span> {profile.id}
          </Item>
        </List>
      </Div>
      <ButtonWrap>
        <Button onClick={handleUpdate}>Edit</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </ButtonWrap>
      {updateInfo && (
        <NewDiv>
          <Title> Enter your new information</Title>
          <NewList>
            <NewItem>
              First Name <Text type="text" />
            </NewItem>
            <NewItem>
              Last Name
              <Text type="text" />
            </NewItem>
            <NewItem>
              Email
              <Text type="text" />
            </NewItem>
          </NewList>
          <Button>Update</Button>
        </NewDiv>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const NewDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${themeVars.orange};
  padding: 10px;
  border: 3px #aa001e solid;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  width: 70vw;
`;
const Title = styled.h1`
  font-size: 250%;
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
`;
const Span = styled.span`
  text-decoration: underline;
  font-weight: bold;
  color: black;
`;
const List = styled.ul`
  padding: 10px;
  border: 3px #aa001e solid;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
`;

const Item = styled.li`
  padding: 5px;
  font-family: ${themeVars.contentFont};
  font-size: 150%;
`;
const NewList = styled.ul``;
const NewItem = styled.li`
  margin: 20px;
  text-decoration: underline;
  font-weight: bold;
  color: black;
  display: flex;
  justify-content: space-evenly;
  font-size: 150%;
`;
const Text = styled.input``;
const Button = styled.button`
  border: none;
  margin-top: 30px;
  width: 200px;
  height: 50px;
  background-color: #aa001e;
  border-radius: 10px;
`;

export default Profile;
