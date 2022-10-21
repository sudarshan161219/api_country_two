import React from 'react'
const Card = ({ name, flags, region, population, capital  }) => {

var num = population;
var commas = num.toLocaleString("en-US");

  return (
  <>
    <article className="cards">
        <div className='card-container' >

         <div className='img-container'>
        <img className='flags' src={flags.png} alt="flags" /> 
         </div>

         <div className='info' >
        <h2>{name.official}</h2>
<div className="grid-info" >
        <h3>Population: <span>{commas}</span></h3>
        <h3>Region: <span>{region}</span></h3>
        <h3>Capital: <span>{capital}</span></h3>
</div>
        </div>

        </div>



    </article>
    </>
  );
};

export default Card;
