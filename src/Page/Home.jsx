import React from 'react'
import './Home.css'
import Hero from '../components/hero'
import VideoSection from '../components/videoSection'
import ContactsSection from '../components/contactsSection'
import HeadingBig from '../components/headingBig'
import LogoCarousel from '../components/logoCarousel'
import { ThreeDCardDemo } from '../components/threeDCardDemo'
import ThreeDCards from '../components/threeDCards'
import CarouselCard from '../components/carouselCard'
import ParallaxZoom from '../components/carousel3D'



const Home = () => {
  return (
    <>
    <Hero/>
    <VideoSection/>
    <ParallaxZoom/>

    <div className='homeCardComponent'>
      <HeadingBig p1='What'  p2='do'  p3='you' p4='need' p5='help'  p6='with?'/>
      <ThreeDCards/>
    </div>

    <ContactsSection/>
    <CarouselCard/>
    <HeadingBig p1='Trusted' p2='by' p4='Awesome'  p5='Clients'/>
    <LogoCarousel/>

      {/* <Carousel/>
      <ProductsHome/> */}
    </>
  )
}

export default Home
