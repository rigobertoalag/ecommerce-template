import React, {useEffect} from 'react'
import styled from 'styled-components'
import { Close, LogoWhatsapp } from 'react-ionicons'

const ModalContainer = styled.div`
position: fixed;
left: 0;
top: 0;
right: 0;
bottom: 0;
background-color: rgb(0, 0, 0, 0.5);
display: flex;
align-items: center;
justify-content: center;
font-family: Arial, Helvetica, sans-serif;
color: black;
`
const ModalContent = styled.div`
width: 90%;
height: 85%;
margin-top: 10%;
background-color: white;

@media (min-width: 768px) {
    margin-top: 2%;
}
`
const ModalHeader = styled.div`
padding: 10px;
background: #efeff1;
`
const ModalTitle = styled.div`
margin: 0;
font-size: x-large;
font-weight: bold;
`
const ModalBody = styled.div`
padding: 5%;
font-size: larger;
`
const ModalFooter = styled.div`
padding: 5%;
bottom: 5%;
position: absolute;
`
const InfoBtn = styled.div`
margin: auto;
text-align: center;
padding: 10px;
border-radius: 10px;
width: 300px;
background-color: #1dd80d;
color:white;
font-size: large;
border: none;

@media (min-width: 768px) {
    margin: 0 8em;
}
`
const ModalImage = styled.img`
width: 100%;
height: 45%;
background-color: grey;
box-shadow: 5px 32px 50px -28px rgba(0,0,0,0.20);
`
const CloseBtn = styled.div`
position: absolute;
top: 0;
margin-top: 10%;
left: 0;
margin-left: 5%;
height: 5%;
width: 10%;

@media (min-width: 768px) {
    margin-top: 2%;
    height: 2.7em;
    width: 2.7em;
}
`
const ModalPrice = styled.h1`
font-size: x-large;
font-weight: bolder;
padding: 5% 0 5%;
border-top: 1px solid #eee;
border-bottom: 1px solid #eee;
margin-top: 0.5em;
`
const ModalOffer = styled.h1`
font-size: x-large;
font-weight: bolder;
color: crimson;
`
const ModalPriceDisable = styled.h1`
font-size: large;
font-weight: bold;
color: grey;
text-decoration: line-through;
border-bottom: 1px solid #eee;
`
const ModalOfferDiscount = styled.span`
background-color: crimson;
color: white;
text-align: center;
font-size: small;
padding: 0.5em;
border-radius: 10px;
margin-left: 1em;
margin-top: 0;
position: absolute;
`

export default function Modal(props){
    const closeOnEscapeKeyDown = (e) => {
        if((e.charCode || e.keyCode) === 27){
            props.onClose()
        }
    }
    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup(){
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    },[])

    if(!props.show){
        return null
    }

    return(
        <ModalContainer onClick={props.onClose}>
            <CloseBtn onClick={props.onClose}>
                <Close
                color={'#fff'} 
                title={'close'}
                height="100%"
                width="100%"
                />
            </CloseBtn>
            <ModalContent onClick={e => e.stopPropagation()}>
                <ModalHeader>
                    <ModalTitle>{props.title}</ModalTitle>
                </ModalHeader>
                <ModalImage src={props.img}></ModalImage>
                <ModalBody>
                    {props.description}
                </ModalBody>
                <ModalFooter>
                    {
                        props.offer > 0 ? (
                            <>
                            <ModalOffer>Rebaja: ${props.price - props.offer} <ModalOfferDiscount>{props.offerPercent}%</ModalOfferDiscount></ModalOffer>
                            <ModalPriceDisable>Precio: ${props.price}</ModalPriceDisable>
                            </>
                        ) : (
                            <ModalPrice>Precio: ${props.price}</ModalPrice>
                        )
                    }
                    <InfoBtn onClick={() => alert('Redireccion a WhatsApp para consultar sobre el pedido que selecciono el usuario')}>
                        PEDIR INFORMES
                        <span style={{display: 'inline-block', marginLeft: '0.5em'}}>
                        <LogoWhatsapp
                        color={'#fff'} 
                        shake 
                        title={'info'}
                        height="20px"
                        width="20px"
                        />
                        </span>
                    </InfoBtn>
                </ModalFooter>
            </ModalContent>
        </ModalContainer>
    )
}