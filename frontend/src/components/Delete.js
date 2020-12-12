import React, { useEffect, useState } from 'react'
import styled from "styled-components";
    
const Delete = () => { 
    const [status, setStatus] = useState([]);
    const { id } = JSON.parse(window.localStorage.getItem('myData'));

    useEffect(() => {
        fetch(`http://localhost:8000/delete/${id}`, {method: "DELETE",})
            .then(res => {
                return res.json();
            })
            .then((res) => { 
                setStatus(res.status);
            });
    },);
    return (
        <Wrapper>
            { status === 200 ? (
                <h2>Reservation deleted!</h2>
            ) : (
                <h2>Reservation not found!</h2>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    border-collapse: collapse;
`;

export default Delete;