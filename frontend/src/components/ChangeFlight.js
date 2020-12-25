import React from "react";
import SeatSelect from "./SeatSelect";

const ChangeFlight = ({ updateUserReservation, userReservation, updateMode }) => {
    return (
        <>
        <SeatSelect 
        updateUserReservation={updateUserReservation}
        userReservation={userReservation}
        updateMode={updateMode}
        />
        </>
    );
}

export default ChangeFlight;