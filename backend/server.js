"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const { 
  getFlights,
  getFlight,
  addReservations,
  getSingleReservation,
  deleteReservation,
  updateReservation,
} = require('./handlers.js');

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(bodyParser.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // Nothing to modify above this line
  // ---------------------------------
  // add new endpoints here 👇

  // get flights (flight numbers) > getFlights
  .get(('/flights'),  getFlights)

  // take flight number selected from FE and return seat selection in BE
  .get(('/flight/:id'),  getFlight)

  // POST request for handleSubmit function for Confirm button
  .post(('/confirm'), addReservations)

  // use reservation id to update reservation
  .get(('/getReservation/:reservationId'), getSingleReservation)

  // get reservation info for reservation page
  .get(('/reservation/:reservationId'), getSingleReservation)

  // delete reservation endpoint
  .delete(('/reservation/:reservationId'), deleteReservation)

  // update reservation endpoint
  .patch(('/profile/:reservationId'), updateReservation )
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
