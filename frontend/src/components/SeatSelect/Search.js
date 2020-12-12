import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Query from "./Query";
import styled from "styled-components";

const initialState = { seat: "", givenName: "", surname: "", email: "" };

const Search = () => {
  const history = useHistory();
  const [subStatus, setSubStatus] = useState("idle");
  const [formData, setFormData] = useState(initialState);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    formData.id === undefined
      ? setDisabled(true)
      : setDisabled(false);
  }, [formData, setDisabled]);

  const handleChange = (val, item) => {
    setFormData({ ...formData, [item]: val });
  };
  const validateId = () => {
    let idParts = "";
    if(formData.id) {
      idParts = formData.id.split("-");
    }
    return (
      idParts.length === 5 &&
      idParts[0].length === 8 &&
      idParts[1].length === 4 &&
      idParts[2].length === 4 &&
      idParts[3].length === 4 &&
      idParts[4].length === 12

    );
    
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (validateId()) {
      fetch(`http://localhost:8000/reservation/${formData.id}`, {
        method: "Get",
      })
        .then((res) => res.json())
        .then((json) => {
          const { status, message, data } = json;
          if (status === 200) {
            window.localStorage.setItem('myData', JSON.stringify(data.reservation));
            setSubStatus("confirmed");
            history.push("/confirmed");
          } else {
            console.log(status, message, data);
            setSubStatus("error");
          }
        });
    }
  };

  return (
    <>
      <Look>Search for your reservation!</Look>
      <Query
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        disabled={disabled}
        subStatus={subStatus}
      />
    </>
  );
};



const Look = styled.h2`
  margin: 20px auto;
`;

export default Search;
