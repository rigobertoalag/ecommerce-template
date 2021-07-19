import React from 'react'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import { carousel } from '../products/carousel'

const SliderImg = styled.img`
width: 100%;
height: 200px;
object-fit: cover;

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
        <>
        <AliceCarousel autoPlay autoPlayInterval="3000" disableButtonsControls>
            {
                carousel.map((caimg) =>(
                    <SliderImg src={caimg.img} key={caimg.id}/>
                ))
            }
        </AliceCarousel>
        </>
    )
}