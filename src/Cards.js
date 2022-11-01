import React from 'react'
import Card from './Card'
import {AnimatePresence ,motion} from 'framer-motion' 


const Cards = ({Api}) => {

    return (
<AnimatePresence>

<motion.div 
className='cards-section'

initial={{
  opacity: 0,
  translateX: -500,
}}
animate={{
  opacity: 1,
  translateX: 0,
}}
transition={{
  duration: 0.5,
  translateX: -500,
}}
exit={{
  opacity: 0,
  translateX: -500,
}}

 >{Api.map((apii, index) => {
    return (
<Card key={index} {...apii} /> 
    )

  })}</motion.div>

</AnimatePresence>

    );



  };
  
  export default Cards;