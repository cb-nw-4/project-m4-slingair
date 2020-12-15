import React from 'react';



const ReservationInfo = ({reservation})=>{
    return(
        <>
            <p><strong>Reservation #: </strong>{reservation.id}</p>
            <p><strong>Flight #: </strong>{reservation.flight}</p>
            <p><strong>Seat #: </strong>{reservation.seat}</p>
            <p><strong>Name: </strong>{`${reservation.givenName} ${reservation.surname}`}</p>
            <p><strong>Email: </strong>{reservation.email}</p> 
        </>
    );

};


export default ReservationInfo;