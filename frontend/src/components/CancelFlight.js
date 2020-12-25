import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";

const CancelFlight = ({ message }) => {
    return (
        <BigWrapper>
        <Wrapper>
            <CancelMessage>{message}</CancelMessage>
        </Wrapper>
        </BigWrapper>
    );
}

const BigWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 500px;
    border: 2px solid ${themeVars.alabamaCrimson};
    border-radius: 5px;
    margin: 100px 0 30px 0;
    padding-left: 25px;
`;

const CancelMessage = styled.h2`
    font-family: ${themeVars.contentFont};
    width: 440px;
    padding: 30px 0 15px 0; 
    margin-bottom: 20px;
    text-align: center;
    font-size: 25px;
    color: ${themeVars.alabamaCrimson};
`;

export default CancelFlight;