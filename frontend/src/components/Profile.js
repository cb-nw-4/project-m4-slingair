import React, { useState, useEffect }from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { themeVars } from "./GlobalStyles";
import ReservationInfo from "./ReservationInfo";
import Input from "./SeatSelect/Input";
//import Button from "./SeatSelect/Button";
const initialState = { givenName: "", surname: "", email: "" };

const Profile = ({userReservation, updateUserReservation, deleteUserReservation}) =>{
    const [formData, setFormData] = useState(initialState);
    const [disabled, setDisabled] = useState(true);
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

    const handleClick = ()=>{     
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
              const { status, data, message } = json;      
              if (status === 200) {              
                deleteUserReservation();
                window.localStorage.clear();
                history.push('/update');                              
              } else {
                console.log(message);        
              }
            });  
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (validateEmail()) {
          // TODO: Send data to the server for validation/submission
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
                console.log(data);
                updateUserReservation(data);                
                history.push('/update');                      
              } else {
                console.log(message);        
              }
            });  
          // TODO: if 201, add reservation id (received from server) to localStorage
          // TODO: if 201, redirect to /confirmed (push)
          // TODO: if error from server, show error to user (stretch goal)
        }
      };
    

    return(
        <Wrapper>
            <ReservationContainer>
                <Title>Your personal information and reservation: </Title>
                <ReservationInfo reservation={userReservation} />                               
            </ReservationContainer>
            <Button onClick={handleClick}>Delete</Button> 
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
                    onClick={handleSubmit}            
                >Modify</Button>
            </UserForm>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${themeVars.alabamaCrimson};
  border-bottom: solid 2px ${themeVars.alabamaCrimson};
  margin-bottom: 15px;
`;

const ReservationContainer = styled.div`
    margin-top: 50px;  
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

const Button = styled.button`
  background: ${themeVars.alabamaCrimson};
  border-radius: 4px;
  border-color: transparent;
  color: #fff;
  cursor: pointer;
  display: block;
  font-family: ${themeVars.headingFont};
  font-size: 24px;
  height: 48px;
  width: 200px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export default Profile;