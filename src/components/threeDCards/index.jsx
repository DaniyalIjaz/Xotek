import React from 'react'
import { motion } from 'framer-motion'
import { rotateSlideIn } from '../../variants'
import './ThreeDCards.css'
import { ThreeDCardDemo } from '../threeDCardDemo'

const ThreeDCards = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05 },
  }

  return (
    <>
    <motion.div
      className='threeDCardsContainer'
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      }}
    >

<motion.div
                variants={rotateSlideIn('up', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
            >
                    <motion.div variants={cardVariants} whileHover="hover">
                      <ThreeDCardDemo p1='Take your designs' p2='to next level' image='/Images/threeDCard/1.webp'/>
                    </motion.div>
            </motion.div>
            <motion.div
                variants={rotateSlideIn('up', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
            >
                    <motion.div variants={cardVariants} whileHover="hover">
                      <ThreeDCardDemo p1='Get design help' p2='to raise capital' image='/Images/threeDCard/1.webp'/>
                    </motion.div>
            </motion.div>
            <motion.div
                  variants={rotateSlideIn('up', 0.4)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.7 }}
            >
                        <motion.div variants={cardVariants} whileHover="hover">
                          <ThreeDCardDemo p1='Create a' p2='clickable prototype' image='/Images/threeDCard/2.webp'/>
                        </motion.div>
            </motion.div>

    </motion.div>
    </>
  )
}

export default ThreeDCards
