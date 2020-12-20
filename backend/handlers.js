"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

// 1.get all flight numbers "/flights"
const getFlights = (req, res) => {
    const allFlights = Object.keys(flights);
    if (allFlights.length > 0) {
        res.status(200).json({ data: allFlights });
    } else {
        res.status(400).json({
            status: 400,
            message: "There are currently no flights available",
        });
    }
};

// 2.get a flight by id (seating) "/flight/:flightId"
const getFlight = (req, res) => {
    const flightId = req.params.flightId;
    const flightInfo = flights[flightId];
    if (flightInfo) {
        res.status(200).json({ data: flightInfo });
    } else {
        res.status(400).json({
            status: 400,
            message: "There are currently no details for that flight",
        });
    }
};

// 3.get all reservations from data.js "/reservations"
const getReservations = (req, res) => {
    if (reservations.length > 0) {
        res.status(200).json({ data: reservations });
    } else {
        res.status(400).json({
            status: 400,
            message: "There are currently no reservations",
        });
    }
};

// 4.add a reservation "/reservation"
const addReservations = (req, res) => {
    const newId = uuidv4();
    const { email, surname, givenName, flight, seat } = req.body;
    const reservation = { id: newId, email, surname, givenName, flight, seat };
    console.log(reservation);
    if (!email || !surname || !givenName || !flight || !seat) {
        res.status(400).send({
            status: 400,
            message: "Some data is missing",
        });
    } else {
        reservations.push(reservation);
        res.status(200).send({
            status: 200,
            data: newId,
        });
    }
};

// 5. get a single reservation from data.js /reservation/:id
const getSingleReservation = (req, res) => {
    const id = req.params.id;
    console.log(id, reservations);
    const oneReservation = reservations.find(
        (reservation) => reservation.id == id
    );
    console.log(oneReservation);
    if (oneReservation) {
        res.status(200).json({ data: oneReservation });
    } else {
        res.status(400).json({
            status: 400,
            message: "That reservation does not exist in the database",
        });
    }
};

// 6.delete a single reservation /reservationDelete/:id
const deleteReservation = (req, res) => {
    const findReservationToDelete = reservations.find((reservation) => {
        console.log(reservation.id, req.params.id);
        return reservation.id === req.params.id;
    });

    const index = reservations.indexOf(findReservationToDelete);
    reservations.splice(index, 1);

    if (findReservationToDelete) {
        res.status(200).json({
            status: 200,
            data: findReservationToDelete,
            message: "Reservation deleted",
        });
    } else {
        res.status(400).json({
            status: 400,
            message: "That reservation does not exist in the database",
        });
    }
};

// 7.update a reservation /reservationUpdate/:id
const updateReservation = (req, res) => {
    const findReservationToUpdate = reservations.findIndex((reservation) => {
        return reservation.id === req.params.id;
    });

    if (findReservationToUpdate !== -1) {
        reservations[findReservationToUpdate] = {
            ...reservations[findReservationToUpdate],
            ...req.body,
        };
        res
            .status(200)
            .json({ status: 200, data: reservations[findReservationToUpdate] });
    } else {
        res.status(400).json({
            status: 400,
            message: "That reservation does not exist in the database",
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