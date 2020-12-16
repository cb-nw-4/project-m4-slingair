import React, { useEffect, useState }  from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const Admin = () => {
    const [allReservations, setAllReservations] = useState([]);
    
    useEffect(() => {
        fetch('/reservations')
            .then((res) => res.json())
            .then((json) => setAllReservations(json.data));
    }, []);

    return (
        <>
        <>{allReservations && (
            <BigWrapper>
                <Heading>Reservations:</Heading>
                <>{allReservations.map((reservation) => {
                    return (
                        <List>
                            <Id><span><b>Reservation #: </b></span>{`${reservation.id}`}</Id>
                            <Flight><span><b>Flight #: </b></span>{`${reservation.flight}`}</Flight>
                            <Seat><span><b>Seat #: </b></span>{`${reservation.seat}`}</Seat>
                            <Name><span><b>Name: </b></span>{`${reservation.givenName} ${reservation.surname}`}</Name>
                            <Email><span><b>Email: </b></span>{`${reservation.email}`}</Email>
                        </List>
                );
                })}
                </>
            </BigWrapper>
        )}
        </>
        <>{!allReservations && (
            <BigWrapper>
            <Wrapper>
                <Message>No reservation found.</Message>
            </Wrapper>
            </BigWrapper>
        )}
        </>
        </>
    )
}

const BigWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 500px;
    border: 2px solid ${themeVars.alabamaCrimson};
    border-radius: 5px;
    margin: 100px 0 30px 0;
    padding-left: 25px;
`;

const Heading = styled.h2`
    margin: 30px 0 15px 0;
    font-size: 40px;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 500px;
    border: 2px solid ${themeVars.alabamaCrimson};
    border-radius: 5px;
    margin: 15px 0 15px 0;
    padding-left: 25px;
`;

const Id = styled.li`
    margin: 30px 0 20px 0;
`;

const Flight = styled.li`
    margin-bottom: 20px;
`;

const Seat = styled.li`
    margin-bottom: 20px;
`;

const Name = styled.li`
    margin-bottom: 20px;
`;

const Email = styled.li`
    margin-bottom: 30px;
`;

const Message = styled.h2`
    font-family: ${themeVars.contentFont};
    width: 440px;
    padding: 30px 0 15px 0; 
    margin-bottom: 20px;
    text-align: center;
    font-size: 25px;
    color: ${themeVars.alabamaCrimson};
`;

export default Admin;