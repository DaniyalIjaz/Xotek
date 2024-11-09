import React from 'react'
import Carousel from '../components/carousel/Carousel'
import ProductsHome from '../components/productsHome/ProductsHome'
import Hero from '../components/hero/Hero'
import VideoSection from '../components/videoSection/VideoSection'
import ContactsSection from '../components/contactsSection/ContactsSection'
import HeadingBig from '../components/headingBig/headingBig'
import LogoCarousel from '../components/logoCarousel/LogoCarousel'
import { ThreeDCardDemo } from '../components/threeDCardDemo/ThreeDCardDemo'
import ThreeDCards from '../components/threeDCards/threeDCards'
import CarouselCard from '../components/carouselCard/CarouselCard'

const Home = () => {
  return (
    <>
    <Hero/>
    <VideoSection/>
    <ContactsSection/>
    <HeadingBig p1='What'  p2='do'  p3='you' p4='need' p5='help'  p6='with?'/>

    <ThreeDCards/>
    <CarouselCard/>
    <HeadingBig p1='Trusted by' p5='Awesome'  p6='Clients'/>
    <LogoCarousel/>
      {/* <Carousel/>
      <ProductsHome/> */}
    </>
  )
}

export default Home
