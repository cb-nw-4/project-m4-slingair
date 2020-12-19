"use strict";

const { request } = require("express");
// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

// use this function to populate the dropdown menu to select a flight
// should return just the number of the flight
const getFlights = (req, res) => {
  let flightNumbers = Object.keys(flights);
  res.status(200).json({
    status: 200,
    data: flightNumbers,
  })
};

// grab flight selected and return seat availability for flight
const getFlight = (req, res) => {
  let flightId = req.params.id;
  let flightInfo = flights[flightId];
  res.status(200).json({
    status: 200,
    data: flightInfo,
  })
};

const addReservations = (req, res) => {
  const reservationId = uuidv4();
  const reservation = {...req.body, id: reservationId};
  if (req.body.givenName !== "" | req.body.surname !== "" | req.body.email !== "" | req.body.seat !== "" | req.body.flight !== ""){
    reservations.push(reservation);
    res.status(201).json({
      status: 201,
      data: reservation.id,
    })
  } else {
    res.status(400).json({
      status: 400,
      message: "Data is not valid",
    })
  }
}

const getReservations = (req, res) => {
  res.status(200).json({
    status: 200,
    data: reservations,
  })
};

const getSingleReservation = (req, res) => {
  let reservationId = req.params.reservationId;
  let reservation = reservations.find((reservEl) => {
    return reservationId === reservEl.id;
  })
  if (!reservation) {
    res.status(400).json({
      status: 400,
      message: "Reservation Number Not Found"
    })
  } else {
    res.status(200).json({
      status: 200,
      data: reservation,
    })
  }
};

const deleteReservation = (req, res) => {
  let id  =  req.params.id;
  let isSuccessful = false;
  reservations.forEach((reservation, index) => {
    if (id === reservation.id) {
      reservaitons.splice(index, 1);
      isSuccessful = true;
    }
  })
  if (!isSuccessful) {
    res.status(400).json({
      status: 400,
      message: "Reservation was not found"
    })
  } else {
    res.status(200).json({
      status: 200,
      message: "The reservation was deleted"
    })
  }
};

const updateReservation = (req, res) => {
  const { id, flight, seat,  givenName, surname, email } = req.body;
  let reservationToModify = reservations.find((reservation) => {
    return id === reservation.id;
  })
  reservationToModify = {
    id: id,
    flight: flight,
    seat: seat,
    givenName:  givenName,
    surname: surname,
    email: email,
  }
  if (reservationToModify !== "") {
    res.status(200).json({
      status: 200,
      message: "Reservation has been modified"
    })
  } else {
    res.status(400).json({
      status: 400,
      message: "Reservation not found"
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
