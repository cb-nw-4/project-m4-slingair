import React, { useEffect } from "react";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";

const UserData=({email})=>{
    console.log(email);
    useEffect(()=>{
        fetch(`/view-reservation/${email}`)
        .then(res=>res.json())
        .then(res=>console.log(res))
    },[])
    
    return(
        <>
            <p>yaaaaaaas</p>
        </>
    )
};

export default UserData;
