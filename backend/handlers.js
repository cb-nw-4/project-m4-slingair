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
  console.log(req.params);
  let flight=req.params.flightid;
  console.log(flight);
  let seats=flights[flight];
  //console.log(seats);
  if(seats){
    res.status(200).json({status:200, data:seats})
  }
  else{
    res.status(404).json({status:404, data:flight, message:"seats not found"})
  }
};

const addReservations = (req, res) => {
  let reservation=req.body.formData;
  console.log(req.body);
  if(reservation){
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
    res.status(201).json({status:201, data:reservation, message:"Reservation created"});
  }
  else{
    res.status(400).json({status:400, message:"Reservation is not created. Please try again."});
  }
  
};

const getReservations = (req, res) => {
  res.status(200).json({status:200, data:reservations})
};

const getSingleReservation = (req, res) => {
  let reservation=reservations.find(reservation=>reservation.id===req.params.id);
  if(reservation){
    res.status(200).json({
    status:200,
    data:reservation})
  }
  else{
    res.status(404).json({status:404, message:"Reservation not found."})
  }
};


const deleteReservation = (req, res) => {
  const resID=req.params.id;
  const resToDelete=reservations.find(el=>el.id===resID);
  if(resToDelete){
    const index=reservations.indexOf(resToDelete);
    reservations.splice(index,1)
    res.status(200).json({status:200, message:`Reservation with ID ${resID} is deleted.`, data:resToDelete})
  }
  else{
    res.status(404).json({status:404, message:"Reservation not found.", data:resToDelete})
  }
};

const updateReservation = (req, res) => {
  let resID=req.params.id;
  let resBody=req.body.reservation
  let oldReservation=reservations.find(el=>el.id===resID)
  if(resBody&&
    resBody.givenName === oldReservation.givenName &&
    resBody.surname === oldReservation.surname &&
    resBody.email === oldReservation.email &&
    resBody.flight === oldReservation.flight){
      const index=reservations.indexOf(oldReservation);
      const updatedRes={...oldReservation, seat:resBody.seat}
      reservations[index]=updatedRes;
      res.status(200).json({status:200, message:"Reservation updated. Please check on your portal with your reservation ID.", data:updatedRes})
  }
  else{
    res.status(400).json({status:400, message:"Reservation is not updated due to request error. Please contact our support staff or try again later.", data:resBody})
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
