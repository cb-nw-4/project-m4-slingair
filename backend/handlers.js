"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

const getFlights = (req, res) => {
  let flight=Object.keys(flights);
  //console.log(flight);
  res.status(200).json({status:200, data:flight});
};

const getFlight = (req, res) => {
  let flight=req.params.flightid;
  console.log(flight);
  let seats=flights[flight];
  //console.log(seats);
  res.status(200).json({status:200, data:seats})
};

const addReservations = (req, res) => {};

const getReservations = (req, res) => {};

const getSingleReservation = (req, res) => {};

const deleteReservation = (req, res) => {};

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
