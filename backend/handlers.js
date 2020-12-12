"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

const getFlights = (req, res) => {
  const data = Object.keys(flights);

  res.status(200).json({ status: 200, message: "Success", data: data });
};

const getFlight = (req, res) => {
const data = flights.SA231;
  res.status(200).json({ status: 200, message: "Success", data: data});
};

const addReservations = (req, res) => {};

const getReservations = (req, res) => {
const data = reservations;
res.status(200).json({status:200, message: "Success", data: data});

};

const getSingleReservation = (req, res) => {
  const data = reservations;
  res.status(200).json({status:200, message: "Success", data: data});

};

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
