"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

const getFlights = (req, res) => {
  let flightNums = Object.keys(flights);

  res.status(200).json({
    status: 200,
    data: flightNums,
    message: "Success",
  });
};

const getFlight = (req, res) => {
  if (flights[req.params.id] !== undefined) {
    res.status(200).json({
      status: 200,
      data: flights[req.params.id],
      message: "Success",
    });
  } else {
    res.status(400).json({
      status: 400,
      data: req.params.id,
      message: "Invalid flight number",
    });
  }
};

const addReservations = (req, res) => {
  let newEntry = {};
  let duplicateNameCheck = reservations.filter((reservation) => {
    if (
      req.body.givenName.toLowerCase() ===
        reservation.givenName.toLowerCase() &&
      req.body.surname.toLowerCase() === reservation.surname.toLowerCase()
    )
      return true;
  });
  if (duplicateNameCheck.length > 0) {
    res.status(400).json({
      status: 400,
      data: req.body,
      message: "A reservation with that name already exists.",
    });
  } else {
    newEntry.id = uuidv4();
    newEntry.flight = req.body.flight;
    newEntry.seat = req.body.seat;
    newEntry.givenName = req.body.givenName;
    newEntry.surname = req.body.surname;
    newEntry.email = req.body.email;
    reservations.push(newEntry);

    let flight = flights[req.body.flight];
    let seatLocArr = flight.map((seat) => {
      if (seat.id === req.body.seat) return 1;
      else return 0;
    });
    let seatLoc = seatLocArr.indexOf(1);
    flights[req.body.flight][seatLoc].isAvailable = false;

    res.status(200).json({
      status: 200,
      data: newEntry,
      message: "Success, reservation added",
    });
  }
};

const getReservations = (req, res) => {
  res.status(200).json({
    status: 200,
    data: reservations,
    message: "Success all reservations retrieved",
  });
};

const getSingleReservation = (req, res) => {
  let filteredResos = reservations.find(
    (reservation) => reservation.id === req.params.id
  );
  if (filteredResos) {
    res.status(200).json({
      status: 200,
      data: filteredResos,
      message: "Success reservation retrieved",
    });
  } else {
    res.status(400).json({
      status: 400,
      data: req.params.id,
      message: "Invalid reservation number",
    });
  }
};

const deleteReservation = (req, res) => {
  let filteredResos = reservations.map((reservation) => {
    if (reservation.id === req.body.id) return 1;
    else return 0;
  });
  let i = filteredResos.indexOf(1);
  if (i >= 0) {
    reservations.splice(i, 1);
    res.status(200).json({
      status: 200,
      data: reservations,
      message: "Reservation Deleted",
    });
  } else {
    res.status(400).json({
      status: 400,
      data: req.body.id,
      message: "No reservation by that id",
    });
  }
};

const updateReservation = (req, res) => {
  let filteredResos = reservations.map((reservation) => {
    if (reservation.id === req.body.id) return 1;
    else return 0;
  });
  let i = filteredResos.indexOf(1);
  if (i >= 0) {
    (reservations[i].flight = req.body.flight),
      (reservations[i].seat = req.body.seat),
      (reservations[i].givenName = req.body.givenName),
      (reservations[i].surname = req.body.surname),
      (reservations[i].email = req.body.email),
      res.status(200).json({
        status: 200,
        data: reservations,
        message: "Reservation Updated Succesfully",
      });
  } else {
    res.status(400).json({
      status: 400,
      data: req.body.id,
      message: "No reservation by that id",
    });
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
