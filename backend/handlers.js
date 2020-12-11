"use strict";

const { json } = require("body-parser");
//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

const getFlights = (req, res) => {
  const flightsID = Object.keys(flights);
  res.status(200).json({ status: 200, data: {flightsID}, message: {} });
};

const getFlight = (req, res) => {
  if (req.params.id === 'null'){
    res.status(100).json({ status: 100, data: {}, message: "Waiting on customer choice"});
  } else {
      const flightSeats = Object.values(flights[req.params.id]);
      res.status(200).json({ status: 200, data: {flightSeats}, message: "Flight confirmed"});
  }
};

const addReservations = (req, res) => {
  const { flight, seat, givenName, surname, email } = req.body;
  if (
    flight == undefined ||
    seat == undefined ||
    givenName == undefined ||
    surname == undefined ||
    email == undefined  
  ) {
    res.status(400).json({
      status: 400,
      message:
        "Unable to create reservation due to missing information. Please try again.",
      data: `flight: ${flight}, seat: ${seat}, givenName: ${givenName}, surname: ${surname}, email: ${email}`,
    });
  } else {
    reservations.push(req.body);
    res.status(201).json({
      status: 201,
      message: `Reservation for ${givenName} ${surname} was successfully created.`,
      data: req.body,
    });
  }
};

const getReservations = (req, res) => {
  res.status(200).json({ status: 200, data: {reservations}, message:"List of confirmed reservations"});
};

const getSingleReservation = (req, res) => {
  const reservation = reservations.find((i) => i.id === req.params.id );
  if (!reservation) {
    res.status(204).json({ status: 204, message: "flight not found"});
  } else {
    res.status(200).json({ status: 200, data: {reservation}, message: "Reservation confirmed"});
  }
};

const deleteReservation = (req, res) => {
  const reservation = reservations.filter((i) => i.id != req.params.id);
  console.log(reservation);
  if (!reservation) {
    res.status(204).json({ status: 204, message: "flight not found"});
  } else {
    res.status(200).json({ status: 200, data: {reservation}, message: "Reservation deleted"});
  }
};

const updateReservation = (req, res) => {
  const reservation = (reservations.filter((i) => i.id === req.params.id));
  reservation[0].seat = req.body.seat;
  reservation[0].givenName = req.body.givenName;
  reservation[0].surname = req.body.surname;
  reservation[0].email = req.body.email;
  if (!reservation) {
    res.status(204).json({ status: 204, message: "flight not found"});
  } else {
    res.status(200).json({ status: 200, data: {reservation}, message: "Reservation changed"});
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


