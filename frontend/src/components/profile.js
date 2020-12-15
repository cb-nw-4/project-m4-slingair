import React, { useEffect,useState } from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import ListGroup from './ListGroup';
import ReservationList from "./ReservationList";


const Profile = ({subStatus, setSubStatus}) => {

    const [allReservations, setAllReservations] = useState([]);
    const [selectedFlight, setSlectedFlight] =useState('');


    const handleFlightSelect =(flight) =>{
        setSlectedFlight(flight);
    }


    useEffect(() => {
        
        fetch ('/reservations') 
            .then((res) => res.json())
            .then((json) =>{
                setAllReservations(json.data)
            })
        
    }, [setAllReservations]);

    const filteredReservations = (selectedFlight  && !(selectedFlight ==='AllFlights')) ? 
        allReservations.filter( reser => reser.flight === selectedFlight) : allReservations;
    
    return <Wrapper>
    
    <ListGroup  selectedItem={selectedFlight}
                onItemSelect={handleFlightSelect}

            />

    <Container>
        <ReservationList allReservations={filteredReservations}
                        setSubStatus={setSubStatus} 
                        subStatus={subStatus} 
                        setAllReservations={setAllReservations}/>

    </Container>

    
    </Wrapper>;
};

const Wrapper = styled.div`
    display: flex;
    align-content: space-between;
    padding: ${themeVars.pagePadding};
    margin-bottom: ${themeVars.pagePadding};
    align-items: center;
    max-height: 100%;

`

const Container = styled.div`
    flex-grow: 2;
    margin-left: 30px;

    padding: 20px;
`




export default Profile;