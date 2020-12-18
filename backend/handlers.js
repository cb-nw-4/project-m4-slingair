"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

const getFlights = (req, res) => {

  res.status(200).json({
    status: 200,
    data: Object.keys(flights),
    message:'All flights are here'
  })

};

const getFlight = (req, res) => {

  let idFlight = req.params.id

  const flightName = Object.keys(flights).find(f => f == idFlight);

  if(flightName){
    res.status(200).json({
    status: 200,
    data: flights[flightName],
    message:'flight is here'
  })
  }else{
    res.status(404).json({
      status: 404,
      message:  "error can't select this flight number"
  })
}
};

const addReservations = (req, res) => {
  
  const newReservation ={
    id: uuidv4(),
    flight: req.body.flight,
    seat: req.body.seat,
    givenName: req.body.givenName,
    surname: req.body.surname,
    email: req.body.email,
  }

  //IsValid only unique email Address for the same flight Number
  //The same Email Can be use for different flights

  const isValid = reservations.filter(reservation => (reservation.email === newReservation.email && reservation.flight === newReservation.flight))


  if(isValid.length === 0){
    reservations.push(newReservation);
    res.status(200).json({
      status: 200,
      data: newReservation,
      message:'New reservation is added to database'
    })
  } else{
    res.status(404).json({
      status: 404,
      message:  "this reservation is already  in data base"
  })
  }

};

const getReservations = (req, res) => {
  res.status(200).json({
    status: 200,
    data: reservations,
    message:'All reservations are here'
  })
};

const getSingleReservation = (req, res) => {

  const reservationId = req.params.id;

  const reservation = reservations.find( reser => reser.id == reservationId);
  
  if(reservation){
    res.status(200).json({
    status: 200,
    data: reservation,
    message:'All reservations are here'
  })
  } else{
    res.status(404).json({
      status: 404,
      message:  "error can't select this reservation number"
  })
  }
};

const deleteReservation = (req, res) => {

  const reservationId = req.params.id;

  const reservation = reservations.find( reser => reser.id == reservationId);
  
  if(!reservation){

    res.status(404).json({
      status: 404,
      message:  "error can't select this reservation number"
  })

} else{
  const index = reservations.indexOf(reservation);

  reservations.splice(index, 1);
  res.status(200).json({
  status: 200,
  data: reservations,
  message:'Reservation is deleted from the data Base'
})

  }
};

const updateReservation = (req, res) => {

  const reservationId = req.params.id;

  const updateObj ={
    flight: req.body.flight,
    seat: req.body.seat,
    givenName: req.body.givenName,
    surname: req.body.surname,
    email: req.body.email,
  }

  let reservation = reservations.find( reser => reser.id == reservationId);

  let entrieObj = Object.entries(updateObj);
  
  
  if(!reservation){

    res.status(404).json({
      status: 404,
      message:  "error can't select this reservation number"
  })

  } else{

    entrieObj.map(obj =>{
      if(obj[1]){
        reservation[obj[0]] = obj[1]
      }
    })

    res.status(200).json({
    status: 200,
    data: reservation,
    message:'Reservation is updated in the data Base'
  })
    
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
