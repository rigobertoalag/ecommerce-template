import React from 'react'
import styled from 'styled-components'
import { BagCheck } from 'react-ionicons'
import { globalStyles } from '../stylesConfig'

const HBody = styled.div`
background: ${globalStyles.header};
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
left: 47%;
top:0;
position: absolute;
height: 10%;
width: 10%;
margin: auto;

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
            <Logo>
                <BagCheck color={globalStyles.HLogo} title={''} height="100%" width="100%" />
            </Logo>
            {/* <ShoppingCart>C</ShoppingCart> */} {/* quitar cometario para implementar el shopping cart */}
        </HBody>        
        </>
    )
}