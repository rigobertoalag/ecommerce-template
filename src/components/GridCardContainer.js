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
export default function GridCardContainer({catId, catName}){ 
    const setItemsByID = () =>{
        if(catId){
            console.log('es el id: ', catId)
            return <Card catId={catId}></Card>
        }else{
            console.log('es el id: ', catId)
            return <Card catId={0}></Card>
        }
    }
    return(
        <>
        <h1>{catName}</h1>
        <Body>
            {setItemsByID()}
        </Body>
        </>
    )
}