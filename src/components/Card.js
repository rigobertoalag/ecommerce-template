import React from 'react'
import styled from 'styled-components'
import {CardContainer, BtnSeeMore} from '../styles/Components'
import {items} from '../products/items'

const CardImage = styled.img`
width: 100%;
height: 90px;
`
const CardTitle = styled.h1`
color: black;
font-weight: bold;
font-size: 20px;
font-family: Helvetica, sans-serif;
text-align: left;
margin: 1% 5%;
`
const CardDescription = styled.p`
color: black;
font-size: 10px;
font-family: Helvetica, sans-serif;
text-align: left;
margin: 5% 5%;
`

export default function Card({catId}){
    const dItems = items.filter(items => items.category === catId);
    return(
        <>
        {
            catId === 0 ? (
                items.map((item) => (
                    <CardContainer key={item.id} cardColor="lightblue">
                        <CardImage src={item.img}></CardImage>
                        <CardTitle>{item.name}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                        <BtnSeeMore>VER MAS</BtnSeeMore>
                    </CardContainer>
                ))
            ):(
                dItems.map((item) => (
                    <CardContainer key={item.id} cardColor="lightblue">
                        <CardImage src={item.img}></CardImage>
                        <CardTitle>{item.name}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                        <BtnSeeMore>VER MAS</BtnSeeMore>
                    </CardContainer>
                ))
            )
        }
        </>
    )
}