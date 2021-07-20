import React, {useState} from 'react'
import styled from 'styled-components'
import {CardContainer, BtnSeeMore} from '../styles/Components'
import {items} from '../products/items'
import Modal from './Modal'

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
const OfferLabel = styled.p`
background-color: crimson;
border-radius: 5px;
text-align: center;
width: 60%;
padding: 5%;
color: white;
font-size: smaller;
font-family: Helvetica, sans-serif;
box-shadow: 1px 1px 1px black;
margin-left: 5%;
`

export default function Card({catId}){
    const [showModal, setShowModal] = useState(false)
    const [title, setTitle] = useState("")
    const [img, setImg] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState()
    const [offerPercent, setOfferPercent] = useState()
    const [offer, setOffer] = useState(0)

    const dItems = items.filter(items => items.category === catId);
    const offerItems = items.filter(items => items.isOffer === true)

    const itemsByCategory = () =>{
        if(catId === 0){
            return items.map((item) => (
                    <CardContainer key={item.id} cardColor="lightblue">
                        <CardImage src={item.img}></CardImage>
                        <CardTitle>{item.name.slice(0, 20) + (item.name.length > 20 ? "..." : "")}</CardTitle>
                        <CardDescription>{item.description.slice(0, 70) + (item.description.length > 70 ? "..." : "")}</CardDescription>
                        {item.offer > 0 ? (<OfferLabel>Descuento {offerDiscount(item.offer, item.price)}%</OfferLabel>) : <></>}
                        <BtnSeeMore onClick={
                            ()=> (
                                setShowModal(true), 
                                setTitle(item.name), 
                                setImg(item.img), 
                                setDescription(item.description), 
                                setPrice(item.price),
                                setOffer(item.offer),
                                setOfferPercent(offerDiscount(item.offer, item.price))
                                )
                            }>VER MAS</BtnSeeMore>
                    </CardContainer>
                ))
            
        }else if(catId === -1){
            return offerItems.map((item) => (
                <CardContainer key={item.id} cardColor="lightblue">
                    <CardImage src={item.img}></CardImage>
                    <CardTitle>{item.name.slice(0, 20) + (item.name.length > 20 ? "..." : "")}</CardTitle>
                    <CardDescription>{item.description.slice(0, 70) + (item.description.length > 70 ? "..." : "")}</CardDescription>
                    {item.offer > 0 ? (<OfferLabel>Descuento {offerDiscount(item.offer, item.price)}%</OfferLabel>) : <></>}
                    <BtnSeeMore onClick={
                            ()=> (
                                setShowModal(true), 
                                setTitle(item.name), 
                                setImg(item.img), 
                                setDescription(item.description), 
                                setPrice(item.price),
                                setOffer(item.offer),
                                setOfferPercent(offerDiscount(item.offer, item.price))
                                )
                            }>VER MAS</BtnSeeMore>
                </CardContainer>
            ))
        }else{
            return dItems.map((item) => (
                <CardContainer key={item.id} cardColor="lightblue">
                    <CardImage src={item.img}></CardImage>
                    <CardTitle>{item.name.slice(0, 20) + (item.name.length > 20 ? "..." : "")}</CardTitle>
                    <CardDescription>{item.description.slice(0, 70) + (item.description.length > 70 ? "..." : "")}</CardDescription>
                    {item.offer > 0 ? (<OfferLabel>Descuento {offerDiscount(item.offer, item.price)}%</OfferLabel>) : <></>}
                    <BtnSeeMore onClick={
                            ()=> (
                                setShowModal(true), 
                                setTitle(item.name), 
                                setImg(item.img), 
                                setDescription(item.description), 
                                setPrice(item.price),
                                setOffer(item.offer),
                                setOfferPercent(offerDiscount(item.offer, item.price))
                                )
                            }>VER MAS</BtnSeeMore>
                </CardContainer>
            ))
        }
    }

    const offerDiscount = (offer, price) =>{
        const discount = (offer * 100) / price
        return discount
    }

    return(
        <>
        {itemsByCategory()}
        <Modal 
            onClose={()=> setShowModal(false)} 
            show={showModal} 
            title={title}
            img={img}
            description={description}
            offer={offer}
            price={price}
            offerPercent={offerPercent}
        />
        </>
    )
}