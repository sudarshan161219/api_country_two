import React from 'react'
import Card from './Card'

import {motion} from 'framer-motion' 
// import {AnimatePresence ,motion} from 'framer-motion' 


const Cards = ({Api}) => {

    return (
      <>
{/* <AnimatePresence> */}

<motion.section 
className='cards-section'
initial={{width:0}}
animate={{width:'100%'}}
exit={{x: window.innerWidth}}
transition={{ duration: 0.3 }}
 >{Api.map((apii, index) => {
    return (
<Card key={index} {...apii} /> 
    )

  })}</motion.section>

{/* </AnimatePresence> */}

</>
    );



  };
  
  export default Cards;