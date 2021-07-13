import React from 'react'
import styled from 'styled-components'
import {CardContainer, BtnSeeMore} from '../styles/Components'

const CardImage = styled.div`
background-color: white;
width: 100%;
height: 90px;
`
const CardTitle = styled.h1`
color: white;
font-weight: bold;
font-size: 20px;
font-family: Helvetica, sans-serif;
text-align: left;
margin: 1% 5%;
`
const CardDescription = styled.p`
color: white;
font-size: 10px;
font-family: Helvetica, sans-serif;
text-align: left;
margin: 5% 5%;
`

export default function Card(){
    return(
        <CardContainer>
            <CardImage style={{color: 'black'}}>aqui va la img</CardImage>
            <CardTitle>Aqui va el titulo</CardTitle>
            <CardDescription>Esta es la descripcion ya con mas texto para describir el producto</CardDescription>
            <BtnSeeMore>VER MAS</BtnSeeMore>
        </CardContainer>
    )
}