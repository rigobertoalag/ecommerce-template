import React from 'react'
import styled from 'styled-components'

const HBody = styled.div`
background-color: black;
color: white;
margin: auto;
width: 100%;

@media (min-width: 320px) {
    height: 4em;
}
@media (min-width: 768px) {
    height: 4.2em;
}
@media (min-width: 1024px) {
    height: 4.5em;
}
`
const Logo = styled.div`
color: white;
font-size: 30px;
left: 50%;
margin-left: -50px;
top:0;
margin-top: 3%;
text-align: center;
position: absolute;

@media (min-width: 768px) {
    top:0;
    margin-top: 2%;
}
@media (min-width: 1024px) {
    top:0;
    margin-top: 2%;
}
`
const ShoppingCart = styled.div`
color: white;
font-size: 30px;
margin: 10px 0 0 0 ;
right: 0;
margin-right: 10%;
top:0;
margin-top: 3%;
position: absolute;

@media (min-width: 768px) {
    top:0;
    margin-top: 2%;
    margin-right: 5%;
}
@media (min-width: 1024px) {
    top:0;
    margin-top: 2%;
    margin-right: 5%;
}
`

export default function Header(){
    return(
        <>
        <HBody>
            <Logo>LOGO </Logo>
            <ShoppingCart>C</ShoppingCart>
        </HBody>        
        </>
    )
}