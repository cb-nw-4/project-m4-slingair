"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

const getFlights = (req, res) => {

  const flightNumbers = Object.keys(flights);

  return res.status(200).json({ status: 200, data: flightNumbers });

  //need to add error

};

const getFlight = async (req, res) => {
  const flightNumber = req.params.flight;
  
  try {
    const seating = Object.values(flights[flightNumber])
    return res.status(200).json({ status: 200, data: seating})
  } catch (err) {
    return res.status(404).json({ status: 404, message: "Flight number does not exist."})
  }
};

const addReservations = async (req, res) => {

  const reservationId = uuidv4();
  const reservationBody = req.body;

  try {
    const totalReservation = {id: reservationId, ...reservationBody};
    return res.status(201).json({ status: 201, data: totalReservation });
  } catch (err) {
    res.status(400).json({ status: 400, data: totalReservation });
  }
};

const getReservations = (req, res) => {
  return res.json({ status: 200, data: reservations })
};

const getSingleReservation = (req, res) => {

  const id = req.params.id;

  reservations.filter((reservation) => {
    if (id === reservation.id) {
      res.status(200).json({ status: 200, data: reservation })
    } else {
      res.status(404).json({status: 404, message: "Reservation does not exist."})
    }
    })
};

const deleteReservation = (req, res) => {

  const id = req.params.id;

  let updatedReservations = reservations.filter((reservation) => {
    if (reservation.id !== id) {
      return reservations;
    }
  })

  reservations.map((reservation) => {
    if (reservation.id === id) {
      return res.status(200).json({ status: 200, message: "Reservation successfully deleted.", data: updatedReservations });
    } else {
      return res.status(404).json({status: 404, message: "Reservation does not exist."})
    }
  })
}

const updateReservation = (req, res) => {

  const id = req.params.id;
  const body = req.body;

  const reservation = reservations.filter((reservation) => {
    if (id === reservation.id) {
      return reservation;
    };
    })

  reservation[0].flight = body.flight;
  reservation[0].seat = body.seat;
  reservation[0].givenName = body.givenName;
  reservation[0].surname = body.surname;
  reservation[0].email = body.email;
    
  return res.status(200).json({ status: 200, message: "Reservation successfully updated.", data: reservation })

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
