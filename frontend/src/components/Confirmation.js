import React, { useEffect } from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Confirmation = ({userReservation}) => {
    return <Wrapper>{userReservation.id}</Wrapper>;
};

const Wrapper = styled.div``;

export default Confirmation;
