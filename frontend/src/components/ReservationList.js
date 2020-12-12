import React, { useState, useEffect } from 'react';

import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import Button from './SeatSelect/Button';
import { useHistory } from "react-router-dom";



const ReservationList = ({allReservations, subStatus, setSubStatus, setAllReservations})=>{

    const history = useHistory();

    const isReservations = (allReservations.length > 0);

    console.log(isReservations)
    
    const handleDelete = (ev) =>{
        
        alert( `Are you sure to delete the reservation ${ev.id} 
            Press Ok to continue`);

        fetch(`/deleteReservations/${ev.id}`, {

            method: "Delete",
            body: JSON.stringify(allReservations),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }) 
        .then((res) => res.json())
        .then((json) => {
            const { status, error } = json;
            if (status === 200) {
                    setSubStatus("Delete");
                    console.log(json.data, 'delete post')
                    setAllReservations(json.data)  
                    console.log('after', allReservations)                  
                
            } else if (status===404) {
                setSubStatus("error");
                console.log([error]);
                history.push("/error")
            }
            });
    }


    return(
        <>
        {!isReservations &&

        <h1>You don't have any reservation in Data Base</h1>
        }

        

        {isReservations && 
        <>
        <h3>You have #<em>{allReservations.length} resevations</em>  in Data Base</h3>
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Flight Number</th>
                    <th>Seat #</th>
                    <th>Id #</th>
                    <th>

                    </th>
                </tr>
            </thead>
            <tbody>
                
                {allReservations.map(reservation =>(
                    <tr className="rowreservation" key={reservation.id}>
                        <td>{`${reservation.givenName} ${reservation.surname}`}</td>
                        <td>{reservation.email}</td>
                        <td>{reservation.flight}</td>
                        <td>{reservation.seat}</td>
                        <td>{reservation.id}</td>
                        <td>
                            <Button
                                value={'Delete'}
                                //disabled={disabled}
                                handleClick={() => handleDelete(reservation)}
                                subStatus={subStatus}
                            />
                        </td>

                    </tr>
                ))}

            </tbody>


            </Table>
            </>
            }
        </>
    )

}


const Table = styled.table`

    width: 100%;
    border-collapse: collapse;
    margin-top: 30px;
    

    & th{
        padding: 10px;
        margin: 0 10px;
        text-align: center;
        color: ${themeVars.headingFont};
        border-bottom: 1px solid ${themeVars.alabamaCrimson};

    }


    & td {
        padding: 10px;
        margin: 0 10px;
        text-align: left;
        border-bottom: 1px solid ${themeVars.alabamaCrimson};
    }

    & tr:hover{

        background: ${themeVars.alabamaCrimson};
        color: ${themeVars.selectiveYellow};
        border-color: ${themeVars.selectiveYellow};
    
    }
`

export default ReservationList
