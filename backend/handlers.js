"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

const getFlights = (req, res) => {
<<<<<<< HEAD

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

=======
  const flightNumbers = Object.keys(flights);
  res.status(200).json({ status: 200, data: flightNumbers })
};

const getFlight = (req, res) => {
  const flightNumber = req.params.flight;
  const seating = Object.values(flights[flightNumber])
  res.status(200).json({ status: 200, data: seating})
};

const addReservations = (req, res) => {

  const id = uuidv4();
  const body = req.body;
  const flight = body.flight;
  const seat = body.seat;
  const givenName = body.givenName;
  const surname = body.surname;
  const email = body.email;

  const newReservation = { id, flight, seat, givenName, surname, email };
  reservations.push(newReservation);

  if (newReservation.id === "" ||
      newReservation.flight === "" ||
      newReservation.seat === "" ||
      newReservation.givenName === "" ||
      newReservation.surname === "" ||
      newReservation.email === "") {
    res.status(400).json({ status: 400, message: "Oops! You forgot something..." })
  } else if (newReservation.id === undefined ||
    newReservation.flight === undefined ||
    newReservation.seat === undefined ||
    newReservation.givenName === undefined || 
    newReservation.surname === undefined || 
    newReservation.email === undefined) {
      res.status(400).json({ status: 400, message: "Oops! Something's missing" })
  } else {
    res.status(201).json({ status: 201, message: "Reservation successfully added", data: reservations })
  }
};

const getReservations = (req, res) => {
  return res.json({ status: 201, data: reservations })
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

>>>>>>> 0bcdb9dbcf0ba4200613d1207429ebe91294a535
const deleteReservation = (req, res) => {

  const id = req.params.id;

  let updatedReservations = reservations.filter((reservation) => {
    if (reservation.id !== id) {
      return reservations;
    }
  })
<<<<<<< HEAD

  reservations.map((reservation) => {
    if (reservation.id === id) {
      return res.status(200).json({ status: 200, message: "Reservation successfully deleted.", data: updatedReservations });
    } else {
      return res.status(404).json({status: 404, message: "Reservation does not exist."})
    }
  })
}
=======
  res.status(200).json({ status: 200, message: "Reservation successfully deleted.", data: updatedReservations })
};
>>>>>>> 0bcdb9dbcf0ba4200613d1207429ebe91294a535

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
    
<<<<<<< HEAD
  return res.status(200).json({ status: 200, message: "Reservation successfully updated.", data: reservation })
=======
  res.status(200).json({ status: 200, message: "Reservation successfully updated.", data: reservation })
>>>>>>> 0bcdb9dbcf0ba4200613d1207429ebe91294a535

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
