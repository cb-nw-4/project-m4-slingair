"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
let { flights, reservations } = require("./data");

const getFlights = (req, res) => {
  res
    .status(200)
    .json({ status: 200, message: "Success", data: Object.keys(flights) });
};

const getFlight = (req, res) => {
  const flightId = req.params.id;
  res
    .status(200)
    .json({ status: 200, message: "Success", data: flights[flightId] });
};

const addReservations = (req, res) => {
  try {
    const reservationId = uuidv4();
    const body = req.body;
    console.log(body);

    res.status(201).json({
      status: 201,
      message: "New Reservation confirmed",
      data: { ...body, id: reservationId },
    });
  } catch {
    res.status(400).json({
      status: 400,
      message: "Unsuccesfull reservation. Try again",
    });
  }
};

const getReservations = async (req, res) => {
 try {
 const clientReservation =  await reservations;
res.status(200).json({ status: 200, message: "Success", data: clientReservation });
 }
 catch {
   res.status(400).json({status: 200, message: "Error 404"})
 }
}

const getSingleReservation = (req, res) => {
  const id = req.params.id;
  const filteredId = reservations.find((data) => {
    return data.id === id;
  });

  return res
    .status(200)
    .json({ status: 200, message: "Success", data: filteredId });
};

const allReservations = (req, res) => {

  res.status(200).json({ status: 200, message: "Success", data: reservations });
};



const deleteReservation = (req, res) => {
  const reservation = reservations.filter((reserv) => reserv.id != req.params.id);
  if (!reservation) {
    res.status(204).json({ status: 204, message: "Reservation not found"});
  } else {
    res.status(200).json({ status: 200, data: {reservation}, message: "Reservation deleted"});
  }

};

const updateReservation = (req, res) => {
  let reservationId = req.params.id;
  let selectedReservation = reservations.filter((reservation) => reservationId === reservation.id);

  selectedReservation = {
    id: uuidv4(),
    flight: req.body.flight,
    seat: req.body.seat,
    givenName: req.body.givenName,
    surname: req.body.surname,
    email: req.body.email,
  }

  res.status(200).json({
    status: 200,
    message: "Reservation has been updated.",
    data: selectedReservation,
  })
};




module.exports = {
  getFlights,
  getFlight,
  getReservations,
  addReservations,
  getSingleReservation,
  allReservations,
  deleteReservation,
  updateReservation,
};
