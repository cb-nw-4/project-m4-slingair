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

const addReservations = (req, res) => {
  let reservation=req.body.formData;
  let flight=req.body.flightNumber;
  reservation.id=uuidv4();
  reservation.flight=flight;
  console.log(reservation);
  //console.log(flight);
  flights[flight].forEach(el => {
    if(el.id===reservation.seat){
      return el.isAvailable=false;
    }
  });
  reservations.push(reservation);
  //console.log(reservations);
  res.status(201).json({status:201, data:reservation});
};

const getReservations = (req, res) => {
  console.log(reservations);
  res.status(200).json({status:200, data:reservations})
};

const getSingleReservation = (req, res) => {
  
  let reservation=reservations.find(reservation=>reservation.id===req.params.id);
  res.status(200).json({
    status:200,
    data:reservation})
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
