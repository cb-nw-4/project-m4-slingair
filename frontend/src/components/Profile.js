import React, { useState, useEffect }from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { themeVars } from "./GlobalStyles";
import ReservationInfo from "./ReservationInfo";
import Input from "./SeatSelect/Input";
import Button from "./SeatSelect/Button";

const initialState = { givenName: "", surname: "", email: "" };

const Profile = ({userReservation, updateUserReservation, deleteUserReservation}) =>{
    const [formData, setFormData] = useState(initialState);
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState("");
    const history = useHistory();

    const handleChange = (val, item) => {
        setFormData({ ...formData, [item]: val });
      };

      const validateEmail = () => {
        const emailParts = formData.email.split("@");
        return (
          emailParts.length === 2 &&
          emailParts[0].length > 0 &&
          emailParts[1].length > 0
        );
      };

      useEffect(() => {
        // This hook is listening to state changes and verifying whether or not all
        // of the form data is filled out.
        Object.values(formData).includes("")
          ? setDisabled(true)
          : setDisabled(false);
      }, [formData, setDisabled]);

    const handleClick = (ev)=>{
      ev.preventDefault();
        fetch(`/reservation/${userReservation.id}`, {
            method: "DELETE",
            body: JSON.stringify({...userReservation}),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((json) => {
              const { status, message } = json;
              if (status === 200) {
                setError("");
                deleteUserReservation();
                window.localStorage.clear();
                history.push('/update');
              } else {
                setError(message);
              }
            });
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (validateEmail()) {
          fetch(`/reservation/${userReservation.id}`, {
            method: "PUT",
            body: JSON.stringify({id: userReservation.id, flight: userReservation.flight, seat: userReservation.seat, ...formData}),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((json) => {
              const { status, data, message } = json;
              if (status === 200) {
                setError("");
                updateUserReservation(data);
                history.push('/update');
              } else {
                setError(message);
              }
            });
        }
        else {
          setError("Invalid email");
        }
      };

    return(
        <Wrapper>
           <Title>Your personal information and reservation</Title>
            <ReservationContainer>               
                <ReservationInfo reservation={userReservation} />
            </ReservationContainer>
            <ButtonWrapper >
              <Button handleClick={handleClick} text="Delete" />
            </ButtonWrapper>
            <UserForm>
                <Input
                    name="givenName"
                    placeholder="First Name"
                    type="text"
                    handleChange={handleChange}
                    value={formData.givenName}
                />
                <Input
                    name="surname"
                    placeholder="Last Name"
                    type="text"
                    handleChange={handleChange}
                    value={formData.surname}
                />
                <Input
                    name="email"
                    placeholder="Email"
                    type="email"
                    handleChange={handleChange}
                    value={formData.email}
                />
                <Button
                    disabled={disabled}
                    handleClick={handleSubmit}
                    text="Modify"
                />
            </UserForm>
            {error !== "" &&
            <Error>{`Error: ${error}`}</Error>}
        </Wrapper>
    )
};

const ButtonWrapper = styled.div`
  width: 250px;
`;

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`        
    background-color: ${themeVars.cadmiumRed}; 
    width: 100%;
    padding: 25px; 
`;

const ReservationContainer = styled.div`
    margin-top: 30px;
    margin-bottom: 10px;
    line-height: 1.6;
`;

const UserForm = styled.div`
  border: 3px solid ${themeVars.alabamaCrimson};
  border-radius: 5px;
  padding: 30px;
  width: 400px;
  margin: 30px;
  display: flex;
  flex-direction:column;
  align-items: center;

`;

const Error = styled.p`
  color: ${themeVars.cadmiumRed};
  font-weight: bold;
`;

export default Profile;