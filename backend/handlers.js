"use strict";

const { v4: uuidv4 } = require("uuid");
const { flights, reservations } = require("./data");

const request = require('request-promise');

// const getFlights = (req, res) => {
//   const flightsArr = Object.keys(flights);
//   if (flightsArr.length > 0) {
//     res.status(200).json({ status: 200, data: flightsArr });
//   }
//   else {
//     res.status(404).json({ status: 404, message: 'No flight available.' });
//   }
// }

const getFlights = (req, res) => {
  return request('https://journeyedu.herokuapp.com/slingair/flights')
    .then((response) => {
      const parsedResponse = JSON.parse(response);
      return parsedResponse;
    })
    .then((parsedResponse) => {
      res.status(200).json(parsedResponse);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ status: 404, message: 'No flight available.' });
    })
}

// const getFlight = (req, res) => {
//   const flightNum = req.params.num.toUpperCase();
//   const seatingInfo = flights[flightNum];
//   if (seatingInfo) {
//     res.status(200).json({ status: 200, data: seatingInfo });
//   }
//   else {
//     res.status(404).json({ status: 404, message: 'Seating info not available.' });
//   }
// }

const getFlight = (req, res) => {
  return request(`https://journeyedu.herokuapp.com/slingair/flights/${req.params.num}`)
  .then((response) => {
    const parsedResponse = JSON.parse(response);
    return parsedResponse;
  })
  .then((parsedResponse) => {
    res.status(200).json(parsedResponse);
  })
  .catch((err) => {
    console.log(err);
    res.status(404).json({ status: 404, message: 'Seating info not available.' });
  })
}

const addReservations = (req, res) => {
  try {
    const reservationId = uuidv4();
    const reservationObj = req.body;
    const reservationObjWithId = {id: reservationId, ...reservationObj};
    reservations.push(reservationObjWithId);
    res.status(201).json({ status: 201, data: reservationObjWithId });
  } catch (err) {
    res.status(400).json({ status: 400, data: reservationObj });
  }
}

// const addReservations = (req, res) => {
//   const options1 = {
//     method: 'POST',
//     uri: 'https://journeyedu.herokuapp.com/slingair/users'
//   }

//   return request(options1.uri)
//   .then((response) => {
//     const parsedResponse = JSON.parse(response);
//     return parsedResponse;
//   })
//   .then((parsedResponse) => {
//     const reservationId = uuidv4();
//     const reservationObj = req.body;
//     const reservationObjWithId = {id: reservationId, ...reservationObj};
//     parsedResponse.push(reservationObjWithId);
//     res.status(201).json({ status: 201, data: reservationObjWithId});
//   })
//   .catch((err) => {
//     console.log(err);
//     res.status(400).json({ status: 400, data: req.body });
//   })
// }

// const getReservations = (req, res) => {
//   if (reservations.length > 0) {
//     res.status(200).json({ status: 200, data: reservations });
//   }
//   else {
//     res.status(404).json({ status: 404, message: 'No reservation found.' });
//   }
// }

const getReservations = (req, res) => {
  return request('https://journeyedu.herokuapp.com/slingair/users?limit=20')
    .then((response) => {
      const parsedResponse = JSON.parse(response);
      return parsedResponse;
    })
    .then((parsedResponse) => {
      res.status(200).json({ status: 200, data: parsedResponse });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ status: 404, message: 'No reservation found.' });
    })
}

const getSingleReservation = (req, res) => {
  const reservationId = req.params.id;
  const findReservation = reservations.find((reservation) => {
    return reservationId === reservation.id;
  })
  if (findReservation) {
    res.status(200).json({ status: 200, data: findReservation });
  }
  else {
    res.status(404).json({ status: 404, message: 'No reservation found.' });
  }
}

// const getSingleReservation = (req, res) => {
//   return request(`https://journeyedu.herokuapp.com/slingair/users/${req.params.id}`)
//     .then((response) => {
//       const parsedResponse = JSON.parse(response);
//       return parsedResponse;
//     })
//     .then((parsedResponse) => {
//       res.status(200).json(parsedResponse);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(404).json({ status: 404, message: 'No reservation found.' });
//     })
// }

const deleteReservation = (req, res) => {
  const reservationId = req.params.id;
  const findReservation = reservations.find((reservation) => {
    return reservationId === reservation.id;
  })
  if (findReservation) {
    const index = reservations.indexOf(findReservation);
    reservations.splice(index, 1);
    res.status(200).json({ status: 200, message: 'Reservation deleted.' });
  }
  else {
    res.status(404).json({ status: 404, message: 'This reservation does not exist. Request cannot be completed.' })
  }
}

// const deleteReservation = async (req, res) => {
//   try {
//     const options2 = {
//       method: 'DELETE',
//       uri: `https://journeyedu.herokuapp.com/slingair/users/${req.params.id}`
//     }
//     const getAllReservations = await request('https://journeyedu.herokuapp.com/slingair/users?limit=1000');
//     const parsedAllReservations = JSON.parse(getAllReservations);
//     const getSpecificReservation = await request(options2.uri);
//     const parsedSpecificReservation = JSON.parse(getSpecificReservation);
//     const index = parsedAllReservations.indexOf(parsedSpecificReservation.data);
//     parsedAllReservations.splice(index, 1);
//     res.status(200).json({ status: 200, message: 'Reservation deleted.' });
//   } catch (err) {
//     console.log(err);
//     res.status(404).json({ status: 404, message: 'This reservation does not exist. Request cannot be completed.' });
//   }
// }

const updateReservation = (req, res) => {
  const reservationId = req.params.id;
  const update = req.body;
  const findReservation = reservations.find((reservation) => {
    return reservationId === reservation.id;
  })
  if (!findReservation) {
    res.status(404).json({ status: 404, message: 'This reservation does not exist. Request cannot be completed.' });
  }
  else if (findReservation 
    && findReservation.givenName === update.givenName 
    && findReservation.surname === update.surname 
    && findReservation.email === update.email
    && ((findReservation.flight !== update.flight && findReservation.seat === update.seat) || (findReservation.flight !== update.flight && findReservation.seat !== update.seat))) {
    const index = reservations.indexOf(findReservation);
    const updatedReservation = {...findReservation, flight: update.flight, seat: update.seat};
    reservations.splice(index, 1, updatedReservation);
    res.status(200).json({ status: 200, data: updatedReservation });
  }
  else {
    res.status(400).json({ status: 400, message: 'This request cannot be completed. Please contact our customer support team for assistance.' });
  }
}

module.exports = {
  getFlights,
  getFlight,
  getReservations,
  addReservations,
  getSingleReservation,
  deleteReservation,
  updateReservation,
};
