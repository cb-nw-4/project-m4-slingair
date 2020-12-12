import React, {useState} from "react";
import styled from "styled-components";


import { themeVars } from "./GlobalStyles";
import SeatSelect from "./SeatSelect";

const Profile = ({ updateUserReservation, userReservation }) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = () => {
    fetch(`/reservation/${userReservation.id}`, {
      method: "DELETE",
    });
    setIsDeleting(true)
  };


  return (
    <>
      <SeatSelect
        isDeleting={isDeleting}
        setIsDeleting={setIsDeleting}
        update
        updateUserReservation={updateUserReservation}
        userReservation={userReservation}
      />
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default Profile;
