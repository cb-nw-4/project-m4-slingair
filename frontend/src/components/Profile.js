import React from "react";
import styled from "styled-components";


import { themeVars } from "./GlobalStyles";
import SeatSelect from "./SeatSelect";

const Profile = ({ updateUserReservation, userReservation }) => {
  const handleDelete = () => {
    fetch(`/reservation/${userReservation.id}`, {
      method: "DELETE",
    });
  };
 

  return (
    <>
      <SeatSelect
        update
        updateUserReservation={updateUserReservation}
        userReservation={userReservation}
      />
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default Profile;
