import React from 'react'
import './index.css'
import {motion} from  'framer-motion'
import { fadeIn } from '../../variants'
import { rotateSlideIn } from '../../variants'
import { scaleFadeIn } from '../../variants'
import { bounceIn } from '../../variants'

const HeadingBig = (props) => {
  return (
    <div>
      <div className="headingBigMain">
        <div className='upperHeadingBig'>
            <motion.p
                variants={bounceIn(0.1)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
            >{props.p1}</motion.p>
            <motion.p
                variants={bounceIn(0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
            >{props.p2}</motion.p>
            <motion.p
                  variants={bounceIn(0.3)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.7 }}
            >{props.p3}</motion.p>
            </div>

            <div className='lowerHeadingBig'>

            <motion.p
                  variants={bounceIn(0.4)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.7 }}
            >{props.p4}</motion.p>
            <motion.p
                  variants={bounceIn(0.5)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.7 }}
            >{props.p5}</motion.p>
            <motion.p
                  variants={bounceIn(0.6)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.7 }}
            >{props.p6}</motion.p>
            </div>
        </div>

    </div>
  )
}

export default HeadingBig
