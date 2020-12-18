"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

const getFlights = (req, res) => {
  res.status(200).json({ status: 200, flights: Object.keys(flights) });
};

const getFlight = (req, res) => {
  const seats = flights[req.params.id]
  res.status(200).json({ status: 200, data: seats})
};

const addReservations = (req, res) => {
  let newAccount = req.body;
  // console.log(newAccount, 'incoming new account');

  const {email, givenName, surname, seat, flight} = req.body
  const reservation = {email, givenName, surname, seat, flight};
  // console.log(reservations, 'test2');


//TO CHANGE
  //CHECK FOR EMPTY VALUE
  const objectValues = Object.values(reservation);
  let isValueEmpty = objectValues.some((value) => !value);
  // console.log(objectValues, 'values');
  // console.log(isValueEmpty, 'test');
  if (isValueEmpty){
    const currentStatus = 404;
    const errorId = "missing data";
    res.status(currentStatus).json({ status: currentStatus, error: errorId });
  } else {
    const currentStatus = 201;
    const reservationId = uuidv4();
    flights[flight].forEach((seatNum, index) => {
      if(seatNum.id == seat){
        flights[flight][index].isAvailable = false;
      }
    })
    newAccount = {...newAccount, id: reservationId};

    // if(objectValues.some((value) => value == seat)){
    //   res.status(404).json({ status: 404, error: 'seat unavailable'})
    // } 
      reservations.push(newAccount);
      res.status(currentStatus).json({ status: currentStatus, data: {...reservation, id: reservationId} });
      console.log(reservations, 'reservations handlers.js line 39ish');
  }
};

const getReservations = (req, res) => {
  res.status(200).json({ status: currentStatus, reservations: reservations});
};

const getSingleReservation = (req, res) => {
  const reservationId = req.params.id;
  console.log(reservationId)
  if (reservations.some((reservation) => {
    console.log(reservation.id, reservationId);
    return reservation.id === reservationId
  })){
    const reservationInfo = reservations.filter((reservation) => reservation.id === reservationId)
    res.status(200).json({ status: 200, data: reservationInfo});
    console.log("success")
  } else {
    res.status(404).json({ status: 404, error: 'id not found'});
  }
};

const deleteReservation = (req, res) => {
  const reservationId = req.params.id;

  if (reservations.some((reservation) => reservation.id === reservationId)){
    const newReservations = reservations.filter((reservation) => reservation.id !== reservationId)
    res.status(200).json({ status: 200, data: newReservations});
  } else {
    res.status(404).json({ status: 404, error: 'id not found'});
  }
};

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
