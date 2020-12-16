"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

/*************** */
/* getFlights() */ 
/*************** */
const getFlights = (req, res) => {
  res.status(202).json({
    status:202,
    data: {...flights}
  });
};

/*************** */
/* getFlight()   */ 
/*************** */
const getFlight = (req, res) => {
  let flightNum = Object.keys(flights).filter((num)=>num == req.params.id);
  if(flightNum.length == 0){
    res.status(400).json({
      status:400,
      message: "Error: this flight number is not valid."
    });
  }else{
    let flightData = flights[req.params.id];
    res.status(202).json({
      status:202,
      data: flightData
    });
  }
};

/********************* */
/* addReservations()   */ 
/********************* */
const addReservations = (req, res) => {
  if(!(req.body.flight in flights)){
    res.status(400).json({
      status: 400, 
      message: "Error: missing valid flight number."});
      return;
  }

  let seat = flights[req.body.flight].filter((element)=> element.id==req.body.seat);
  if(seat.length == 0 ){
    res.status(400).json({
      status: 400,
      message: "Error: missing valid seat number."});
      return;
  }

  if(!seat[0].isAvailable){
    res.status(400).json({
      status: 400,
      message: "Error: seat is not available."});
      return;
  }

  if(!("givenName" in req.body) || req.body.givenName.length ==0 ){
    res.status(400).json({
      status: 400,
      message: "Error: missing first name."});
      return;
  }

  if(!("surname" in req.body) || req.body.surname.length ==0 ){
    res.status(400).json({
      status: 400,
      message: "Error: missing surname."});
      return;
  }

  if(!("email" in req.body) || req.body.email.length ==0 ){
    res.status(400).json({
      status: 400,
      message: "Error: missing email."});
      return;
  }

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!re.test(req.body.email)){
    res.status(400).json({
      status: 400,
      message: "Error: wrong email format."});
      return;
  }

  let randomID = {id: uuidv4()};
  let newReservation = {...randomID, ...req.body};
  reservations.push(newReservation);
  seat[0].isAvailable = false;

  res.status(201).json({
    status:201,
    message: "Reservation successful!",
    data: randomID
  });
};

/********************* */
/* getReservations()   */ 
/********************* */
const getReservations = (req, res) => {
  res.status(202).json({
    status:202,
    data: reservations
  });
};

/********************* */
/* getSingleReservation()*/ 
/********************* */
const getSingleReservation = (req, res) => {
  let reservationData = reservations.filter((reservation)=>reservation.id == req.params.id);
  if(reservationData.length==0){
    res.status(400).json({
      status:400,
      message: "Error: this reservation number is not valid."
    });
  }else{
    res.status(202).json({
      status:202,
      data: reservationData[0]
    });
  }

};

/********************* */
/* deleteReservation()*/ 
/********************* */
const deleteReservation = (req, res) => {
  let reservationData = reservations.filter((reservation)=>reservation.id == req.params.id);
  if(reservationData.length==0){
    res.status(400).json({
      status:400,
      message: "Error: this reservation number is not valid."
    });
  }else{

    reservations.forEach((reservation,index)=>{
      if(reservation.id == req.params.id){
        reservations.splice(index,1);
      }
    });

    res.status(202).json({
      status:202,
      message: "hehe"
    });
  }
};

/********************* */
/* updateReservation()*/ 
/********************* */
const updateReservation = (req, res) => {
  let reservationData = reservations.filter((reservation)=>reservation.id == req.params.id);
  if(reservationData.length==0){
    res.status(400).json({
      status:400,
      message: "Error: this reservation number is not valid."
    });
  }else{
    res.status(202).json({
      status:202,
      message: "hehe"
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
