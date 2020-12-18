"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

// Get flights
const getFlights = (req, res) => {
  return new Promise((resolve, reject) => {
    resolve({ data: Object.keys(flights) });
    // reject({ data: 'n/a', message: 'Flight data not available.'});
  });
}

// Get seating for specfic flight
const getFlight = (req, res) => {
  return new Promise((resolve, reject) => {
    // Make sure flight number exists
    if (flights.hasOwnProperty(req)) {
      resolve({ data: flights[req] });
    } else {
      reject({ data: req, message: 'Flight does not exist' });
    }
  });
}

// Create a new reservation
const addReservations = (req, res) => {
  return new Promise((resolve, reject) => {
    // Make sure flight number exists
    if (!flights.hasOwnProperty(req.flightNumber)) {
      reject({ data: req, message: 'Flight does not exist' });
      return;
    }

    // make sure seat is still available
    const seatObj = flights[req.flightNumber].find(seat => seat.id === req.formData.seat);
      
    if (!seatObj.isAvailable) {
      reject({ data: req, message: 'Seat not available' });
      return;
    }

    // Add the reservation
    const newReservation = {
      id: uuidv4(),
      flight: req.flightNumber,
      seat: req.formData.seat,
      givenName: req.formData.givenName,
      surname: req.formData.surname,
      email: req.formData.email
    };

    // Set the seat to unavailable
    flights[req.flightNumber] = flights[req.flightNumber].map(obj => {
      if (obj.id === req.formData.seat) {
        return { id: req.formData.seat, isAvailable: false };
      } else {
        return obj;
      }
    });

    reservations.push(newReservation);
    resolve({ data: newReservation, message: 'Reservation created' });
  });
};

// Get all reservations
const getReservations = (req, res) => {
  return new Promise((resolve, reject) => {
    resolve({ data: reservations });
    // reject({ data: 'n/a', message: 'Reservation data not available' });
  });
};

// Get a specific reservation
const getSingleReservation = (req, res) => {
  return new Promise((resolve, reject) => {
    const reservation = reservations.find(res => res.id === req)

    if (typeof(reservation) !== 'undefined') {
      resolve({ data: reservation });
    } else {
      reject({ data: req, message: 'Reservation not found' });
    }
  });
};

// Delete a reservation.  
const deleteReservation = (req, res) => {
  return new Promise((resolve, reject) => {
    const index = reservations.findIndex(res => res.id === req)

    if (index !== -1) {
      reservations.splice(index, 1);
      resolve({ data: 'n/a', message: 'Reservation deleted' });
    } else {
      reject({ data: req, message: 'Reservation not found' });
    }
  })
};

// Update a reservation
const updateReservation = (req, res) => {
  return new Promise((resolve, reject) => {
    // Make sure the reservation exists
    const index = reservations.findIndex(res => res.id === req.params.id)

    if (index === -1) {
      reject({ data: {...req.body, ...req.params}, message: 'Reservation not found' });
      return;
    }

    const oldFlight = reservations[index].flight;
    const oldSeat = reservations[index].seat;

    // Make sure new flight number exists
    if (!flights.hasOwnProperty(req.body.flight)) {
      reject({ data: {...req.body, ...req.params}, message: 'Flight does not exist' });
      return;
    }

    // Make sure new seat is available
    const seatObj = flights[req.body.flight].find(seat => seat.id === req.body.formData.seat);
      
    if (!seatObj.isAvailable) {
      reject({ data: {...req.body, ...req.params}, message: 'Seat not available' });
      return;
    }

    const updatedReservation = {
      id: req.params.id,
      flight: req.body.flight,
      seat: req.body.formData.seat,
      givenName: req.body.formData.givenName,
      surname: req.body.formData.surname,
      email: req.body.formData.email
    };

    // Set the new seat to unavailable
    flights[req.body.flight] = flights[req.body.flight].map(obj => {
      if (obj.id === req.body.formData.seat) {
        return { id: req.body.formData.seat, isAvailable: false };
      } else {
        return obj;
      }
    });

    // Set the old seat to available
    flights[oldFlight] = flights[oldFlight].map(obj => {
      if (obj.id === oldSeat) {
        return { id: oldSeat, isAvailable: true };
      } else {
        return obj;
      }
    });

    reservations.splice(index, 1, updatedReservation);
    resolve({ data: {...updatedReservation, id: req.params.id}, message: 'Reservation updated' });
  });
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
