"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

// Get flights
const getFlights = (req, res) => {
  return new Promise((resolve, reject) => {
    resolve({ data: Object.keys(flights) });
    // reject({ data: 'n/a', message: 'Sorry, but flight information is not available right now. Please try again later.'});
  });
}

// Get seating for specfic flight
const getFlight = (req, res) => {
  return new Promise((resolve, reject) => {
    resolve({ data: flights[req] });
    // reject({ data: req, message: 'Cannot get seating information for flight.' });
  });
}






// const getFlight = (req, res) => {
//   return { status: 'ok', data: flights[req] };
// }

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
