import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const Admin = () => {
const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch('/reservations')
      .then(res => res.json())
      .then((json) => {
        //console.log(json.data)
        setFiles(json.data)
  })}, [setFiles])

return (
    <Wrapper>
        <Title>Admin: SlingAir Registrations</Title>
        {files.map((file) => (
          <File key={file.id}>
            <li><Bold>Registration Number:</Bold> {file.id}</li>
            <li><Bold>Name:</Bold> {file.surname}, {file.givenName} </li>
            <li><Bold>Email:</Bold> {file.email}</li>
            <li><Bold>Flight Number:</Bold> {file.flight}</li>
            <li><Bold>Seat:</Bold> {file.seat}</li>
          </File>
        ))}
    </Wrapper>
    );
};

const Wrapper = styled.div`
  background: ${themeVars.selectiveYellow};
`;

const Title = styled.p`
  font-size: 25px;
  font-weight: bold;
  color:  white;
  text-align: center;
  margin-top: 25px;
`;

const File = styled.ul`
  font-size: 20px;
  border: 3px solid  ${themeVars.alabamaCrimson};
  width: 75%;
  border-radius: 5px;
  margin: 15px auto;
  line-height: 35px;
  padding: 15px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

export default Admin;