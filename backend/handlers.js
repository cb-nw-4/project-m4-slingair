"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

const getFlights = (req, res) => {
  return { status: 'ok', data: Object.keys(flights) };
};

const getFlight = (req, res) => {};

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
