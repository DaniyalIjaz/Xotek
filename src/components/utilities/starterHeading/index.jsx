import React from 'react'
import './StarterHeading.css'

const StarterHeading = (props) => {
  return (
    <div>
       <div className="starterHeading">
            <h3>{props.h3}</h3>
            <p>{props.p}</p>
            <div className='rainbowHr'></div>
        </div>
    </div>
  )
}

export default StarterHeading
