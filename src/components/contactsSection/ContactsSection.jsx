import React from 'react'
import './ContactsSection.css'
import {motion} from  'framer-motion'
import { fadeIn } from '../../variants'
import { rotateSlideIn } from '../../variants'

const ContactsSection = () => {
  return (
    <div className='contactSecMain'>
      <div className="contactPara">
        <motion.p
        variants={rotateSlideIn('down', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}>Our</motion.p>
        <motion.p
        variants={rotateSlideIn('down', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>team</motion.p>
        <motion.p
        variants={rotateSlideIn('down', 0.4)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>will</motion.p>
        <motion.p
        variants={rotateSlideIn('down', 0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>follow</motion.p>
        <motion.p
        variants={rotateSlideIn('down', 0.6)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>up</motion.p>
        <motion.p
        variants={rotateSlideIn('down', 0.7)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>within</motion.p>
        <motion.p
        variants={rotateSlideIn('down', 0.8)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>24</motion.p>
        <motion.p
        variants={rotateSlideIn('down', 0.9)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>hrs</motion.p>
      </div>

      {/* second heading  */}
      <div className="contactPara2">
        <motion.p
        variants={fadeIn('up',0.1)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}>Last</motion.p>
        <motion.p
        variants={fadeIn('up',0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }} style={{ fontWeight: 'bold', color: '#054a80' }} >2</motion.p>
        <motion.p
        variants={fadeIn('up',0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>slots</motion.p>
        <motion.p
        variants={fadeIn('up',0.4)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>-</motion.p>
        <motion.p
        variants={fadeIn('up',0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>grab</motion.p>
        <motion.p
        variants={fadeIn('up',0.6)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>yours!</motion.p>
        
      </div>

    {/* buttons  */}
    <div className="contactSecBtn">
        {/* button 1  */}

        <button className='btn-95'>
            <b>CHAT WITH US</b>
        </button>


        {/* button 2  */}
        <button className="btn-96"><span>MORE PROJECTS</span></button>
    </div>
    
    </div>
  )
}

export default ContactsSection
