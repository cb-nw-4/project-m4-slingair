import React, { useState } from "react";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";

const ResByID=()=>{
    //console.log(userReservation);
    const [value, setValue]=useState('');
    let bool=false;
    let resData={};
    const handleSubmit =  (ev) => {
        ev.preventDefault();
        if(value.length===36){
            fetch(`/getreservation/${value}`)
            .then(res=>res.json())
            .then(res=>resData=res.data)
            .then(()=>{
                if(resData.id===value){
                    console.log(resData.givenName)
                    bool=true;
                    return(
                        <div>{(bool===true)?<p>{resData.givenName} </p>:<p></p>}
                        </div>
                    )
                }
            })
        }
    }

    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    name="Reservation ID"
                    placeholder="Reservation ID"
                    type="text"
                    value={value}
                    onChange={(ev) => {
                        setValue(ev.target.value)
                    }}
                />
                <button type='submit' >Submit</button>
            </form>
            <div>{(bool===true)?<p>{resData.givenName} </p>:<p></p>}
            </div>
        </>
    )
};

export default ResByID;

// fetch("/allreservations")
// .then(res=>res.json())
// .then(res=>resData=res.data)
// .then(()=>console.log(resData))
// {resData.map(el=>{
//     return <div>{el.id}</div>
// })}