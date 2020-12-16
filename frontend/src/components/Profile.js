import React, {useState} from "react";
import styled from "styled-components";


import { themeVars } from "./GlobalStyles";
import SeatSelect from "./SeatSelect";

const Profile = ({ updateUserReservation, userReservation }) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const [isLongerThanZero, setIsLongerThanZero] = useState(true)

  const handleDelete = () => {
    fetch(`/reservation/${userReservation.id}`, {
      method: "DELETE",
    });
    setIsDeleting(true)
    fetch('/reservation')
    .then(res => res.json())
    .then(json => json.body.length > 1 ? setIsLongerThanZero(true) : setIsLongerThanZero(false))
  };


  return (
    <Wrapper>
      <SeatSelect
        isDeleting={isDeleting}
        setIsDeleting={setIsDeleting}
        update
        updateUserReservation={updateUserReservation}
        userReservation={userReservation}
      />
      <MyButton onClick={handleDelete} disabled={!isLongerThanZero}>Delete</MyButton>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  
`;

const MyButton = styled.button`
  margin-top: 1rem;
  margin-left: 25%;
  margin-right: 25%;
  padding: 1rem 4rem;
  width: 50%;
`;