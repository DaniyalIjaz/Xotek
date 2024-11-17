import React from 'react'
import './Home.css'
import Hero from '../components/hero/Hero'
import VideoSection from '../components/videoSection/VideoSection'
import ContactsSection from '../components/contactsSection/ContactsSection'
import HeadingBig from '../components/headingBig/headingBig'
import LogoCarousel from '../components/logoCarousel/LogoCarousel'
import { ThreeDCardDemo } from '../components/threeDCardDemo/ThreeDCardDemo'
import ThreeDCards from '../components/threeDCards/threeDCards'
import CarouselCard from '../components/carouselCard/CarouselCard'
import ParallaxZoom from '../components/carousel3D/ParallaxZoom'



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
