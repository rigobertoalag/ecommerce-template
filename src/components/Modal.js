import React, {useEffect} from 'react'
import styled from 'styled-components'

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
`
const ModalHeader = styled.div`
padding: 10px;
`
const ModalTitle = styled.div`
margin: 0;
font-size: x-large;
`
const ModalBody = styled.div`
padding: 5%;
border-top: 1px solid #eee;
border-bottom: 1px solid #eee;
font-size: large;
`
const ModalFooter = styled.div`
padding: 5%;
bottom: 5%;
position: absolute;
`
const InfoBtn = styled.button`
border-radius: 5%;
width: 300px;
height: 50px;
background-color: #1dd80d;
color:white;
font-size: large;
`
const ModalImage = styled.img`
width: 100%;
height: 45%;
background-color: grey;
border-bottom-left-radius: 5%;
border-bottom-right-radius: 5%;
`
const CloseBtn = styled.button`
position: absolute;
top: 0;
margin-top: 10%;
left: 0;
margin-left: 5%;
height: 5%;
width: 10%;
`
const ModalPrice = styled.h1`
font-size: x-large;
font-weight: bolder;
padding: 5%;
border-bottom: 1px solid #eee;
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
            <CloseBtn onClick={props.onClose}>X</CloseBtn>
            <ModalContent onClick={e => e.stopPropagation()}>
                <ModalImage src={props.img}></ModalImage>
                <ModalHeader>
                    <ModalTitle>{props.title}</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    {props.description}
                </ModalBody>
                <ModalFooter>
                    <ModalPrice>Precio: ${props.price}</ModalPrice>
                    <InfoBtn onClick={props.onClose}>PEDIR INFORMES</InfoBtn>
                </ModalFooter>
            </ModalContent>
        </ModalContainer>
    )
}