import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import ModifyReservation from './ModifyReservation';
import { themeVars } from "./GlobalStyles";
import Button from "./SeatSelect/Button";


const Reservation = ({userReservation, setUserReservation, subStatus, setSubStatus}) => {
    const history = useHistory();

    const [isModify, setIsModify] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    let dataUser;
    const isReservation = (localStorage.length > 0);


    const handleModify = (ev) =>{
        ev.preventDefault()
        setIsModify(true);
        history.push("/modifyReservation")

    }

    const handleDelete = (ev) =>{
        ev.preventDefault()

        alert( `Are you sure to delete your reservation ${localStorage.id}??
        Press Ok to continue`);

    fetch(`/deleteReservations/${localStorage.id}`, {

        method: "Delete",
        body: JSON.stringify(dataUser),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    }) 
    .then(res => (res.json()))
    .then((json) => {
        const { status, error } = json;
        if (status === 200) {
            setSubStatus("Delete");
            localStorage.clear()
            history.push("/")

        }else if (status===404) {
            setSubStatus("error");
            console.log([error]);
            history.push("/error")
        }
        })
    }

    //console.log('userReservation', userReservation)

    return (<Wrapper>

    {!isReservation &&

        <h1>You don't have any reservation in Data Base</h1>
    }

    {isReservation && 

        <>
        <h2>This is your reservation page </h2>

        <DivContainer>
            <p>
                <b>Reservation #:</b>{userReservation.id}
            </p>

            <p>
                <b>Flight #:</b>{userReservation.flight}
            </p>
            <p>
                <b>seat #:</b>{userReservation.seat}
            </p>
            <p>
                <b>Name:</b>{userReservation.givenName} {userReservation.surname}
            </p>

            <p>
                <b>Email:</b>{userReservation.email}
            </p>

        </DivContainer>
        <Container>
            <Button
                value={'Modify'}
                //disabled={disabled}
                handleClick={handleModify}
                //subStatus={subStatus}
            />
            
            <Button
                value={'Delete'}
                //disabled={disabled}
                handleClick={handleDelete}
                //subStatus={subStatus}
            />

        </Container>

        </>
    
        }



        {isModify && 
            <ModifyReservation />
        }

    
    </Wrapper>);
};

const Wrapper = styled.div`
    display: flex;
    padding: ${themeVars.pagePadding};
    margin-bottom: ${themeVars.pagePadding};
    align-items: center;
    flex-direction: column;
    max-height: 100%;

`

const Container = styled.div`
    display: flex;
    padding: 20px;
    align-items: space-around;

& Button{
    margin: 10px;
}
    
`

const DivContainer = styled.div`
    margin: 30px;
    border: solid 2px ${themeVars.alabamaCrimson};
    padding: 20px;
    & p{
        padding: 10px;
    }
`




export default Reservation;
