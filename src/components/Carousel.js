import React from 'react'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import { carousel } from '../products/carousel'

const CarouselContainer = styled.div`
height: 250px;
width: 95%;
border-radius: 15px;
margin: auto;
margin-top: 1.5em;
padding-bottom: 2em;

@media (min-width: 768px) {
    width: 95%;
    padding-bottom: 7em;
}
@media (min-width: 1024px) {
    width: 90%;
    height: 200px;
    padding-bottom: 10em;
}
`
const SliderImg = styled.img`
width: 100%;
height: 250px;
object-fit: cover;
border-radius: 15px;

@media (min-width: 768px) {
    height: 300px;
}
@media (min-width: 1024px) {
    height: 300px;
}
`
export default function Carousel(){
    return(
        <CarouselContainer>
            <AliceCarousel autoPlay autoPlayInterval="3000" disableButtonsControls>
                {
                    carousel.map((caimg) =>(
                        <SliderImg src={caimg.img} key={caimg.id}/>
                    ))
                }
            </AliceCarousel>
        </CarouselContainer>
    )
}