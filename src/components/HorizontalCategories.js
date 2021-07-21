import React, { useState } from 'react'
import styled from 'styled-components'
import { categories } from '../products/categories'
import GridCardContainer from '../components/GridCardContainer'
import { HomeSharp, PricetagsSharp } from 'react-ionicons'
import { globalStyles } from '../stylesConfig'

const Body = styled.div`
background-color: ${globalStyles.HoriCatBody};
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
box-shadow: 5px 5px 28px -11px rgba(0,0,0,0.5);

@media (min-width: 768px) {
    height: 100px;
    width: 100px;
}
`
const CatTitle = styled.h3`
font-size: medium;
font-weight: 500;
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

    const logoToShow = (catId) =>{
        if (catId === 0){
            return <HomeSharp color={'#00000'} title={'home'} height='60%' width='60%' style={{marginTop: '1em'}} />
        }else if(catId === -1){
            return <PricetagsSharp color={'#fff'} title={'offer'} height='60%' width='60%' style={{marginTop: '1em'}} />
        }
    }

    return(
        <>
        <Body>
            {
                categories.map((cat) =>(
                    <ContainerCategories key={cat.category_id} onClick={
                        ()=> (setCatId(cat.category_id, setCatName(cat.nombre)))
                    }>
                        <CatCirlce color={cat.color}>
                            {cat.category_id === 0 || cat.category_id === -1 ? logoToShow(cat.category_id) : <CatImg src={cat.image}></CatImg>}
                        </CatCirlce>
                        <CatTitle>{cat.nombre.slice(0, 11) + (cat.nombre.length > 11 ? "..." : "")}</CatTitle>
                    </ContainerCategories>
                ))
            }
        </Body>
        <GridCardContainer catId={catId} catName={catName}/>
        </>
    )
}