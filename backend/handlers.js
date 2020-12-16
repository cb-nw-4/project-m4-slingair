"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

const getFlights = (req, res) => {
  res.status(200).json({ status: 200, flights: Object.keys(flights) });
};

const getFlight = (req, res) => {
  const seats = flights[req.params.id]
  res.status(200).json({ status: 200, data: seats})
};

const addReservations = (req, res) => {
  reservations.push(req.body);
  console.log(reservations);
  res.status(201).json({ status: 201, reservations: reservations });
};

const getReservations = (req, res) => {
  res.status(200).json({ status: 200, reservations: reservations});
};

const getSingleReservation = (req, res) => {
  const reservationId = req.params.id;

  if (reservations.some((reservation) => reservation.id === reservationId)){
    const reservationInfo = reservations.filter((reservation) => reservation.id === reservationId)
    res.status(200).json({ status: 200, data: reservationInfo});
    console.log("success")
  } else {
    res.status(404).json({ status: 404, error: 'id not found'});
  }
};

const deleteReservation = (req, res) => {
  const reservationId = req.params.id;

  if (reservations.some((reservation) => reservation.id === reservationId)){
    const newReservations = reservations.filter((reservation) => reservation.id !== reservationId)
    res.status(200).json({ status: 200, data: newReservations});
  } else {
    res.status(404).json({ status: 404, error: 'id not found'});
  }
};

const updateReservation = (req, res) => {};



module.exports = {
  getFlights,
  getFlight,
  getReservations,
  addReservations,
  getSingleReservation,
  deleteReservation,
  updateReservation,
};
