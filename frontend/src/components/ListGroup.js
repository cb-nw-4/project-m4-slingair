import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";



const ListGroup = ({selectedItem, onItemSelect}) => {

    const [flights, setFlights] = useState([]);

    const allFlights = ['AllFlights', ...flights];


    useEffect(() => {
        // TODO: fetch the flight numbers
        fetch('/flights')
            .then((res) => res.json())
            .then((json) => {
                    setFlights(json.data);
    })

    }, []);


    return (<Ul>
        {allFlights.map(flight=> 
            <li key={flight} 
            value={flight}
            className={flight === selectedItem ? "active" : ""}
            onClick= {()=> onItemSelect(flight)}> {flight}</li>
            
            )}
    </Ul>  );
}

const Ul= styled.ul`

    align-items: center;
    max-height: 100%;
    margin: 20px;

    & li{
        margin: 0 20px;
        color: ${themeVars.alabamaCrimson};
        padding: 20px 40px;
        border: 1px solid ${themeVars.alabamaCrimson};
        background: ${themeVars.selectiveYellow};
        text-align: center;
        
    }

    .active{
        font-weight: bolder;
        background-color: ${themeVars.alabamaCrimson};
        color: white;
        border-color: ${themeVars.selectiveYellow};

    }
`

export default ListGroup;