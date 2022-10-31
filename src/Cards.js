import React from 'react'
import Card from './Card'
import {motion} from 'framer-motion'

const Cards = ({Api}) => {



    return (
      <>
<motion.section 
className='cards-section'
initial={{width:0}}
animate={{width:'100%'}}
exit={{x: window.innerWidth}}
transition={{ duration: 1 }}
 >{Api.map((apii, index) => {
    return (
<Card key={index} {...apii} /> 
    )

  })}</motion.section>



</>
    );



  };
  
  export default Cards;