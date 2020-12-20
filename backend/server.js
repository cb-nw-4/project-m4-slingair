"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const handlers = require("./handlers");
// Below are methods that are included in express(). We chain them for convenience.
// --------------------------------------------------------------------------------

// This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
app.use(morgan("tiny")).use(bodyParser.json());

// Any requests for static files will go into the public folder
app.use(express.static("public"));

// Nothing to modify above this line
// ---------------------------------
// add new endpoints here 👇

app.get("/flights", handlers.getFlights);
app.get("/flight/:flightId", handlers.getFlight);
app.get("/reservations", handlers.getReservations);
app.post("/reservation", handlers.addReservations);
app.get("/reservation/:id", handlers.getSingleReservation);
app.delete("/reservationDelete/:id", handlers.deleteReservation);
app.put("/reservationUpdate/:id", handlers.updateReservation);

// add new endpoints here ☝️
// ---------------------------------
// Nothing to modify below this line

// this is our catch all endpoint.
app
    .get("*", (req, res) => {
        res.status(404).json({
            status: 404,
            message: "This is obviously not what you are looking for.",
        });
    })

// Node spins up our server and sets it to listen on port 8000.
.listen(8000, () => console.log(`Listening on port 8000`));