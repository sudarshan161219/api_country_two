import React from 'react'
import Card from './Card'
import Info from './Info'
import { Link } from 'react-router-dom';

const Cards = ({Api}) => {



    return (
      <>
<section className='cards-section' >{Api.map((apii, index) => {
    return (
<Card key={index} {...apii} /> 
    )

  })}</section>



</>
    );



  };
  
  export default Cards;