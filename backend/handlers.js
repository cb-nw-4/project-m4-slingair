"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

const getFlights = (req, res) => {
  res.status(200).json({
    status: 200,
    data: Object.keys(flights),
  });
};

const getFlight = (req, res) => {
  const flightId = req.params.id
  res.status(200).json({
    status: 200,
    data: flights[flightId]
  })
};

const addReservations = (req, res) => {
  const body = req.body
  // console.log(body)
  res.status(200).json({
    status: 200,
    data: body
  })
};

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
