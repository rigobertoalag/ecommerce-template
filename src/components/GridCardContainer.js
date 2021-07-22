import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Body = styled.div`
margin: 0;
height: 100%;
width: 100%;
color: white;
display: grid;
grid-template-columns: repeat(2, 1fr);
align-items: center;

@media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
}
@media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
}
@media (min-width: 1440px) {
    grid-template-columns: repeat(6, 1fr);
}
`
const CatTitle = styled.h1`
color: black;
font-family: Arial, Helvetica, sans-serif;
font-size: x-large;
margin:  0.5em 0.2em;
/* margin-bottom: 1em; */
padding-left: .5em;
`
export default function GridCardContainer({catId, catName}){ 
    const setItemsByID = () =>{
        if(catId){
            return <Card catId={catId}></Card>
        }else{
            return <Card catId={0}></Card>
        }
    }
    return(
        <>
        <CatTitle>{catName.slice(0, 40) + (catName.length > 40 ? "..." : "")}</CatTitle>
        <Body>
            {setItemsByID()}
        </Body>
        </>
    )
}