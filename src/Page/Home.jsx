import React from 'react'
import Carousel from '../components/carousel/Carousel'
import ProductsHome from '../components/productsHome/ProductsHome'
import Hero from '../components/hero/Hero'
import VideoSection from '../components/videoSection/VideoSection'
import ContactsSection from '../components/contactsSection/ContactsSection'
import HeadingBig from '../components/headingBig/headingBig'

const Home = () => {
  return (
    <>
    <Hero/>
    <VideoSection/>
    <ContactsSection/>
    <HeadingBig/>
      {/* <Carousel/>
      <ProductsHome/> */}
    </>
  )
}

export default Home
