import React, { useState } from "react";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";

const UserLogInPage=({setEmail})=>{
    //console.log(userReservation);
    const [value, setValue]=useState('');
    const validateEmail = () => {
        const emailParts = value.split("@");
        return (
            emailParts.length === 2 &&
            emailParts[0].length > 0 &&
            emailParts[1].length > 0
        );
    };
    const handleSubmit =  (ev) => {
        ev.preventDefault();
        if (validateEmail()) {
            setEmail(value);
            console.log(value);
            window.location.href = "/profile/userprofile";
        }
    }

    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={value}
                    onChange={(ev) => {
                        setValue(ev.target.value)
                    }}
                />
                <button type='submit' >Submit</button>
            </form>
        </>
    )
};

export default UserLogInPage;

// fetch("/allreservations")
// .then(res=>res.json())
// .then(res=>resData=res.data)
// .then(()=>console.log(resData))
// {resData.map(el=>{
//     return <div>{el.id}</div>
// })}