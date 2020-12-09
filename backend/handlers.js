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
  const flightId = req.params.id;
  res.status(200).json({
    status: 200,
    data: flights[flightId],
  });
};

const addReservations = (req, res) => {
  try {
    const reservationId = uuidv4();
    const body = req.body;
    res.status(201).json({
      status: 201,
      data: { ...body, id: reservationId },
    });
  } catch {
    res.status(400).json({
      status: 400,
      message: "didnt create anything",
    });
  }
};

const getReservations = (req, res) => {
  res.status(200).json({
    status: 200,
    body: reservations,
  });
};

const getSingleReservation = (req, res) => {
  const reservationId = req.params.id;
  res.status(200).json({
    status: 200,
    body: reservations.find((el) => {
      return el.id === reservationId;
    }),
  });
};

const deleteReservation = (req, res) => {
  const reservationId = req.params.id;
  const findId = reservations.find((el) => el.id == reservationId);
  const index = reservations.indexOf(findId);
  // console.log(findId, index)
  reservations.splice(index, 1);
  res.status(200).json({
    status: 200,
    message: "deleted successfully",
  });
};

const updateReservation = (req, res) => {
  const reservationId = req.params.id
  const findId = reservations.find((el) => el.id == reservationId);
  const index = reservations.indexOf(findId);
  
  res.status(200).json({
    status: 200,
    message: 'updated successfully'
  })
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
