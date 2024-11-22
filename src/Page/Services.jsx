import React from 'react'
import HeadingBig from '../components/headingBig/headingBig'
import ThreeDCards from '../components/threeDCards/threeDCards'

const Services = () => {
  return (
    <>
     <div className='homeCardComponent'>
      <HeadingBig p1='What'  p2='do'  p3='you' p4='need' p5='help'  p6='with?'/>
      <ThreeDCards/>
    </div>
      
    </>
  )
}

export default Services
