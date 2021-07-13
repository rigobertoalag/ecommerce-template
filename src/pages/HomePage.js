import React from 'react'

import Header from '../components/Header'
import Carousel from '../components/Carousel'
import HorizontalCategories from '../components/HorizontalCategories'
import GridCardContainer from '../components/GridCardContainer'

export default function HomePage(){
    return(
        <>
            <Header />
            <Carousel />
            <HorizontalCategories />
            <GridCardContainer />
        </>
    )
}