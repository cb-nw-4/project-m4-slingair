import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import plane from "../assets/planeImg.png";

import { themeVars } from "./GlobalStyles";



const Page404 = ({location}) => {

    console.log(location, 'location error')
    return ( 

            <Mainbox>
            <div className="err">4</div>
            <img src={plane} alt='img plane'/>
            <div className="err2">4</div>
            <div className="msg">
                Something goes wrong with your reservation 
                <p>Let's go <Link to="/">home</Link> and try from there.</p>
            </div>
            </Mainbox>


    );
}
 

const Mainbox = styled.div`
    margin: auto;
    height: 600px;
    width: 600px;
    position: relative;



    .err {
        color: ${themeVars.alabamaCrimson};
        font-family: 'Nunito Sans', sans-serif;
        font-size: 11rem;
        position:absolute;
        left: 20%;
        top: 8%;
    }

    .far {
        position: absolute;
        font-size: 8.5rem;
        left: 42%;
        top: 15%;
        color: #ffffff; 
        }

    .err2 {
        color:${themeVars.alabamaCrimson};
        font-family: 'Nunito Sans', sans-serif;
        font-size: 11rem;
        position:absolute;
        left: 68%;
        top: 8%;
    }

    .msg {
        text-align: center;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 1.6rem;
        position:absolute;
        left: 16%;
        top: 45%;
        width: 75%;
    }

    & img{
        height: 100px;
        width: 150px;
        position:absolute;
        left: 40%;
        top: 8%;
        animation: App-img-spin 1s infinite;
    }


    @keyframes App-img-spin {
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg) ;
    }
    100% {
        transform: rotate(360deg) ;
    }
    }

    & p{
        padding: 20px 0;
        margin-top: 40px;
    }

    & a {
        text-decoration: none;
        color: ${themeVars.alabamaCrimson};
    }

    & a:hover {
        text-decoration: underline;
    }

`
export default Page404;