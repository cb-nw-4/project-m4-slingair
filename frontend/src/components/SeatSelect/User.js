import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";

const ResByID=()=>{
    //console.log(userReservation);
    const [value, setValue]=useState('');
    let bool=false;
    const [resData, setResData]=useState({});
    const handleSubmit =  (ev) => {
        ev.preventDefault();
        if(value.length===36){
            fetch(`/getreservation/${value}`)
            .then(res=>res.json())
            .then(res=>setResData(res.data))
        }
    }

    
    return (
        <Wrapper>
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
            {resData &&  
                <Section>
                    <Div><Span1>Reservation#: </Span1><span>{resData.id}</span></Div>
                    <Div><Span1>First Name: </Span1><span>{resData.givenName}</span></Div>
                    <Div><Span1>Surname: </Span1><span>{resData.surname}</span></Div>
                    <Div><Span1>Flight#: </Span1><span>{resData.flight}</span></Div>
                    <Div><Span1>Seat#: </Span1><span>{resData.seat}</span></Div>
                </Section>
            }
        </Wrapper>
    )
};
const Wrapper = styled.div`
    margin:auto;
    margin-top:43px;
    padding:40px;
    border: 2px solid ${themeVars.alabamaCrimson};
    border-radius:4px;
`;

const Span1=styled.span`
    font-weight: 650;
`;



const Div=styled.div`
    margin-top:15px;
`;

const Section=styled.div`
    border-top:3px solid ${themeVars.alabamaCrimson};
`;

export default ResByID;

// fetch("/allreservations")
// .then(res=>res.json())
// .then(res=>resData=res.data)
// .then(()=>console.log(resData))
// {resData.map(el=>{
//     return <div>{el.id}</div>
// })}