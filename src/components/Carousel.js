import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
background-color: gray;
height: 200px;
width: 100%;

@media (min-width: 768px) {
    height: 250px;
    width: 95%;
    margin: 1em auto;
}
@media (min-width: 1024px) {
    width: 90%;
}
`

export default function Carousel(){
    return(
        <Body></Body>
    )
}