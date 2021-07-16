import React, { useState } from 'react'
import styled from 'styled-components'
import { categories } from '../products/categories'
import GridCardContainer from '../components/GridCardContainer'

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
background: ${props => props.color ? props.color : "white"};

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
const CatImg = styled.img`
height: 60%;
width: 60%;
margin-top:1em;
`

export default function HorizontalCategories(){
    const [catId, setCatId] = useState(0)
    const [catName, setCatName] = useState("Todo")
    return(
        <>
        <Body>
            {
                categories.map((cat) =>(
                    <ContainerCategories key={cat.category_id} onClick={
                        ()=> (setCatId(cat.category_id, setCatName(cat.nombre)))
                    }>
                        <CatCirlce color={cat.color}>
                            <CatImg src={cat.image}></CatImg>
                        </CatCirlce>
                        <CatTitle>{cat.nombre}</CatTitle>
                    </ContainerCategories>
                ))
            }
        </Body>
        <GridCardContainer catId={catId} catName={catName}/>
        </>
    )
}