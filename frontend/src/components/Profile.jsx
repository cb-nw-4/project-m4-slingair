import styled from "styled-components";
import React, { useEffect, useState } from "react";
//import Form from "./SeatSelect/Form";

import { themeVars } from "./GlobalStyles";
// import tombstone from "../assets/tombstone.png";

const Profile = ({ userReservation }) => {
  console.log(userReservation);
  const [postId, setPostId] = useState({});
  const [givenName, setGivenName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const reservationId = localStorage.getItem("id");
    console.log("profile", reservationId);

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        givenName: givenName,
        surname: surname,
      }),
    };

    if (reservationId) {
      fetch(`/reservationUpdate/${reservationId}`, requestOptions)
        .then((response) => response.json())
        .then((response) => {
          setGivenName(response.data.givenName);
          setSurname(response.data.surname);
          setEmail(response.data.email);

          console.log("profile1", response.data);
          setPostId(response.data);
        });
    }
  };
  return (
    <Wrapper>
      <Wrapper3>
        <h1>Your user profile</h1>
        <Wrapper4>
          <Name>
            <h4>First name:&nbsp;</h4>
            <div>{userReservation.givenName}</div>
          </Name>
          <LastName>
            <h4>Last name:&nbsp;</h4>
            <div>{userReservation.surname}</div>
          </LastName>
          <Email>
            <h4>Email:&nbsp;</h4>
            <div>{userReservation.email}</div>
          </Email>
          <h4>
            If you wish to change your profile please enter your new details in
            the form below!
          </h4>
        </Wrapper4>
      </Wrapper3>
      <Wrapper1>
        <UserForm onSubmit={handleSubmit}>
          <input
            name="givenName"
            placeholder="Type your first name here"
            type="givenName"
            onChange={(event) => setGivenName(event.target.value)}
            value={givenName}
          />
          <input
            name="surname"
            placeholder="Type your last name here"
            type="surname"
            onChange={(event) => setSurname(event.target.value)}
            value={surname}
          />
          <input
            name="email"
            placeholder="Type your new email address here"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <Wrapper2>click</Wrapper2>
        </UserForm>
      </Wrapper1>
      <>
        <Wrapper5>
          <Wrapper6>
            <h4>Your details have now been changed to:</h4>
          </Wrapper6>
          <Wrapper7>
            <NewFirstName>
              <h4>First Name:&nbsp;</h4>
              <div>{givenName}</div>
            </NewFirstName>
            <NewLastName>
              <h4>Last Name:&nbsp;</h4>
              <div>{surname}</div>
            </NewLastName>
            <NewEmail>
              <h4>Email:&nbsp;</h4>
              <div>{email}</div>
            </NewEmail>
          </Wrapper7>
        </Wrapper5>
      </>
    </Wrapper>
  );
};

const Wrapper6 = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 30px;
`;
const Wrapper7 = styled.div`
  margin-left: 30px;
`;
const NewFirstName = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;
const NewLastName = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;
const NewEmail = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

const Wrapper3 = styled.span`
  height: 160px;
  width: 800px;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  box-sizing: border-box;
  border: solid ${themeVars.cadmiumRed} 2px;
  margin-bottom: 15px;
`;
const Wrapper5 = styled.span`
  height: 140px;
  width: 800px;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  box-sizing: border-box;
  border: solid ${themeVars.cadmiumRed} 2px;
  margin-bottom: 10px;
`;

const Wrapper2 = styled.button`
  background: ${themeVars.alabamaCrimson};
  border-radius: 4px;
  border-color: transparent;
  color: #fff;
  cursor: pointer;
  display: block;
  font-family: ${themeVars.headingFont};
  font-size: 24px;
  height: 48px;
  width: 100%;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
const Wrapper = styled.span`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`;
const Wrapper4 = styled.span`
  margin-left: 30px;
`;
const UserForm = styled.div`
  border: 3px solid ${themeVars.alabamaCrimson};
  border-radius: 5px;
  margin: auto;
  padding: 30px;
  width: 400px;
`;
const Wrapper1 = styled.div`
  margin-bottom: 6px;
  width: 100%;
  position: relative;

  label {
    display: none;
  }

  input {
    border-radius: 3px;
    border: 1px solid #e4e8eb;
    box-sizing: border-box;
    color: #464a5c;
    font-size: 16px;
    font-weight: 300;
    height: 44px;
    padding: 8px 12px 10px 12px;
    width: 100%;

    &::placeholder {
      color: #999;
    }
  }
`;
const Name = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;
const LastName = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;
const Email = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;
export default Profile;
