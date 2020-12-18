import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { useParams } from "react-router-dom";

const Reservations = () => {

  const { id } = useParams();
  const [value, setValue] = useState("");
  const [single, setSingle] = useState([]);
  useEffect(() => {
      fetch(`/reservations`)
      .then((res) => res.json())
      .then((json) => { console.log(json.data)
          setSingle(json.data);
      })
  }, []);
  console.log(single);
  
  return (
  <Wrapper>
    <Title>Enter Your Confirmation ID</Title>
      <Input type="text" value={value}/>
      <Button> Find your Reservation</Button>
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

  const Input = styled.input`
  width:500px;
  margin:100px;
  `;

  const Title = styled.h1`
  font-size:250%;
  `;
  
  const Button = styled.button`
  background-color:black;
  border:none;
  border-radius:20px;
  `;
export default Reservations;



