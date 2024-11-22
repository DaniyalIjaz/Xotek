import React from 'react'
import './WhyXotek.css'
import HeadingBig from '../components/headingBig/headingBig'
import LogoCarousel from '../components/logoCarousel/LogoCarousel'
import CarouselCard from '../components/carouselCard/CarouselCard'

const WhyXotek = () => {
  return (
    <div className='whyMain'>
    <HeadingBig p1='Trusted' p2='by' p4='Awesome'  p5='Clients'/>
    <LogoCarousel/>
        <CarouselCard/>
    </div>
  )
}

export default WhyXotek
    