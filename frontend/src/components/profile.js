import React, { useEffect,useState } from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import ReservationList from "./ReservationList";


const Profile = ({subStatus, setSubStatus}) => {

    const [allReservations, setAllReservations] = useState([]);

    useEffect(() => {
        
        fetch ('/reservations') 
            .then((res) => res.json())
            .then((json) =>{
                setAllReservations(json.data)
            })
        
    }, [setAllReservations]);


    return <Wrapper>
    <Container>
        <ReservationList allReservations={allReservations}
                        setSubStatus={setSubStatus} 
                        subStatus={subStatus} 
                        setAllReservations={setAllReservations}/>

    </Container>

    
    </Wrapper>;
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
    padding: 20px;
`




export default Profile;