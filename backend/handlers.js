"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

const getFlights = (req, res) => {
  let flightsList = Object.keys(flights); 
    res.status(200).json({
      status:200,
      data: flightsList,
    });
};

const getFlight = (req, res) => {
    const flightkey = req.params.flightkey; 
    let flightsKeys = Object.keys(flights);
    const flight = flightsKeys.filter((element)=> {
      return element===flightkey; 
    }); 
    if(flight.length>0) {
      res.status(200).json({
        status:200,
        data: flights[flightkey]
      });
    } else {
      res.status(200).json({
        status: 200, 
        data: req,
        message: "Flight does not exist"
      })
    };
};

const addReservations = (req, res) => {
  const incomingReservation = req.body; 
  const id = uuidv4();
  reservations.push({id,...incomingReservation});
  let flightSeats = flights[incomingReservation.flightNumber]; 
  const flightSeatIndex= flightSeats.findIndex((element,i)=>{
    return element.id===incomingReservation.seat;
  });

  if(flightSeatIndex) { 
    const flightSeatInformation = flights[incomingReservation.flightNumber][flightSeatIndex] ;
    flights[incomingReservation.flightNumber][flightSeatIndex] = {...flightSeatInformation,isAvailable:false};
  };
  res.status(201).json({
    status:201,
    data: {id,...incomingReservation},
    message:"reservation sucessful"
  });
};

const getReservations = (req, res) => {
  res.status(200).json({
    status:200,
    data:reservations
  })
};

const getSingleReservation = (req, res) => {
  const reservationId = req.params.reservationID; 
  let reservation = reservations.find((element)=> { 
    return element.id ===reservationId; 
  });
  if(reservation) {
    res.status(200).json({
      status:200, 
      data: reservation
    })
  } else {
    res.status(404).send({
      status:404, 
      message: "reservation not found"
    })
  };
};

const deleteReservation = (req, res) => {
  const reservationId = req.params.reservationID; 
  let reservation = reservations.filter((element)=> { 
    return element.id ===reservationId; 
  });
  if(reservation.length>0) {
    let newReservations = reservations.filter((element)=>{
      return element.id !==reservationId;
    });
    res.status(200).json({
      status:200, 
      data: newReservations,
      message:"reservation deleted"
    })
  } else {
    res.status(200).json({
      status:200, 
      data: req,
      message: "reservation not found"
    })
  };
};

const updateReservation = (req, res) => {
  const reservationId = req.params.reservationID; 
  const modification = req.body;
  let reservation = reservations.filter((element)=> { 
    return element.id ===reservationId; 
  });
  if(reservation.length>0) {
    let reservationObj=reservation[0];
    let modificationKeys = Object.keys(modification); 
    modificationKeys.forEach((element)=>{
      delete reservationObj[element];
    });
    let newReservationObj = {...reservationObj,...modification };
    res.status(200).json({
      status:200, 
      data: newReservationObj,
      message:"Modification applied"
    })
  } else {
    res.status(200).json({
      status:200, 
      data: req,
      message: "reservation not found"
    })
  };
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
