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
    height: 120px;
    margin: 1% auto;
}
`
const ContainerCategories = styled.div`
display: inline-block;
text-align: center;
margin: 10px 1% 0 3%;
`
const CatCirlce = styled.div`
height: 70px;
width: 70px;
border-radius: 100%;
background: ${props => props.color ? props.color : "white"};
box-shadow: 5px 5px 28px -11px rgba(0,0,0,0.5);
margin: auto;

@media (min-width: 768px) {
    height: 80px;
    width: 80px;
}
`
const CatTitle = styled.h3`
font-size: medium;
font-weight: 500;
font-family: Arial, Helvetica, sans-serif;
color: black;
margin-top: 0.4em; 
margin-bottom: 0;
`
const CatImg = styled.img`
height: 100%;
width: 100%;
border-radius: 100%;
/* margin-top:1em; */
`

export default function HorizontalCategories(){
    const [catId, setCatId] = useState(0)
    const [catName, setCatName] = useState("Todo")

    const logoToShow = (catId) =>{
        if (catId === 0){
            // return <HomeSharp color={'#fff'} title={'home'} height='60%' width='60%' style={{marginTop: '1em'}} />
            return <CatImg src='https://scontent.fgdl5-3.fna.fbcdn.net/v/t39.30808-6/211474850_122214823409785_8240091634345521733_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=973b4a&_nc_ohc=BmkUi_CvD54AX80j3Rv&_nc_ht=scontent.fgdl5-3.fna&oh=27dba9ec3ca3fb7a213d3d869c5360f1&oe=61009811'></CatImg>
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