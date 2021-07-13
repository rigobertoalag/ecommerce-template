import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
background-color: lightgrey;
margin-top: 5%;
height: 110px;
width: 100%;
overflow:scroll;
white-space: nowrap;

@media (min-width: 768px) {
    height: 140px;
    margin: 1% auto;
}
`
const ContainerCategories = styled.div`
display: inline-block;
text-align: center;
margin: 10px 2% 0;

@media (min-width: 1024px) {
    margin: 10px 1%;
}
`
const CatCirlce = styled.div`
height: 70px;
width: 70px;
border-radius: 100%;
background-color: ${props => props.color ? props.color : "white"};

@media (min-width: 768px) {
    height: 100px;
    width: 100px;
}
`
const CatTitle = styled.h3`
font-size: medium;
font-weight: normal;
font-family: Arial, Helvetica, sans-serif;
color: black;
margin-top: 2%;
margin-bottom: 0;
`

export default function HorizontalCategories(){
    return(
        <Body>
            <ContainerCategories>
                <CatCirlce color="lightgreen" />
                <CatTitle>lightgreen</CatTitle>
            </ContainerCategories>

            <ContainerCategories>
                <CatCirlce color="red" />
                <CatTitle>red</CatTitle>
            </ContainerCategories>

            <ContainerCategories>
                <CatCirlce color="purple" />
                <CatTitle>purple</CatTitle>
            </ContainerCategories>

            <ContainerCategories>
                <CatCirlce color="orange" />
                <CatTitle>orange</CatTitle>
            </ContainerCategories>

            <ContainerCategories>
                <CatCirlce color="lightyellow" />
                <CatTitle>lightyellow</CatTitle>
            </ContainerCategories>

            <ContainerCategories>
                <CatCirlce color="lightblue" />
                <CatTitle>lightblue</CatTitle>
            </ContainerCategories>
        </Body>
    )
}