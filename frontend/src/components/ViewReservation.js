import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ViewReservation = ({ userReservation }) => {
  const { email, flight, givenName, surname, id, seat } = userReservation;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <>
        <Wrapper>
          <h1>View Your Reservation</h1>
          <P>{`Your ID #: ${id}`}</P>
          <P>{`First Name: ${givenName}`}</P>
          <P>{`Last Name: ${surname}`}</P>
          <P>{`Flight #: ${flight}`}</P>
          <P>{`Seat #: ${seat}`}</P>
          <P>{`Email Address: ${email}`}</P>
        </Wrapper>
      </>
    </animated.div>
  );
};

const Wrapper = styled.div`
  padding: 1rem;
  width: 50%;
  /* height: 0px; */
  margin: 25%;
  border-radius: 50px;
  background: #f3b853;
  box-shadow: -20px 20px 60px #cf9c47, 20px -20px 60px #ffd45f;
`;

const P = styled.p`
  margin: 2rem;
`;

export default ViewReservation;
