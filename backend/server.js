"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const {
  getFlights,
  getFlight,
  getReservations,
  addReservations,
  getSingleReservation,
  deleteReservation,
  updateReservation
} = require('./handlers');
const { response } = require("express");

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(bodyParser.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // Nothing to modify above this line
  // ---------------------------------
  // add new endpoints here 👇

  // Get flights
  .get('/v1/flights', async (req, res) => {
    try {
      const response = await getFlights();

      res.status(200).json({ status: 200, result: 'ok', data: response.data});
    } catch (err) {
      res.status(200).json({ status: 200, result: 'error', data: err.data, message: err.message});
    }
  })

  // Get seating for specfic flight
  .get('/v1/flights/:id', async (req, res) => {
    try {
      const response = await getFlight(req.params.id);

      res.status(200).json({ status: 200, result: 'ok', data: response.data });
    } catch (err) {
      res.status(200).json({ status: 200, result: 'error', data: err.data, message: err.message });
    }
  })

  // Create a new reservation
  .post('/v1/reservations', async (req, res) => {
    try {
      const response = await addReservations(req.body);
  
      res.status(201).json({ status: 201, result: 'ok', data: response.data, message: response.message });
    } catch (err) {
      res.status(200).json({ status: 200, result: 'error', data: err.data, message: err.message });
    }
  })

  // Get all reservations
  .get('/v1/reservations/', async (req, res) => {
    try {
      const response = await getReservations(req.params.id);

      res.status(200).json({ status: 200, result: 'ok', data: response.data });
    } catch (err) {
      res.status(200).json({ status: 200, result: 'error', data: err.data, message: err.message });
    }
  })

  // Get a specific reservation
  .get('/v1/reservations/:id', async (req, res) => {
    try {
      const response = await getSingleReservation(req.params.id);

      res.status(200).json({ status: 200, result: 'ok', data: response.data });
    } catch (err) {
      res.status(200).json({ status: 200, result: 'error', data: err.data, message: err.message });
    }
  })

  // Delete a specific reservation
  .delete('/v1/reservations/:id', async (req, res) => {
    try {
      const response = await deleteReservation(req.params.id);

      res.status(200).json({ status: 200, result: 'ok', message: response.message });
    } catch (err) {
      res.status(200).json({ status: 200, result: 'error', data: err.data, message: err.message });
    }
  })

  // Update a specific reservation
  .put('/v1/reservations/:id', async (req, res) => {
    try {
      const response = await updateReservation(req);
  
      res.status(200).json({ status: 200, result: 'ok', data: response.data, message: response.message });
    } catch (err) {
      res.status(200).json({ status: 200, result: 'error', data: err.data, message: err.message });
    }
  })

  // add new endpoints here ☝️
  // ---------------------------------
  // Nothing to modify below this line

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
