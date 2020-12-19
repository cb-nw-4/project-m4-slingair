"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

const getFlights = (req, res) => {
  const allFlights = Object.keys(flights);
  //console.log(allFlights)
  res.status(200).json({ status: 200, message: "Sucess, flights retrieved", data: allFlights })
};

const getFlight = (req, res) => {
  const id = req.params.id;
  //console.log(id)
  if(flights[id]){
    res.status(200).json({ status: 200, message: "Success, flight retrieved.", data: flights[id] })
  } else {
    res.status(404).json({ status: 404, message: "Error, flight not found.", data: id })
  }
};

const addReservations = (req, res) => {
  const newReservation = req.body;
  const newId = uuidv4();
  //console.log(newId)
  newReservation.id = newId;
  //console.log(newReservation);
  reservations.push(newReservation)
  // To change seat to unavailable after it has been reserved:
  const flightSeatIndex = flights[newReservation.flight].findIndex((seat) => { 
    return seat.id === newReservation.seat
  })
  const reservedSeat = flights[newReservation.flight][flightSeatIndex]
  //console.log(reservedSeat)
  reservedSeat.isAvailable = false;
  //flights[newReservation.flight][flightSeatIndex] = {...reservedSeat, isAvailable: false}
  //console.log(newReservation.email)

  if(!newReservation.email || !newReservation.givenName || !newReservation.surname || !newReservation.flight) {
    res.status(400).json({ status: 400, message: "Error, missing data"})
  } else {
  res.status(201).json({ status: 201, message: "Reservation added", data: newReservation })}
};

const getReservations = (req, res) => {
  //console.log(reservations);
  res.status(200).json({ status: 200, message: "Success, reservations retrieved.", data: reservations})
};

const getSingleReservation = (req, res) => {
  const id = req.params.id;
  const reservation = reservations.find((item) => item.id === id)
  if (reservation) {
    res.status(200).json({ status: 200, message: "Success, reservation retrieved.", data: reservation})
  } else {
    res.status(404).json({ status: 404, message: "Error, reservation not found.", data: id})
  }
};

const deleteReservation = (req, res) => {
  const id = req.params.id;

  // Change seat back to unavailable once reservation has been deleted:
  const result = reservations.find((item) => item.id === id);
  //console.log(result);
  const flightSeatIndex = flights[result.flight].findIndex((seat) => seat.id === result.seat)
  const reservedSeat = flights[result.flight][flightSeatIndex]
  reservedSeat.isAvailable = true;

  // Remove reservation from admin array:
  const findIndex = reservations.findIndex((item) => item.id === id)
  console.log(findIndex)
  // const updatedReservations = reservations.filter((item) => item != result)
  // //console.log(updatedReservations)

  if(findIndex != -1) { 
    reservations.splice(findIndex, 1);
    res.status(200).json({ status: 200, message: "Success, reservation deleted." })
  } else {
    res.status(404).json({ status: 404, message: "Error, reservation not found.", data: id })
  }
};

const updateReservation = (req, res) => {
  const id = req.params.id;
  const reservation = reservations.find((item) => item.id === id)
  const index = reservations.indexOf(reservation);
  //console.log("index"+ index)
  const body = req.body;
  delete body.id;
  //console.log(req.body.seat)
  //console.log(reservations)
  //Not able to update to a reserved seat:
  const seatTaken = reservations.find((item) => item.seat === req.body.seat)
  console.log(seatTaken)

  if(reservation && !seatTaken){
    const updatedAccount = {... reservation,...body };
    //console.log(updatedAccount)
    reservations[index] = updatedAccount;
    res.status(200).json({ status: 200, message: "Success, reservation updated.", data: updatedAccount });
  } else if(seatTaken){
    res.status(404).json({ status: 400, message: "Error, seat has been reserved.", data: req.body.seat })
  } else {
    res.status(404).json({ status: 404, message: "Error, reservation not found.", data: id })
  }

  
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
