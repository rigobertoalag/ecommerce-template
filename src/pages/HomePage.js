import React from 'react'

import Header from '../components/Header'
import Carousel from '../components/Carousel'
import HorizontalCategories from '../components/HorizontalCategories'

export default function HomePage(){
    return(
        <>
            <Header />
            <Carousel />
            <HorizontalCategories />
        </>
    )
}