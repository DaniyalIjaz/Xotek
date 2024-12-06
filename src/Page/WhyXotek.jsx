import React from 'react'
import './WhyXotek.css'
import HeadingBig from '../components/headingBig'
import LogoCarousel from '../components/logoCarousel'
import CarouselCard from '../components/carouselCard'

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
    