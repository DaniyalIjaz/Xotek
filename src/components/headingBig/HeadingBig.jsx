import React from 'react'
import './headingBig.css'
import {motion} from  'framer-motion'
import { fadeIn } from '../../variants'
import { rotateSlideIn } from '../../variants'
import { scaleFadeIn } from '../../variants'
import { bounceIn } from '../../variants'

const HeadingBig = () => {
  return (
    <div>
      <div className="headingBigMain">
        <div className='upperHeadingBig'>
            <motion.p
                variants={bounceIn(0.1)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
            >What</motion.p>
            <motion.p
                variants={bounceIn(0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
            >do</motion.p>
            <motion.p
                  variants={bounceIn(0.3)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.7 }}
            >you</motion.p>
            </div>

            <div className='lowerHeadingBig'>

            <motion.p
                  variants={bounceIn(0.4)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.7 }}
            >need</motion.p>
            <motion.p
                  variants={bounceIn(0.5)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.7 }}
            >help</motion.p>
            <motion.p
                  variants={bounceIn(0.6)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.7 }}
            >with?</motion.p>
            </div>
        </div>

    </div>
  )
}

export default HeadingBig
