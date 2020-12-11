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
  .get('/flights', async (req, res) => {
    try {
      const response = await getFlights();

      res.status(200).json({ status: 200, result: 'ok', data: response.data});
    } catch (err) {
      res.status(200).json({ status: 200, result: 'error', data: err.data, message: err.message});
    }
  })

  // Get seating for specfic flight
  .get('/flights/:id', async (req, res) => {
    if (req.params.id !== 'null') {
      try {
        const response = await getFlight(req.params.id);

        res.status(200).json({ status: 200, result: 'ok', data: response.data });
      } catch (err) {
        res.status(200).json({ status: 200, result: 'error', data: err.data, message: err.message });
      }
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
