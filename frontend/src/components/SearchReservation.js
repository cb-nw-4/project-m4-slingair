import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const SearchReservation = ({ userReservation }) => {
  const [value, setValue] = useState("");
  const [single, setSingle] = useState([]);
  const [foundReservation, setFoundReservation] = useState(false);
  const [reservation, setReservation] = useState([]);
  useEffect(() => {
    fetch(`/reservations`)
      .then((res) => res.json())
      .then((json) => {
        let result = JSON.parse(localStorage.getItem("formData"));
        let arrayData = json.data;
        arrayData.push(result);

        setReservation(arrayData);
      });
  }, []);
  console.log(reservation);
  const handleClick = () => {
    let clientId = reservation.filter((reserv) => {
      if (reserv.id === value) {
        setFoundReservation(true);
        return reserv;
        
      }
    })
    console.log(clientId)
    if (clientId) {
      setReservation(clientId);
    }
    console.log(clientId);

    return clientId;
  };
  console.log(reservation);
  console.log(single);

  return (
    <Wrapper>
      <Title>Enter Your Confirmation ID</Title>
      <Input
        type="text"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />
      <Button onClick={handleClick}> Find your Reservation</Button>

      {foundReservation &&
        reservation.map((reserv) => {
          return (
            <Div>
              <List key={reserv.id}>
                <Item>
                  <Span>First Name:</Span> {reserv.givenName}
                </Item>
                <Item>
                  <Span>Last Name:</Span> {reserv.surname}
                </Item>
                <Item>
                  <Span>Email:</Span> {reserv.email}
                </Item>
                <Item>
                  <Span>Seat Number:</Span> {reserv.seat}
                </Item>
                <Item>
                  <Span>Flight Number:</Span>
                  {reserv.flightNumber || reserv.flight}
                </Item>
                <Item>
                  <Span>Reservation ID:</Span> {reserv.id}
                </Item>
              </List>
            </Div>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;

const Input = styled.input`
  width: 500px;
  margin: 100px;
`;

const Title = styled.h1`
  font-size: 250%;
`;
const List = styled.ul`
  padding: 10px;
  border: 3px #aa001e solid;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
`;
const Div = styled.div`
  display: flex;
  margin-top: 130px;
`;

const Span = styled.span`
  text-decoration: underline;
  font-weight: bold;
  color: black;
`;

const Item = styled.li`
  padding: 5px;
  font-family: ${themeVars.contentFont};
  font-size: 150%;
`;

const Button = styled.button`
  background-color: black;
  border: none;
  border-radius: 20px;
  padding: 10px;
`;
export default SearchReservation;
