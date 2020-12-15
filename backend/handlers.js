"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

const getFlights = (req, res) => {
  res.status(200).json({ 
    status: 200,
    data: Object.keys(flights),
    message: "Success"
  }); 
};

const getFlight = (req, res) => {
  const flightData = flights[req.params.flightNum];
  if (flightData){    
    res.status(200).json({ 
      status: 200,
      data: flightData,
      message: "Success"
    });
  }
  else {
    res.status(404).json({ 
      status: 404,
      data: req.params.flightNum,
      message: "Flight not found" 
    });
  }
};

const addReservations = (req, res) => {
  const {    
    flight,
    seat,
    givenName,
    surname,
    email
  } = req.body;
 
  //Peut-etre vrifier si le flight and seat exist dans le flight array et est disponible... ou peut-etre voir si toutes ces valid sont fait frontend]
  const alreadyTaken = reservations.some((reservation)=>(reservation.flight === flight && reservation.seat === seat));
  const incomplete = !flight || !seat || !givenName || !surname || !email;  

  if (alreadyTaken) {
    res.status(400).json({ 
      status: 400,
      data: req.body,
      message: "Flight and seat already taken"
    });
  }
  else if (incomplete) {
     res.status(400).json({ 
      status: 400,
      data: req.body,
      message: "Incomplete information"
    });
  } 
  else{
    const newReservation = {id: uuidv4(), ...req.body};   
    reservations.push(newReservation);
    flights[flight].forEach((flightSeat, index) => {
        if (flightSeat.id === seat)
          flights[flight][index] = { id: seat, isAvailable: false };
    });
    res.status(201).json({ 
      status: 201,
      data: newReservation,
      message: "Reservation added"
    }); 
  } 

};

const getReservations = (req, res) => {
  res.status(200).json({ 
    status: 200,
    data: reservations,
    message: "Success"
  });

};

const getSingleReservation = (req, res) => {
   const theReservation = reservations.find((reservation)=>(reservation.id === req.params.id));
   if (theReservation)
    res.status(200).json({ 
      status: 200,
      data: theReservation,
      message: "Success"
    }); 
  else
    res.status(404).json({ 
      status: 404,
      data: req.params.id,
      message: "Reservation not found" 
    });
};

const deleteReservation = (req, res) => {
  const { 
    flight,
    seat   
  } = req.body; 
  
  const reservationIndex = reservations.findIndex((reservation)=>(reservation.id === req.params.id));
   
   if (reservationIndex !== -1){
    reservations.splice(reservationIndex, 1);
    flights[flight].forEach((flightSeat, index) => {
      if (flightSeat.id === seat)
        flights[flight][index] = { id: seat, isAvailable: true };
    });
    res.status(200).json({ 
      status: 200,
      data: {},
      message: "Reservation deleted"
    }); 
  }
  else
    res.status(404).json({ 
      status: 404,
      data: req.params.id,
      message: "Reservation not found" 
    });
};

const updateReservation = (req, res) => {
  const { 
    flight,
    seat,
    givenName,
    surname,
    email
  } = req.body; 
  
  const reservationIndex = reservations.findIndex((reservation)=>(reservation.id === req.params.id));
  const incomplete = !flight || !seat || !givenName || !surname || !email;   
  
  
  if (reservationIndex === -1) {
    res.status(400).json({ 
      status: 400,
      data: req.body,
      message: "Reservation not found"
    });
  }  
  else if (incomplete) {
     res.status(400).json({ 
      status: 400,
      data: req.body,
      message: "Incomplete information"
    });
  } 
  else{
    const newReservation = { id: req.params.id, ...req.body };   
    reservations[reservationIndex] = newReservation;
    flights[flight].forEach((flightSeat, index) => {
      if (flightSeat.id === seat)
        flights[flight][index] = { id: seat, isAvailable: false };
    });
    res.status(200).json({ 
      status: 200,
      data: newReservation,
      message: "Reservation modified"
    }); 
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
