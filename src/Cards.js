import React from 'react'
import Card from './Card'


const Cards = ({Api}) => {
    return (
      <>
<section className='cards-section' >{Api.map((apii, index) => {
    return (
     <Card key={index} {...apii}/> 
    )
  })}</section>


</>
    );
  };
  
  export default Cards;