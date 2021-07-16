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

export default function Card({catId}){
    const [showModal, setShowModal] = useState(false)
    const [title, setTitle] = useState("")
    const [img, setImg] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState()


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
                        <BtnSeeMore onClick={()=> (setShowModal(true), setTitle(item.name), setImg(item.img), setDescription(item.description), setPrice(item.price))}>VER MAS</BtnSeeMore>
                    </CardContainer>
                ))
            ):(
                dItems.map((item) => (
                    <CardContainer key={item.id} cardColor="lightblue">
                        <CardImage src={item.img}></CardImage>
                        <CardTitle>{item.name}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                        <BtnSeeMore onClick={()=> (setShowModal(true), setTitle(item.name), setImg(item.img), setDescription(item.description), setPrice(item.price))}>VER MAS</BtnSeeMore>
                    </CardContainer>
                ))
            )
        }
        <Modal 
            onClose={()=> setShowModal(false)} 
            show={showModal} 
            title={title}
            img={img}
            description={description}
            price={price}
        />
        </>
    )
}