import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const Admin = () => {
    const[reservations, setReservations] =useState([]);

    useEffect(() => {
        fetch("/reservations")
        .then(res => res.json())
        .then((json)=>{
            const{ status, data } = json;
            status
        })
    }, [])
}