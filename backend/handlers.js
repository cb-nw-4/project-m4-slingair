"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

const getFlights = (req, res) => {
  res.status(200).json({
    status: 200,
    data: Object.keys(flights)
  });
};

const getFlight = (req, res) => {
  const flightId = req.params.id
  res.status(200).json({
    status: 200,
    data: flights[flightId]
  });
};

const addReservations = (req, res) => {
  if( reservations.some(obj => 
    (obj.email === req.body.email )
    ))
  {res.status(409).json({
      status: 409,
      message: "Already having reservation",
    })
  }
  else
  {const infoReservation = {
    id:uuidv4(),
    flight:req.body.flight,
    seat:req.body.seat,
    givenName:req.body.givenName,
    surname:req.body.surname,
    email:req.body.email
  }
  reservations.push(infoReservation)
  res.status(201).json({
    status: 201,
    data: infoReservation
  });
}
};

const getReservations = (req, res) => {
  res.status(200).json({
    status:200,
    data: reservations
  })
};

const getSingleReservation = (req, res) => {
  const reservation = reservations.find((element) => element.id === req.params.id)
  if(!reservation){
    res.status(404).json({
      status:404,
      message:"Reservation not found"
    })
  } else {
    res.status(200).json({
      status:200,
      data:reservation
    });
  }
};

const deleteReservation = (req, res) => {
  const reservation = reservations.filter((element) => element.id === req.params.id)
  if(reservation != req.params.id){
    res.status(204).json({
      status:204,
      message:"Reservation not found"
    })
  } else {
    res.status(200).json({
      status:200,
      message:"Reservation deleted",
      data:reservation
    });
  }
};

const updateReservation = (req, res) => {
  const reservationId = req.params.id
  const {email, surname, givenName, flight, seat} = req.body;
  console.log(reservationId, req.body )
  const reservation = reservations.find((element) => element.id === reservationId)
  const reservationIndex = reservations.indexOf(reservation)
  if(
    reservation &&
    givenName === reservation.givenName &&
    surname === reservation.surname &&
    email === reservation.email

  ){
    const updatedReservation = {id: reservationId, email, surname, givenName, flight, seat};
    const oldFlightSeatIndex = flights[reservation.flight].findIndex((seat) => seat.id === reservation.seat);
    const newFlightSeatIndex = flights[updatedReservation.flight].findIndex((seat) => seat.id === updatedReservation.seat);
    //update reservation
    reservations[reservationIndex] = {...updatedReservation};

    //make old seat available
    flights[reservation.flight][oldFlightSeatIndex] = {id: reservation.seat, isAvailable: true};

    //make new seat unavailable
    flights[updatedReservation.flight][newFlightSeatIndex] = {id: updatedReservation.seat, isAvailable: false};
  
    res.status(201).json({
      status:201,
      message:"Update confirm",
    });
  } else {
    res.status(404).json({
      status:404,
      message:"Reservation not found"
    })
  }
};

module.exports = {
  getFlights,
  getFlight,
  getReservations,
  addReservations,
  getSingleReservation,
  deleteReservation,
  updateReservation,
};
