import React from 'react'
import { Link } from 'react-router-dom';
const Card = ({index, name, flags, region, population, capital  }) => {

var num = population;
var commas = num.toLocaleString("en-US");

  return (
<article className="cards">
      <Link to={`/info/${name.official.toLowerCase().replace(/\s/g, "%20")}`} style={{ textDecoration: 'none' }}>  
      <div className='card-container' >
         <div className='img-container'>
        <img className='flags' src={flags.png} alt={name.official} /> 
         </div>

         <div className='info' >
        <h2>{name.common}</h2>
<div className="grid-info" >
        <h3>Population: <span>{commas}</span></h3>
        <h3>Region: <span>{region}</span></h3>
        <h3>Capital: <span>{capital}</span></h3>
</div>
        </div>
        </div>
        </Link>
    </article>
  );
};

export default Card;
